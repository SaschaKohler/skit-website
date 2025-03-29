/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
        heading: ['Italiana', 'serif'],
        subheading: ['Cormorant Garamond', 'serif'],
        body: ['Montserrat', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: 'var(--color-primary)',
          secondary: 'var(--color-secondary)',
          accent: 'var(--color-primary)',
        },
        background: {
          DEFAULT: 'var(--color-background)',
          offset: 'var(--color-background-offset)',
        },
        text: {
          DEFAULT: 'var(--color-text)',
          dark: 'var(--color-text-dark)',
          light: 'var(--color-text-light)',
          inverse: 'var(--color-text-inverse)',
        },
        ui: {
          dark: 'var(--color-ui-dark)',
          medium: 'var(--color-ui-medium)',
          light: 'var(--color-ui-light)',
        },
      },
      letterSpacing: {
        widest: '0.15em',
        superwide: '0.25em',
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            color: 'var(--color-text)',
            fontFamily: 'Montserrat, sans-serif',
            h1: {
              fontFamily: 'Italiana, serif',
              color: 'var(--color-text-dark)',
              letterSpacing: '0.03em',
              textTransform: 'uppercase',
            },
            h2: {
              fontFamily: 'Cormorant Garamond, serif',
              color: 'var(--color-text-dark)',
              fontWeight: '600',
            },
            h3: {
              fontFamily: 'Cormorant Garamond, serif',
              color: 'var(--color-text-dark)',
              fontWeight: '600',
            },
            h4: {
              fontFamily: 'Montserrat, sans-serif',
              color: 'var(--color-text-dark)',
              fontWeight: '600',
            },
            strong: {
              color: 'var(--color-text-dark)',
              fontWeight: '600',
            },
            a: {
              color: 'var(--color-primary)',
              '&:hover': {
                color: 'var(--color-primary-hover)',
              },
            },
            blockquote: {
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontWeight: '400',
              color: 'var(--color-text-dark)',
              borderLeftColor: 'var(--color-primary-light)',
              quotes: '"\\201C""\\201D""\\2018""\\2019"',
            },
          },
        },
        rose: {
          css: {
            '--tw-prose-body': 'var(--color-text)',
            '--tw-prose-headings': 'var(--color-text-dark)',
            '--tw-prose-lead': 'var(--color-primary)',
            '--tw-prose-links': 'var(--color-primary)',
            '--tw-prose-bold': 'var(--color-text-dark)',
            '--tw-prose-counters': 'var(--color-primary)',
            '--tw-prose-bullets': 'var(--color-primary-light)',
            '--tw-prose-hr': 'var(--color-border)',
            '--tw-prose-quotes': 'var(--color-primary)',
            '--tw-prose-quote-borders': 'var(--color-primary-light)',
            '--tw-prose-captions': 'var(--color-text-light)',
            '--tw-prose-code': 'var(--color-primary-hover)',
            '--tw-prose-pre-code': 'var(--color-primary-light)',
            '--tw-prose-pre-bg': 'var(--color-text-dark)',
            '--tw-prose-th-borders': 'var(--color-border)',
            '--tw-prose-td-borders': 'var(--color-border-light)',
          },
        },
      }),
      boxShadow: {
        'custom': '0 4px 6px var(--color-shadow)',
        'custom-lg': '0 10px 15px var(--color-shadow-strong)',
      },
    },
  },
  plugins: [],
}