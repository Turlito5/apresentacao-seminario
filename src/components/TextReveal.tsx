import { motion, type Variants } from 'framer-motion';

interface TextRevealProps {
  text: string;
  as?: 'h1' | 'h2' | 'p';
  className?: string;
  reducedMotion?: boolean;
  delay?: number;
}

/** Revelação por palavras: spans visuais e uma única leitura acessível. */
export default function TextReveal({
  text, as: Tag = 'h2', className = '', reducedMotion = false, delay = 0.08,
}: TextRevealProps) {
  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: reducedMotion ? 0 : 0.037, delayChildren: reducedMotion ? 0 : delay } },
  };
  const word: Variants = {
    hidden: { opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 17, rotateX: reducedMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: reducedMotion ? 0 : 0.48, ease: [0.22, 1, 0.36, 1] } },
  };
  return (
    <Tag className={className}>
      <span className="sr-only">{text.replaceAll('\n', ' ')}</span>
      <motion.span aria-hidden="true" initial="hidden" animate="visible" variants={container}>
        {text.split('\n').map((line, lineIndex) => (
          <span className="block" key={lineIndex}>
            {line.split(' ').map((token, index) => (
              <span key={`${lineIndex}-${index}`}>
                <motion.span className="inline-block" variants={word}>{token}</motion.span>
                {index < line.split(' ').length - 1 ? ' ' : ''}
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
