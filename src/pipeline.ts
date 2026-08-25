/** Chunk transforms used to stress a tall split FileDiff. */
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

export const PIPELINE_VERSION = "0.1.0";

function hashChunk(tokens: Token[], salt: number): number {
  let h = 2166136261 ^ salt;
  for (const token of tokens) {
    h ^= token.kind.length + token.value.length + token.line;
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function transformChunk1(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 1) };
}

export function transformChunk2(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 2) };
}

export function transformChunk3(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 3) };
}

export function transformChunk4(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 4) };
}

export function transformChunk5(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 5) };
}

export function transformChunk6(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 6) };
}

export function transformChunk7(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }

  if (options.foldWhitespace) {
    for (let t = 0; t < tokens.length; t++) {
      if (tokens[t].kind === "punct" && tokens[t].value === " ") {
        tokens[t] = { ...tokens[t], value: "" };
      }
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 7) };
}

export function transformChunk8(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 8) };
}

export function transformChunk9(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 9) };
}

export function transformChunk10(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 10) };
}

export function transformChunk11(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 11) };
}

export function transformChunk12(input: Chunk, options: Options, trace?: boolean): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "depth-overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }

  if (trace) {
    options.source += `:trace:${input.id}:${tokens.length}`;
  }
  return { ...input, tokens, hash: hashChunk(tokens, 12), traced: Boolean(trace) };
}

export function transformChunk13(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 13) };
}

export function transformChunk14(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }

  if (options.foldWhitespace) {
    for (let t = 0; t < tokens.length; t++) {
      if (tokens[t].kind === "punct" && tokens[t].value === " ") {
        tokens[t] = { ...tokens[t], value: "" };
      }
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 14) };
}

export function transformChunk15(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 15) };
}

export function summarizeChunk15(chunk: Chunk): string {
  const kinds = chunk.tokens.reduce<Record<string, number>>((acc, token) => {
    acc[token.kind] = (acc[token.kind] ?? 0) + 1;
    return acc;
  }, {});
  return `${chunk.path}#${chunk.id} tokens=${chunk.tokens.length} kinds=${JSON.stringify(kinds)} hash=${chunk.hash}`;
}

export function transformChunk16(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 16) };
}

export function transformChunk17(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 17) };
}

export function transformChunk18(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 18) };
}

export function transformChunk19(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 19) };
}

export function transformChunk20(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 20) };
}

export function transformChunk21(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }

  if (options.foldWhitespace) {
    for (let t = 0; t < tokens.length; t++) {
      if (tokens[t].kind === "punct" && tokens[t].value === " ") {
        tokens[t] = { ...tokens[t], value: "" };
      }
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 21) };
}

export function transformChunk22(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 22) };
}

export function transformChunk23(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 23) };
}

export function transformChunk24(input: Chunk, options: Options, trace?: boolean): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "depth-overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }

  if (trace) {
    options.source += `:trace:${input.id}:${tokens.length}`;
  }
  return { ...input, tokens, hash: hashChunk(tokens, 24), traced: Boolean(trace) };
}

export function transformChunk25(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 25) };
}

export function transformChunk26(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 26) };
}

export function transformChunk27(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 27) };
}

export function transformChunk28(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }

  if (options.foldWhitespace) {
    for (let t = 0; t < tokens.length; t++) {
      if (tokens[t].kind === "punct" && tokens[t].value === " ") {
        tokens[t] = { ...tokens[t], value: "" };
      }
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 28) };
}

export function transformChunk29(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 29) };
}

export function transformChunk30(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 30) };
}

export function summarizeChunk30(chunk: Chunk): string {
  const kinds = chunk.tokens.reduce<Record<string, number>>((acc, token) => {
    acc[token.kind] = (acc[token.kind] ?? 0) + 1;
    return acc;
  }, {});
  return `${chunk.path}#${chunk.id} tokens=${chunk.tokens.length} kinds=${JSON.stringify(kinds)} hash=${chunk.hash}`;
}

