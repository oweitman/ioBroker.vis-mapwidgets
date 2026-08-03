/* global vis */

vis.binds.mapwidgets.customLink = function (wid_attr, options) {
    let [, linktext, protocol, port, ...link] = options;
    return {
        input: `<a href="${protocol}://${port ? port : ''}/${link.join('/')}" target="_blank">${linktext}</a>`,
    };
};
