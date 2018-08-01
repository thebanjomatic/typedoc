"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts = require("typescript");
var tsany = ts;
function applyWithDiag(fnName, thisVal, args) {
    if (tsany[fnName] === undefined) {
        throw new Error(fnName + " was not found");
    }
    return tsany[fnName].apply(thisVal, args);
}
function createCompilerDiagnostic() {
    return applyWithDiag('createCompilerDiagnostic', this, arguments);
}
exports.createCompilerDiagnostic = createCompilerDiagnostic;
function compareValues(a, b) {
    return applyWithDiag('compareValues', this, arguments);
}
exports.compareValues = compareValues;
function normalizeSlashes(path) {
    return applyWithDiag('normalizeSlashes', this, arguments);
}
exports.normalizeSlashes = normalizeSlashes;
function getRootLength(path) {
    return applyWithDiag('getRootLength', this, arguments);
}
exports.getRootLength = getRootLength;
function getDirectoryPath() {
    return applyWithDiag('getDirectoryPath', this, arguments);
}
exports.getDirectoryPath = getDirectoryPath;
function normalizePath(path) {
    return tsany.normalizePath(path);
}
exports.normalizePath = normalizePath;
function combinePaths(path1, path2) {
    return tsany.combinePaths(path1, path2);
}
exports.combinePaths = combinePaths;
function getSourceFileOfNode(node) {
    return applyWithDiag('getSourceFileOfNode', this, arguments);
}
exports.getSourceFileOfNode = getSourceFileOfNode;
function getTextOfNode(node, includeTrivia) {
    if (includeTrivia === void 0) { includeTrivia = false; }
    return applyWithDiag('getTextOfNode', this, arguments);
}
exports.getTextOfNode = getTextOfNode;
function declarationNameToString(name) {
    return applyWithDiag('declarationNameToString', this, arguments);
}
exports.declarationNameToString = declarationNameToString;
function getJSDocCommentRanges(node, text) {
    return applyWithDiag('getJSDocCommentRanges', this, arguments);
}
exports.getJSDocCommentRanges = getJSDocCommentRanges;
function isBindingPattern(node) {
    return applyWithDiag('isBindingPattern', this, arguments);
}
exports.isBindingPattern = isBindingPattern;
function getClassExtendsHeritageElement(node) {
    return applyWithDiag('getClassExtendsHeritageElement', this, arguments);
}
exports.getClassExtendsHeritageElement = getClassExtendsHeritageElement;
function getClassImplementsHeritageClauseElements(node) {
    return applyWithDiag('getClassImplementsHeritageClauseElements', this, arguments);
}
exports.getClassImplementsHeritageClauseElements = getClassImplementsHeritageClauseElements;
function getInterfaceBaseTypeNodes(node) {
    return applyWithDiag('getInterfaceBaseTypeNodes', this, arguments);
}
exports.getInterfaceBaseTypeNodes = getInterfaceBaseTypeNodes;
exports.CharacterCodes = tsany.CharacterCodes;
exports.optionDeclarations = tsany.optionDeclarations;
exports.Diagnostics = tsany.Diagnostics;
//# sourceMappingURL=ts-internal.js.map