export function transformChunk31(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 31) };
}

export function transformChunk32(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 32) };
}

export function transformChunk33(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 33) };
}

export function transformChunk34(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 34) };
}

export function transformChunk35(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }

  if (options.foldWhitespace) {
    for (let t = 0; t < tokens.length; t++) {
      if (tokens[t].kind === "punct" && tokens[t].value === " ") {
        tokens[t] = { ...tokens[t], value: "" };
      }
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 35) };
}

export function transformChunk36(input: Chunk, options: Options, trace?: boolean): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "depth-overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }

  if (trace) {
    options.source += `:trace:${input.id}:${tokens.length}`;
  }
  return { ...input, tokens, hash: hashChunk(tokens, 36), traced: Boolean(trace) };
}

export function transformChunk37(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 37) };
}

export function transformChunk38(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 38) };
}

export function transformChunk39(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 39) };
}

export function transformChunk40(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 40) };
}

export function transformChunk42(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }

  if (options.foldWhitespace) {
    for (let t = 0; t < tokens.length; t++) {
      if (tokens[t].kind === "punct" && tokens[t].value === " ") {
        tokens[t] = { ...tokens[t], value: "" };
      }
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 42) };
}

export function transformChunk43(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 43) };
}

export function transformChunk44(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 44) };
}

export function transformChunk45(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 45) };
}

export function summarizeChunk45(chunk: Chunk): string {
  const kinds = chunk.tokens.reduce<Record<string, number>>((acc, token) => {
    acc[token.kind] = (acc[token.kind] ?? 0) + 1;
    return acc;
  }, {});
  return `${chunk.path}#${chunk.id} tokens=${chunk.tokens.length} kinds=${JSON.stringify(kinds)} hash=${chunk.hash}`;
}

export function transformChunk46(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 46) };
}

export function transformChunk47(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 47) };
}

export function transformChunk48(input: Chunk, options: Options, trace?: boolean): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "depth-overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }

  if (trace) {
    options.source += `:trace:${input.id}:${tokens.length}`;
  }
  return { ...input, tokens, hash: hashChunk(tokens, 48), traced: Boolean(trace) };
}

export function transformChunk49(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }

  if (options.foldWhitespace) {
    for (let t = 0; t < tokens.length; t++) {
      if (tokens[t].kind === "punct" && tokens[t].value === " ") {
        tokens[t] = { ...tokens[t], value: "" };
      }
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 49) };
}

export function transformChunk50(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 50) };
}

export function transformChunk51(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 51) };
}

export function transformChunk52(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 52) };
}

export function transformChunk53(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 53) };
}

export function transformChunk54(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 54) };
}

export function transformChunk55(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 55) };
}

export function transformChunk56(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }

  if (options.foldWhitespace) {
    for (let t = 0; t < tokens.length; t++) {
      if (tokens[t].kind === "punct" && tokens[t].value === " ") {
        tokens[t] = { ...tokens[t], value: "" };
      }
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 56) };
}

export function transformChunk57(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 57) };
}

export function transformChunk58(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 58) };
}

export function transformChunk59(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 59) };
}

export function transformChunk60(input: Chunk, options: Options, trace?: boolean): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "depth-overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }

  if (trace) {
    options.source += `:trace:${input.id}:${tokens.length}`;
  }
  return { ...input, tokens, hash: hashChunk(tokens, 60), traced: Boolean(trace) };
}

export function summarizeChunk60(chunk: Chunk): string {
  const kinds = chunk.tokens.reduce<Record<string, number>>((acc, token) => {
    acc[token.kind] = (acc[token.kind] ?? 0) + 1;
    return acc;
  }, {});
  return `${chunk.path}#${chunk.id} tokens=${chunk.tokens.length} kinds=${JSON.stringify(kinds)} hash=${chunk.hash}`;
}

