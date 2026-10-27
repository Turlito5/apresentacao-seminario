import roteiro from './roteiro-artur.md?raw';

export interface ScriptBlock {
  kind: 'heading' | 'paragraph' | 'transition' | 'guidance';
  title?: string;
  text: string;
}

export interface ArturSlideScript {
  slideId: number;
  title: string;
  blocks: ScriptBlock[];
}

// O Markdown é a fonte integral do roteiro. Cada ## Slide delimita a fala
// daquele slide; as colas e perguntas gerais ao final ficam fora do painel.
const cleanSpeech = (text: string) => text.replace(/^[“”]|[“”]$/g, '').trim();

function parseBlock(text: string): ScriptBlock {
  const label = text.match(/^\*\*([^*]+)\*\*\s*([\s\S]*)$/);
  if (label) {
    const title = label[1].replace(/:$/, '');
    const body = cleanSpeech(label[2]);
    if (!body) return { kind: 'heading', title, text: '' };
    const kind = /^(Transição|Passagem para Felipe)/i.test(title) ? 'transition' : 'guidance';
    return { kind, title, text: body };
  }
  if (text.startsWith('As marcações de seção abaixo')) {
    return { kind: 'guidance', title: 'Orientação para o ensaio', text };
  }
  return { kind: 'paragraph', text: cleanSpeech(text) };
}

export const arturScripts: readonly ArturSlideScript[] = roteiro
  .replace(/\r\n/g, '\n')
  .split(/^## /m)
  .flatMap(section => {
    const match = section.match(/^Slide (\d+) [—–-] ([^\n]+)\n([\s\S]*)$/);
    if (!match) return [];
    const slideId = Number(match[1]);
    if (slideId < 5 || slideId > 8) return [];
    return [{ slideId, title: match[2].trim(), blocks: match[3].trim().split(/\n\s*\n/).map(parseBlock) }];
  });

export function getArturScript(slideId: number) {
  return arturScripts.find(script => script.slideId === slideId);
}
