"use strict";
exports.__esModule = true;
exports.func4 = exports.func3 = exports.func2_1 = exports.func1_1 = exports.func1 = void 0;
var funcs_js_1 = require("/Users/alexandermykulych/Dev/coya/libraries/code-analyzers/ts-analyzer/test/analysis/cases/03_function_relation/funcs.js");
function func1(a, b) {
    return (0, funcs_js_1.func2)(a, b);
}
exports.func1 = func1;
exports.func1_1 = func1;
exports.func2_1 = funcs_js_1.func2;
var func3 = function () {
    return (0, funcs_js_1.func2)(1, 2);
};
exports.func3 = func3;
var func4 = function () {
    return function () {
        return 10 + (0, funcs_js_1.func2)(1, 2) + (0, funcs_js_1.func3)();
    };
};
exports.func4 = func4;