export function transformChunk61(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 61) };
}

export function transformChunk62(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 62) };
}

export function transformChunk63(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }

  if (options.foldWhitespace) {
    for (let t = 0; t < tokens.length; t++) {
      if (tokens[t].kind === "punct" && tokens[t].value === " ") {
        tokens[t] = { ...tokens[t], value: "" };
      }
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 63) };
}

export function transformChunk64(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 64) };
}

export function transformChunk65(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 65) };
}

export function transformChunk66(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 66) };
}

export function transformChunk67(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 67) };
}

export function transformChunk68(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 68) };
}

export function transformChunk69(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 69) };
}

export function transformChunk70(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }

  if (options.foldWhitespace) {
    for (let t = 0; t < tokens.length; t++) {
      if (tokens[t].kind === "punct" && tokens[t].value === " ") {
        tokens[t] = { ...tokens[t], value: "" };
      }
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 70) };
}

export function transformChunk71(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 71) };
}

export function transformChunk72(input: Chunk, options: Options, trace?: boolean): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "depth-overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }

  if (trace) {
    options.source += `:trace:${input.id}:${tokens.length}`;
  }
  return { ...input, tokens, hash: hashChunk(tokens, 72), traced: Boolean(trace) };
}

export function transformChunk73(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 73) };
}

export function transformChunk74(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 74) };
}

export function transformChunk75(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 75) };
}

export function summarizeChunk75(chunk: Chunk): string {
  const kinds = chunk.tokens.reduce<Record<string, number>>((acc, token) => {
    acc[token.kind] = (acc[token.kind] ?? 0) + 1;
    return acc;
  }, {});
  return `${chunk.path}#${chunk.id} tokens=${chunk.tokens.length} kinds=${JSON.stringify(kinds)} hash=${chunk.hash}`;
}

export function transformChunk76(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 76) };
}

export function transformChunk77(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }

  if (options.foldWhitespace) {
    for (let t = 0; t < tokens.length; t++) {
      if (tokens[t].kind === "punct" && tokens[t].value === " ") {
        tokens[t] = { ...tokens[t], value: "" };
      }
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 77) };
}

export function transformChunk78(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 78) };
}

export function transformChunk79(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 79) };
}

export function transformChunk80(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 80) };
}

export function transformChunk81(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 81) };
}

export function transformChunk83(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 83) };
}

export function transformChunk84(input: Chunk, options: Options, trace?: boolean): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "depth-overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }

  if (trace) {
    options.source += `:trace:${input.id}:${tokens.length}`;
  }

  if (options.foldWhitespace) {
    for (let t = 0; t < tokens.length; t++) {
      if (tokens[t].kind === "punct" && tokens[t].value === " ") {
        tokens[t] = { ...tokens[t], value: "" };
      }
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 84), traced: Boolean(trace) };
}

export function transformChunk85(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 85) };
}

export function transformChunk86(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 86) };
}

export function transformChunk87(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 87) };
}

export function transformChunk88(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 88) };
}

export function transformChunk89(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 89) };
}

export function transformChunk90(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 90) };
}

export function summarizeChunk90(chunk: Chunk): string {
  const kinds = chunk.tokens.reduce<Record<string, number>>((acc, token) => {
    acc[token.kind] = (acc[token.kind] ?? 0) + 1;
    return acc;
  }, {});
  return `${chunk.path}#${chunk.id} tokens=${chunk.tokens.length} kinds=${JSON.stringify(kinds)} hash=${chunk.hash}`;
}

export function transformChunk91(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }

  if (options.foldWhitespace) {
    for (let t = 0; t < tokens.length; t++) {
      if (tokens[t].kind === "punct" && tokens[t].value === " ") {
        tokens[t] = { ...tokens[t], value: "" };
      }
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 91) };
}

export function transformChunk92(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 92) };
}

