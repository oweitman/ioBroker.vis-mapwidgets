/**
 * Formats AJV validation errors into a readable, translated text.
 *
 * Requires a global or imported translation function:
 * _(text, arg1, arg2, arg3)
 *
 * @param {Array<object>} errors - AJV validate.errors
 * @param {object} schema - JSON schema used for validation
 * @param {*} data - Validated data
 * @returns {string}
 */
function formatAjvErrors(errors, schema, data) {
    if (!errors || errors.length === 0) {
        return _("The JSON configuration is valid.");
    }

    const sortedErrors = [...errors].sort(compareAjvErrors);
    const relevantErrors = filterFollowUpOneOfErrors(sortedErrors);

    const lines = [];
    lines.push(_("The JSON configuration contains %s error(s).", relevantErrors.length));
    lines.push("");

    const groupedAdditional = groupAdditionalProperties(relevantErrors);

    for (const group of groupedAdditional) {
        const location = formatPath(group.instancePath);

        lines.push(_("Unexpected properties in object %s:", location));
        lines.push("");

        for (const prop of group.properties) {
            lines.push(`  - ${prop}`);
        }

        const allowed = getAllowedProperties(schema, group.schemaPath, group.instancePath);
        if (allowed.length > 0) {
            lines.push("");
            lines.push(_("Allowed properties are:"));
            for (const prop of allowed) {
                lines.push(`  - ${prop}`);
            }
        }

        lines.push("");
    }

    const groupedAdditionalKeys = new Set(
        groupedAdditional.flatMap(group =>
            group.properties.map(prop => `${group.instancePath}|${group.schemaPath}|${prop}`)
        )
    );

    const remainingErrors = relevantErrors.filter(err => {
        if (err.keyword !== "additionalProperties") {
            return true;
        }

        const prop = err.params?.additionalProperty;
        return !groupedAdditionalKeys.has(`${err.instancePath}|${err.schemaPath}|${prop}`);
    });

    for (const err of remainingErrors) {
        lines.push(formatSingleAjvError(err, schema, data));
        lines.push("");
    }

    return lines.join("\n").trim();
}

/**
 * Sorts AJV errors by JSON path and keyword.
 *
 * @param {object} a
 * @param {object} b
 * @returns {number}
 */
function compareAjvErrors(a, b) {
    const pathCompare = String(a.instancePath || "").localeCompare(String(b.instancePath || ""));
    if (pathCompare !== 0) {
        return pathCompare;
    }

    return String(a.keyword || "").localeCompare(String(b.keyword || ""));
}

/**
 * Removes noisy sub-errors if a oneOf error exists at the same path.
 *
 * AJV often returns several technical follow-up errors for oneOf.
 * For user-facing output, the oneOf summary is usually clearer.
 *
 * @param {Array<object>} errors
 * @returns {Array<object>}
 */
function filterFollowUpOneOfErrors(errors) {
    const oneOfPaths = new Set(
        errors
            .filter(err => err.keyword === "oneOf")
            .map(err => err.instancePath || "")
    );

    return errors.filter(err => {
        if (err.keyword === "oneOf") {
            return true;
        }

        if (!oneOfPaths.has(err.instancePath || "")) {
            return true;
        }

        return false;
    });
}

/**
 * Groups additionalProperties errors by object path and schema path.
 *
 * @param {Array<object>} errors
 * @returns {Array<object>}
 */
function groupAdditionalProperties(errors) {
    const groups = new Map();

    for (const err of errors) {
        if (err.keyword !== "additionalProperties") {
            continue;
        }

        const key = `${err.instancePath}|${err.schemaPath}`;
        const prop = err.params?.additionalProperty ?? "<unknown>";

        if (!groups.has(key)) {
            groups.set(key, {
                instancePath: err.instancePath || "",
                schemaPath: err.schemaPath || "",
                properties: [],
            });
        }

        groups.get(key).properties.push(prop);
    }

    return Array.from(groups.values());
}

/**
 * Formats one AJV error.
 *
 * @param {object} err
 * @param {object} schema
 * @param {*} data
 * @returns {string}
 */
