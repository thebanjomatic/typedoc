import * as ts from 'typescript';
const tsany = ts as any;

/**
 * Expose the internal TypeScript APIs that are used by TypeDoc
 */
declare module 'typescript' {
  interface Symbol {
    // https://github.com/Microsoft/TypeScript/blob/v2.1.4/src/compiler/types.ts#L2658
    id?: number;
    // https://github.com/Microsoft/TypeScript/blob/v2.1.4/src/compiler/types.ts#L2660
    parent?: ts.Symbol;
  }

  interface Node {
    // https://github.com/Microsoft/TypeScript/blob/v2.1.4/src/compiler/types.ts#L497
    symbol?: ts.Symbol;
    // https://github.com/Microsoft/TypeScript/blob/v2.1.4/src/compiler/types.ts#L500
    localSymbol?: ts.Symbol;
    // https://github.com/Microsoft/TypeScript/blob/v2.1.4/src/compiler/types.ts#L499
    nextContainer?: ts.Node;
  }
}

function applyWithDiag(fnName: string, thisVal: any, args: IArguments) {
   if (tsany[fnName] === undefined) {
     throw new Error(`${fnName} was not found`);
   }
   return tsany[fnName].apply(thisVal, args);
}

/**
 * These functions are in "core" and are marked as @internal:
 * https://github.com/Microsoft/TypeScript/blob/v2.1.4/src/compiler/core.ts#L9-L10
 */

// https://github.com/Microsoft/TypeScript/blob/v2.1.4/src/compiler/core.ts#L1133-LL1134
export function createCompilerDiagnostic(message: ts.DiagnosticMessage, ...args: (string | number)[]): ts.Diagnostic;
export function createCompilerDiagnostic(message: ts.DiagnosticMessage): ts.Diagnostic;
export function createCompilerDiagnostic() {
  return applyWithDiag('createCompilerDiagnostic', this, arguments);
}

// https://github.com/Microsoft/TypeScript/blob/v2.1.4/src/compiler/core.ts#L1191
export function compareValues<T>(a: T, b: T): number {
   return applyWithDiag('compareValues', this, arguments); // Actually returns a ts.Comparison which is also internal
}

// https://github.com/Microsoft/TypeScript/blob/v2.1.4/src/compiler/core.ts#L1281
export function normalizeSlashes(path: string): string {
  return applyWithDiag('normalizeSlashes', this, arguments);
}

// https://github.com/Microsoft/TypeScript/blob/v2.1.4/src/compiler/core.ts#L1288
export function getRootLength(path: string): number {
  return applyWithDiag('getRootLength', this, arguments);
}

// https://github.com/Microsoft/TypeScript/blob/v2.1.4/src/compiler/core.ts#L1368-L1370
export function getDirectoryPath(path: ts.Path): ts.Path;
export function getDirectoryPath(path: string): string;
export function getDirectoryPath() {
  return applyWithDiag('getDirectoryPath', this, arguments);
}

// https://github.com/Microsoft/TypeScript/blob/v2.2.1/src/compiler/core.ts#L1418
export function normalizePath(path: string): string {
  return tsany.normalizePath(path);
}

// https://github.com/Microsoft/TypeScript/blob/v2.2.1/src/compiler/core.ts#L1628
export function combinePaths(path1: string, path2: string): string {
  return tsany.combinePaths(path1, path2);
}

/**
 * These functions are in "utilities" and are marked as @internal:
 * https://github.com/Microsoft/TypeScript/blob/v2.1.4/src/compiler/utilities.ts#L3-L4
 */

// https://github.com/Microsoft/TypeScript/blob/v2.1.4/src/compiler/utilities.ts#L152
export function getSourceFileOfNode(node: ts.Node): ts.SourceFile {
  return applyWithDiag('getSourceFileOfNode', this, arguments);
}

// https://github.com/Microsoft/TypeScript/blob/v2.1.4/src/compiler/utilities.ts#L301
export function getTextOfNode(node: ts.Node, includeTrivia = false): string {
  return applyWithDiag('getTextOfNode', this, arguments);
}

// https://github.com/Microsoft/TypeScript/blob/v2.1.4/src/compiler/utilities.ts#L473
export function declarationNameToString(name: ts.DeclarationName): string {
  return applyWithDiag('declarationNameToString', this, arguments);
}

// https://github.com/Microsoft/TypeScript/blob/v2.1.4/src/compiler/utilities.ts#L1423
export function getJSDocCommentRanges(node: ts.Node, text: string) {
  return applyWithDiag('getJSDocCommentRanges', this, arguments);
}

// https://github.com/Microsoft/TypeScript/blob/v2.1.4/src/compiler/utilities.ts#L3738
export function isBindingPattern(node: ts.Node): node is ts.BindingPattern {
  return applyWithDiag('isBindingPattern', this, arguments);
}

// https://github.com/Microsoft/TypeScript/blob/v2.1.4/src/compiler/utilities.ts#L1729
export function getClassExtendsHeritageElement(node: ts.ClassLikeDeclaration | ts.InterfaceDeclaration) {
  return applyWithDiag('getClassExtendsHeritageElement', this, arguments);
}

// https://github.com/Microsoft/TypeScript/blob/v2.1.4/src/compiler/utilities.ts#L1734
export function getClassImplementsHeritageClauseElements(node: ts.ClassLikeDeclaration) {
  return applyWithDiag('getClassImplementsHeritageClauseElements', this, arguments);
}

// https://github.com/Microsoft/TypeScript/blob/v2.1.4/src/compiler/utilities.ts#L1739
export function getInterfaceBaseTypeNodes(node: ts.InterfaceDeclaration) {
  return applyWithDiag('getInterfaceBaseTypeNodes', this, arguments);
}

/**
 * https://github.com/Microsoft/TypeScript/blob/v2.1.4/src/compiler/types.ts#L3347
 * This is large enum of char codes.
 *
 * Faking the enum as a var (only certain codes are used by TypeDoc)
 */
export const CharacterCodes: {
  [key: string]: number;
  doubleQuote: number;
  space: number;
  minus: number;
  at: number;
} = tsany.CharacterCodes;

export const optionDeclarations: CommandLineOption[] = tsany.optionDeclarations;

/**
 * Command line options
 *
 * https://github.com/Microsoft/TypeScript/blob/v2.1.4/src/compiler/types.ts#L3344
 */
export interface CommandLineOption {
  name: string;
  type: string;
  shortName: string;
  description: DiagnosticsEnumValue;
  paramType: DiagnosticsEnumValue;
}

export const Diagnostics: {
  [key: string]: DiagnosticsEnumValue;
  FILE: DiagnosticsEnumValue;
  DIRECTORY: DiagnosticsEnumValue;
} = tsany.Diagnostics;

export interface DiagnosticsEnumValue {
  code: number;
  category: ts.DiagnosticCategory;
  key: string;
  message: string;
}