export function transformChunk93(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 93) };
}

export function transformChunk94(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 94) };
}

export function transformChunk95(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 95) };
}

export function transformChunk96(input: Chunk, options: Options, trace?: boolean): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "depth-overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }

  if (trace) {
    options.source += `:trace:${input.id}:${tokens.length}`;
  }
  return { ...input, tokens, hash: hashChunk(tokens, 96), traced: Boolean(trace) };
}

export function transformChunk97(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 97) };
}

export function transformChunk98(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }

  if (options.foldWhitespace) {
    for (let t = 0; t < tokens.length; t++) {
      if (tokens[t].kind === "punct" && tokens[t].value === " ") {
        tokens[t] = { ...tokens[t], value: "" };
      }
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 98) };
}

export function transformChunk99(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 99) };
}

export function transformChunk100(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 100) };
}

export function transformChunk101(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 101) };
}

export function transformChunk102(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 102) };
}

export function transformChunk103(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 103) };
}

export function transformChunk104(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 104) };
}

export function transformChunk105(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }

  if (options.foldWhitespace) {
    for (let t = 0; t < tokens.length; t++) {
      if (tokens[t].kind === "punct" && tokens[t].value === " ") {
        tokens[t] = { ...tokens[t], value: "" };
      }
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 105) };
}

export function summarizeChunk105(chunk: Chunk): string {
  const kinds = chunk.tokens.reduce<Record<string, number>>((acc, token) => {
    acc[token.kind] = (acc[token.kind] ?? 0) + 1;
    return acc;
  }, {});
  return `${chunk.path}#${chunk.id} tokens=${chunk.tokens.length} kinds=${JSON.stringify(kinds)} hash=${chunk.hash}`;
}

export function transformChunk106(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 106) };
}

export function transformChunk107(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 107) };
}

export function transformChunk108(input: Chunk, options: Options, trace?: boolean): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "depth-overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }

  if (trace) {
    options.source += `:trace:${input.id}:${tokens.length}`;
  }
  return { ...input, tokens, hash: hashChunk(tokens, 108), traced: Boolean(trace) };
}

export function transformChunk109(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 109) };
}

export function transformChunk110(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 110) };
}

export function transformChunk111(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 111) };
}

export function transformChunk112(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }

  if (options.foldWhitespace) {
    for (let t = 0; t < tokens.length; t++) {
      if (tokens[t].kind === "punct" && tokens[t].value === " ") {
        tokens[t] = { ...tokens[t], value: "" };
      }
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 112) };
}

export function transformChunk113(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 113) };
}

export function transformChunk114(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 114) };
}

export function transformChunk115(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 115) };
}

export function transformChunk116(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 116) };
}

export function transformChunk117(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 117) };
}

export function transformChunk118(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 118) };
}

export function transformChunk119(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }

  if (options.foldWhitespace) {
    for (let t = 0; t < tokens.length; t++) {
      if (tokens[t].kind === "punct" && tokens[t].value === " ") {
        tokens[t] = { ...tokens[t], value: "" };
      }
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 119) };
}

export function transformChunk120(input: Chunk, options: Options, trace?: boolean): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "depth-overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }

  if (trace) {
    options.source += `:trace:${input.id}:${tokens.length}`;
  }
  return { ...input, tokens, hash: hashChunk(tokens, 120), traced: Boolean(trace) };
}

export function summarizeChunk120(chunk: Chunk): string {
  const kinds = chunk.tokens.reduce<Record<string, number>>((acc, token) => {
    acc[token.kind] = (acc[token.kind] ?? 0) + 1;
    return acc;
  }, {});
  return `${chunk.path}#${chunk.id} tokens=${chunk.tokens.length} kinds=${JSON.stringify(kinds)} hash=${chunk.hash}`;
}

export function transformChunk121(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 121) };
}

export function transformChunk122(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 122) };
}

export function transformChunk124(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 124) };
}

