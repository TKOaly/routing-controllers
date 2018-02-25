"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
/**
 * Redirects or renders
 */
function RedirectOrRender(template) {
    return function (object, methodName) {
        index_1.getMetadataArgsStorage().responseHandlers.push({
            type: "render-or-redirect",
            target: object.constructor,
            method: methodName,
            value: template
        });
    };
}
exports.RedirectOrRender = RedirectOrRender;

//# sourceMappingURL=RedirectOrRender.js.map
