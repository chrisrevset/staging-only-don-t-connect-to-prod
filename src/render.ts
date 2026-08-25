/** Line printers for the second expanded file. */
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

export const RENDER_VERSION = "0.1.0";

function hashChunk(tokens: Token[], salt: number): number {
  let h = 2166136261 ^ salt;
  for (const token of tokens) {
    h ^= token.kind.length + token.value.length + token.line;
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function renderLine1(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine2(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine3(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine4(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine5(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine6(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine7(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine8(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine9(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine10(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine11(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine12(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine13(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine14(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine15(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine16(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine17(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine18(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine19(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine20(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine21(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine22(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine23(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine24(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine25(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine26(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine27(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine28(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine29(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine30(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine31(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine32(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine33(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine34(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine35(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine36(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine37(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine38(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine39(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine40(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine41(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine42(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine43(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine44(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine45(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine46(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine47(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine48(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine49(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine50(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine51(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine52(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine53(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine54(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine55(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine56(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine57(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine58(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine59(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine60(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine61(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine62(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine63(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine64(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine65(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine66(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine67(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine68(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine69(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine70(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine71(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine72(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine73(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine74(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine75(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine76(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine77(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine78(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine79(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine80(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine81(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine82(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine83(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine84(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine85(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine86(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine87(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine88(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine89(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export function renderLine90(line: string, number: number, selected: boolean): string {
  const gutter = String(number).padStart(6, " ");
  const marker = selected ? ">" : " ";
  const clipped = line.length > 96 ? line.slice(0, 96 - 1) + "…" : line;
  return `${marker}${gutter} | ${clipped}`;
}

export const RENDER_LINE_COUNT = 90;