export function transformChunk125(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 125) };
}

export function transformChunk126(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }

  if (options.foldWhitespace) {
    for (let t = 0; t < tokens.length; t++) {
      if (tokens[t].kind === "punct" && tokens[t].value === " ") {
        tokens[t] = { ...tokens[t], value: "" };
      }
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 126) };
}

export function transformChunk127(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 127) };
}

export function transformChunk128(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 128) };
}

export function transformChunk129(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 129) };
}

export function transformChunk130(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 130) };
}

export function transformChunk131(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 131) };
}

export function transformChunk132(input: Chunk, options: Options, trace?: boolean): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "depth-overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }

  if (trace) {
    options.source += `:trace:${input.id}:${tokens.length}`;
  }
  return { ...input, tokens, hash: hashChunk(tokens, 132), traced: Boolean(trace) };
}

export function transformChunk133(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }

  if (options.foldWhitespace) {
    for (let t = 0; t < tokens.length; t++) {
      if (tokens[t].kind === "punct" && tokens[t].value === " ") {
        tokens[t] = { ...tokens[t], value: "" };
      }
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 133) };
}

export function transformChunk134(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 134) };
}

export function transformChunk135(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 135) };
}

export function summarizeChunk135(chunk: Chunk): string {
  const kinds = chunk.tokens.reduce<Record<string, number>>((acc, token) => {
    acc[token.kind] = (acc[token.kind] ?? 0) + 1;
    return acc;
  }, {});
  return `${chunk.path}#${chunk.id} tokens=${chunk.tokens.length} kinds=${JSON.stringify(kinds)} hash=${chunk.hash}`;
}

export function transformChunk136(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 136) };
}

export function transformChunk137(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 137) };
}

export function transformChunk138(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 138) };
}

export function transformChunk139(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 139) };
}

export function transformChunk140(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }

  if (options.foldWhitespace) {
    for (let t = 0; t < tokens.length; t++) {
      if (tokens[t].kind === "punct" && tokens[t].value === " ") {
        tokens[t] = { ...tokens[t], value: "" };
      }
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 140) };
}

export function transformChunk141(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 141) };
}

export function transformChunk142(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 142) };
}

export function transformChunk143(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 143) };
}

export function transformChunk144(input: Chunk, options: Options, trace?: boolean): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "depth-overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }

  if (trace) {
    options.source += `:trace:${input.id}:${tokens.length}`;
  }
  return { ...input, tokens, hash: hashChunk(tokens, 144), traced: Boolean(trace) };
}

export function transformChunk145(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 145) };
}

export function transformChunk146(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 146) };
}

export function transformChunk147(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }

  if (options.foldWhitespace) {
    for (let t = 0; t < tokens.length; t++) {
      if (tokens[t].kind === "punct" && tokens[t].value === " ") {
        tokens[t] = { ...tokens[t], value: "" };
      }
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 147) };
}

export function transformChunk148(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 148) };
}

export function transformChunk149(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 149) };
}

export function transformChunk150(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 150) };
}

export function summarizeChunk150(chunk: Chunk): string {
  const kinds = chunk.tokens.reduce<Record<string, number>>((acc, token) => {
    acc[token.kind] = (acc[token.kind] ?? 0) + 1;
    return acc;
  }, {});
  return `${chunk.path}#${chunk.id} tokens=${chunk.tokens.length} kinds=${JSON.stringify(kinds)} hash=${chunk.hash}`;
}

export function transformChunk151(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 151) };
}

export function transformChunk152(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 152) };
}

export function transformChunk153(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 153) };
}

export function transformChunk154(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }

  if (options.foldWhitespace) {
    for (let t = 0; t < tokens.length; t++) {
      if (tokens[t].kind === "punct" && tokens[t].value === " ") {
        tokens[t] = { ...tokens[t], value: "" };
      }
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 154) };
}

export function transformChunk155(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 155) };
}

