declare module 'scratchblocks' {
  interface Scratchblocks {
    loadLanguages(languages: Record<string, unknown>): void;
    parse(code: string, options: { languages: string[] }): unknown;
    render(document: unknown, options: { style: 'scratch3'; scale: number }): SVGSVGElement;
  }
  const scratchblocks: Scratchblocks;
  export default scratchblocks;
}