function formatSingleAjvError(err, schema, data) {
    const path = formatPath(err.instancePath);
    const value = getValueAtJsonPointer(data, err.instancePath);
    const actualType = getJsonType(value);

    switch (err.keyword) {
        case "required": {
            const missing = err.params?.missingProperty ?? "<unknown>";

            return [
                _("Error at %s:", path),
                _("Required property \"%s\" is missing.", missing),
            ].join("\n");
        }

        case "type": {
            return [
                _("Error at %s:", path),
                _("Invalid data type."),
                _("Expected: %s", formatExpectedType(err.params?.type)),
                _("Actual: %s", actualType),
                _("Value: %s", formatValue(value)),
            ].join("\n");
        }

        case "enum": {
            const allowed = getSchemaValue(schema, err.schemaPath, "enum");

            return [
                _("Error at %s:", path),
                _("Invalid value: %s", formatValue(value)),
                Array.isArray(allowed)
                    ? _("Allowed values: %s", allowed.map(formatValue).join(", "))
                    : _("The value is not allowed."),
            ].join("\n");
        }

        case "const": {
            const expected = getSchemaValue(schema, err.schemaPath, "const");

            return [
                _("Error at %s:", path),
                _("Invalid value: %s", formatValue(value)),
                _("Expected value: %s", formatValue(expected)),
            ].join("\n");
        }

        case "minimum": {
            return [
                _("Error at %s:", path),
                _("Value is below the minimum."),
                _("Minimum: %s", err.params?.limit),
                _("Actual: %s", formatValue(value)),
            ].join("\n");
        }

        case "maximum": {
            return [
                _("Error at %s:", path),
                _("Value exceeds the maximum."),
                _("Maximum: %s", err.params?.limit),
                _("Actual: %s", formatValue(value)),
            ].join("\n");
        }

        case "exclusiveMinimum": {
            return [
                _("Error at %s:", path),
                _("Value must be greater than %s.", err.params?.limit),
                _("Actual: %s", formatValue(value)),
            ].join("\n");
        }

        case "exclusiveMaximum": {
            return [
                _("Error at %s:", path),
                _("Value must be less than %s.", err.params?.limit),
                _("Actual: %s", formatValue(value)),
            ].join("\n");
        }

        case "minItems": {
            return [
                _("Error at %s:", path),
                _("Array contains too few elements."),
                _("Minimum number of elements: %s", err.params?.limit),
                _("Actual number of elements: %s", Array.isArray(value) ? value.length : actualType),
            ].join("\n");
        }

        case "maxItems": {
            return [
                _("Error at %s:", path),
                _("Array contains too many elements."),
                _("Maximum number of elements: %s", err.params?.limit),
                _("Actual number of elements: %s", Array.isArray(value) ? value.length : actualType),
            ].join("\n");
        }

        case "minLength": {
            return [
                _("Error at %s:", path),
                _("String is too short."),
                _("Minimum length: %s", err.params?.limit),
                _("Actual length: %s", typeof value === "string" ? value.length : actualType),
                _("Value: %s", formatValue(value)),
            ].join("\n");
        }

        case "maxLength": {
            return [
                _("Error at %s:", path),
                _("String is too long."),
                _("Maximum length: %s", err.params?.limit),
                _("Actual length: %s", typeof value === "string" ? value.length : actualType),
                _("Value: %s", formatValue(value)),
            ].join("\n");
        }

        case "pattern": {
            return [
                _("Error at %s:", path),
                _("String does not match the required pattern."),
                _("Pattern: %s", err.params?.pattern),
                _("Value: %s", formatValue(value)),
            ].join("\n");
        }

        case "oneOf": {
            return [
                _("Error at %s:", path),
                _("The object does not match any of the allowed variants."),
                _("Please check whether the required combination of properties is correct."),
                _("Value: %s", formatValue(value)),
            ].join("\n");
        }

        case "anyOf": {
            return [
                _("Error at %s:", path),
                _("The value does not match any of the allowed schemas."),
                _("Value: %s", formatValue(value)),
            ].join("\n");
        }

        case "allOf": {
            return [
                _("Error at %s:", path),
                _("The value does not match all required schemas."),
                _("Value: %s", formatValue(value)),
            ].join("\n");
        }

        case "not": {
            return [
                _("Error at %s:", path),
                _("This combination of properties is not allowed."),
                _("Value: %s", formatValue(value)),
            ].join("\n");
        }

        case "additionalProperties": {
            const prop = err.params?.additionalProperty ?? "<unknown>";

            return [
                _("Error at %s:", path),
                _("Unexpected property \"%s\".", prop),
            ].join("\n");
        }

        case "unevaluatedProperties": {
            const prop = err.params?.unevaluatedProperty ?? "<unknown>";

            return [
                _("Error at %s:", path),
                _("Unexpected property \"%s\".", prop),
            ].join("\n");
        }

        default: {
            return [
                _("Error at %s:", path),
                err.message
                    ? _("Validation error: %s", err.message)
                    : _("Validation error (%s).", err.keyword),
                _("Value: %s", formatValue(value)),
            ].join("\n");
        }
    }
}

/**
 * Converts AJV instancePath to a readable JS-like path.
 *
 * Examples:
 * ""                         -> root object
 * "/polyline/0/options/color" -> polyline[0].options.color
 *
 * @param {string} instancePath
 * @returns {string}
 */
