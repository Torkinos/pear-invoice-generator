interface Pear {
  updates: (_callback: () => void) => void
  reload: () => void
}

declare const Pear: Pear
