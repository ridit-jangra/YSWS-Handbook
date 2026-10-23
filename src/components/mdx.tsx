import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { RecordingPlayer } from './recording-player';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    RecordingPlayer,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