export function transformChunk156(input: Chunk, options: Options, trace?: boolean): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "depth-overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }

  if (trace) {
    options.source += `:trace:${input.id}:${tokens.length}`;
  }
  return { ...input, tokens, hash: hashChunk(tokens, 156), traced: Boolean(trace) };
}

export function transformChunk157(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 157) };
}

export function transformChunk158(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 158) };
}

export function transformChunk159(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 159) };
}

export function transformChunk160(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 160) };
}

export function transformChunk161(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }

  if (options.foldWhitespace) {
    for (let t = 0; t < tokens.length; t++) {
      if (tokens[t].kind === "punct" && tokens[t].value === " ") {
        tokens[t] = { ...tokens[t], value: "" };
      }
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 161) };
}

export function transformChunk162(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 162) };
}

export function transformChunk163(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 163) };
}

export function transformChunk165(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 165) };
}

export function summarizeChunk165(chunk: Chunk): string {
  const kinds = chunk.tokens.reduce<Record<string, number>>((acc, token) => {
    acc[token.kind] = (acc[token.kind] ?? 0) + 1;
    return acc;
  }, {});
  return `${chunk.path}#${chunk.id} tokens=${chunk.tokens.length} kinds=${JSON.stringify(kinds)} hash=${chunk.hash}`;
}

export function transformChunk166(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 166) };
}

export function transformChunk167(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 167) };
}

export function transformChunk168(input: Chunk, options: Options, trace?: boolean): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "depth-overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }

  if (trace) {
    options.source += `:trace:${input.id}:${tokens.length}`;
  }

  if (options.foldWhitespace) {
    for (let t = 0; t < tokens.length; t++) {
      if (tokens[t].kind === "punct" && tokens[t].value === " ") {
        tokens[t] = { ...tokens[t], value: "" };
      }
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 168), traced: Boolean(trace) };
}

export function transformChunk169(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 169) };
}

export function transformChunk170(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 170) };
}

export function transformChunk171(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 171) };
}

export function transformChunk172(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 172) };
}

export function transformChunk173(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 173) };
}

export function transformChunk174(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 174) };
}

export function transformChunk175(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }

  if (options.foldWhitespace) {
    for (let t = 0; t < tokens.length; t++) {
      if (tokens[t].kind === "punct" && tokens[t].value === " ") {
        tokens[t] = { ...tokens[t], value: "" };
      }
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 175) };
}

export function transformChunk176(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 176) };
}

export function transformChunk177(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 177) };
}

export function transformChunk178(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 178) };
}

export function transformChunk179(input: Chunk, options: Options): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }
  return { ...input, tokens, hash: hashChunk(tokens, 179) };
}

export function transformChunk180(input: Chunk, options: Options, trace?: boolean): Chunk {
  const startDepth = 0;
  const tokens = input.tokens.slice();
  let depth = startDepth;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind === "open") depth += 1;
    else if (token.kind === "close") depth -= 1;
    if (depth > options.maxDepth) {
      tokens[i] = { ...token, kind: "depth-overflow", value: token.value };
    }
    if (!options.keepComments && token.kind === "comment") {
      tokens[i] = { ...token, value: "" };
    }
  }

  if (trace) {
    options.source += `:trace:${input.id}:${tokens.length}`;
  }
  return { ...input, tokens, hash: hashChunk(tokens, 180), traced: Boolean(trace) };
}

export function summarizeChunk180(chunk: Chunk): string {
  const kinds = chunk.tokens.reduce<Record<string, number>>((acc, token) => {
    acc[token.kind] = (acc[token.kind] ?? 0) + 1;
    return acc;
  }, {});
  return `${chunk.path}#${chunk.id} tokens=${chunk.tokens.length} kinds=${JSON.stringify(kinds)} hash=${chunk.hash}`;
}

export const PIPELINE_CHUNK_COUNT = 176;
