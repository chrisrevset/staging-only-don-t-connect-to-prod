/** Token constructors. Concentrated hunks plus a long unchanged tail. */
export type TokenKind =
  | "ident"
  | "number"
  | "string"
  | "open"
  | "close"
  | "punct"
  | "overflow"
  | "comment";

export type Token = {
  kind: TokenKind;
  value: string;
  start: number;
  end: number;
  line: number;
  column: number;
};

export type Chunk = {
  id: string;
  path: string;
  tokens: Token[];
  hash: number;
};

export type Options = {
  maxDepth: number;
  keepComments: boolean;
  foldWhitespace: boolean;
  source: string;
};

export const TOKENS_VERSION = "0.1.0";

function hashChunk(tokens: Token[], salt: number): number {
  let h = 2166136261 ^ salt;
  for (const token of tokens) {
    h ^= token.kind.length + token.value.length + token.line;
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function readToken1(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "number";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken2(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "string";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken3(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "open";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken4(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "close";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken5(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "punct";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken6(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "overflow";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken7(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "comment";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken8(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "ident";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken9(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "number";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken10(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "string";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken11(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "open";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken12(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "close";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken13(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "punct";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken14(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "overflow";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken15(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "comment";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken16(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "ident";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken17(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "number";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken18(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "string";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken19(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "open";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken20(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "close";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken21(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "punct";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken22(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "overflow";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken23(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "comment";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken24(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "ident";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken25(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "number";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken26(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "string";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken27(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "open";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken28(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "close";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken29(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "punct";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken30(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "overflow";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken31(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "comment";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken32(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "ident";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken33(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "number";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken34(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "string";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken35(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "open";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken36(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "close";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken37(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "punct";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken38(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "overflow";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken39(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "comment";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken40(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "ident";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken41(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "number";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken42(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "string";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken43(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "open";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken44(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "close";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken45(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "punct";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken46(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "overflow";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken47(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "comment";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken48(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "ident";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken49(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "number";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken50(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "string";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken51(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "open";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken52(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "close";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken53(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "punct";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken54(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "overflow";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken55(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "comment";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken56(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "ident";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken57(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "number";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken58(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "string";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken59(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "open";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken60(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "close";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken61(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "punct";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken62(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "overflow";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken63(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "comment";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken64(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "ident";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken65(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "number";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken66(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "string";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken67(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "open";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken68(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "close";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken69(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "punct";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken70(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "overflow";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken71(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "comment";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken72(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "ident";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken73(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "number";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken74(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "string";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken75(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "open";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken76(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "close";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken77(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "punct";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken78(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "overflow";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken79(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "comment";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken80(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "ident";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken81(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "number";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken82(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "string";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken83(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "open";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken84(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "close";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken85(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "punct";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken86(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "overflow";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken87(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "comment";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken88(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "ident";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken89(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "number";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken90(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "string";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken91(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "open";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken92(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "close";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken93(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "punct";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken94(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "overflow";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken95(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "comment";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken96(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "ident";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken97(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "number";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken98(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "string";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken99(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "open";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken100(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "close";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken101(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "punct";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken102(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "overflow";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken103(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "comment";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken104(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "ident";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken105(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "number";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken106(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "string";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken107(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "open";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken108(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "close";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken109(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "punct";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken110(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "overflow";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken111(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "comment";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken112(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "ident";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken113(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "number";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken114(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "string";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken115(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "open";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken116(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "close";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken117(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "punct";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken118(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "overflow";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken119(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "comment";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export function readToken120(raw: string, start: number, line: number, column: number): Token {
  const end = start + raw.length;
  let kind: TokenKind = "ident";
  if (raw.startsWith("//") || raw.startsWith("#")) kind = "comment";
  else if (raw === "{" || raw === "(" || raw === "[") kind = "open";
  else if (raw === "}" || raw === ")" || raw === "]") kind = "close";
  return { kind, value: raw, start, end, line, column };
}

export const TOKEN_CTOR_COUNT = 120;