function formatPath(instancePath) {
    if (!instancePath) {
        return _("root object");
    }

    const parts = instancePath
        .split("/")
        .slice(1)
        .map(unescapeJsonPointerPart);

    let result = "";

    for (const part of parts) {
        if (/^\d+$/.test(part)) {
            result += `[${part}]`;
        } else if (result === "") {
            result += part;
        } else if (/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(part)) {
            result += `.${part}`;
        } else {
            result += `[${JSON.stringify(part)}]`;
        }
    }

    return result || _("root object");
}

/**
 * Reads a value from data using a JSON pointer.
 *
 * @param {*} data
 * @param {string} pointer
 * @returns {*}
 */
function getValueAtJsonPointer(data, pointer) {
    if (!pointer) {
        return data;
    }

    return pointer
        .split("/")
        .slice(1)
        .reduce((current, part) => {
            if (current === undefined || current === null) {
                return undefined;
            }

            const key = unescapeJsonPointerPart(part);
            return current[key];
        }, data);
}

/**
 * Unescapes one JSON pointer path part.
 *
 * @param {string} part
 * @returns {string}
 */
function unescapeJsonPointerPart(part) {
    return String(part)
        .replace(/~1/g, "/")
        .replace(/~0/g, "~");
}

/**
 * Returns JSON-style type names.
 *
 * @param {*} value
 * @returns {string}
 */
function getJsonType(value) {
    if (value === undefined) {
        return _("undefined");
    }

    if (value === null) {
        return "null";
    }

    if (Array.isArray(value)) {
        return "array";
    }

    return typeof value;
}

/**
 * Formats expected type from AJV.
 *
 * @param {string|string[]} type
 * @returns {string}
 */
function formatExpectedType(type) {
    if (Array.isArray(type)) {
        return type.join(" / ");
    }

    return String(type);
}

/**
 * Formats a value for readable output.
 *
 * @param {*} value
 * @returns {string}
 */
function formatValue(value) {
    if (value === undefined) {
        return _("<not available>");
    }

    try {
        return JSON.stringify(value);
    } catch {
        return String(value);
    }
}

/**
 * Returns allowed properties for additionalProperties errors.
 *
 * @param {object} schema
 * @param {string} schemaPath
 * @param {string} instancePath
 * @returns {string[]}
 */
function getAllowedProperties(schema, schemaPath, instancePath) {
    let schemaNode = getSchemaNodeByInstancePath(schema, instancePath);

    if (!schemaNode?.properties && instancePath) {
        schemaNode = getSchemaNodeForKeyword(schema, schemaPath, "additionalProperties");
    }

    if (!schemaNode?.properties) {
        return [];
    }

    return Object.keys(schemaNode.properties);
}

/**
 * Returns a schema keyword value from schemaPath.
 *
 * Example:
 * schemaPath "#/$defs/icon/properties/iconUrl/minLength"
 * keyword "minLength"
 *
 * @param {object} schema
 * @param {string} schemaPath
 * @param {string} keyword
 * @returns {*}
 */
function getSchemaValue(schema, schemaPath, keyword) {
    const node = getSchemaNodeForKeyword(schema, schemaPath, keyword);
    return node?.[keyword];
}

/**
 * Resolves the schema node that owns a given keyword.
 *
 * @param {object} schema
 * @param {string} schemaPath
 * @param {string} keyword
 * @returns {*}
 */
function getSchemaNodeForKeyword(schema, schemaPath, keyword) {
    if (!schemaPath) {
        return undefined;
    }

    let pointer = schemaPath;

    if (pointer.startsWith("#")) {
        pointer = pointer.slice(1);
    }

    if (pointer.endsWith(`/${keyword}`)) {
        pointer = pointer.slice(0, -(`/${keyword}`).length);
    }

    return getValueAtJsonPointer(schema, pointer);
}
function getSchemaNodeByInstancePath(schema, instancePath) {
    const parts = instancePath
        .split("/")
        .slice(1)
        .map(unescapeJsonPointerPart);

    let node = schema;

    for (const part of parts) {
        node = resolveSchemaRef(schema, node);

        if (!node) {
            return undefined;
        }

        if (node.type === "object" && node.properties?.[part]) {
            node = node.properties[part];
            continue;
        }

        if (node.type === "array" && node.items) {
            node = node.items;
            continue;
        }

        if (/^\d+$/.test(part) && node.items) {
            node = node.items;
            continue;
        }

        return undefined;
    }

    return resolveSchemaRef(schema, node);
}

function resolveSchemaRef(rootSchema, node) {
    while (node?.$ref) {
        let pointer = node.$ref;

        if (!pointer.startsWith("#")) {
            return node;
        }

        pointer = pointer.slice(1);
        node = getValueAtJsonPointer(rootSchema, pointer);
    }

    return node;
}

export {
    formatAjvErrors,
};