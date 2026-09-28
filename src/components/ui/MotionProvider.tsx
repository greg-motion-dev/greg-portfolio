'use client';

// MotionConfig uses React context, which only exists on the client, so this wrapper needs
// "use client". Server components can still be passed in as `children`.
import { MotionConfig } from 'motion/react';
import type { ReactNode } from 'react';

type MotionProviderProps = {
  children: ReactNode;
};

export function MotionProvider({ children }: MotionProviderProps) {
  // "user" follows the OS "reduce motion" setting: transform animations (like the card lift)
  // are skipped for people who have it turned on.
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
