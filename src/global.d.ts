// global.d.ts
export {}; // make it a module

declare global {
  interface IntlSegment {
    segment: string;
    index: number;
  }

  interface IntlSegmenterOptions {
    granularity?: 'grapheme' | 'word' | 'sentence';
  }

  interface IntlSegmenter {
    segment(input: string): Iterable<IntlSegment>;
    resolvedOptions(): { locale: string; granularity: string };
  }

  interface Intl {
    Segmenter: {
      prototype: IntlSegmenter;
      new (locales?: string | string[], options?: IntlSegmenterOptions): IntlSegmenter;
    };
  }
}
