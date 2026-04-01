/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#ebedef',
          100: '#d8dbdf',
          200: '#b3b9c1',
          300: '#8c95a1',
          400: '#697381',
          500: '#4a515b',
          600: '#3b4149',
          700: '#2b3035',
          800: '#1e2125',
          900: '#0e0f11',
        },
        border: '#d8dbdfb3',
      },
      borderColor: {
        DEFAULT: '#d8dbdfb3',
      },
      fontFamily: {
        sans: [
          'Pretendard Variable', 'Pretendard',
          '-apple-system', 'BlinkMacSystemFont', 'system-ui',
          'Noto Sans KR', 'sans-serif',
        ],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#4a515b',
            a: {
              color: '#3b4149',
              textDecoration: 'underline',
              textDecorationColor: '#b3b9c1',
              textUnderlineOffset: '3px',
              transition: 'text-decoration-color 0.2s ease',
              '&:hover': {
                textDecorationColor: '#3b4149',
              },
            },
            h1: { color: '#3b4149' },
            h2: { color: '#3b4149' },
            h3: { color: '#3b4149' },
            strong: { color: '#3b4149' },
            blockquote: {
              color: '#697381',
              borderLeftWidth: '0',
              boxShadow: '1px 0 0 #4a515b inset',
              paddingLeft: '1em',
            },
            code: {
              color: '#3b4149',
              backgroundColor: '#ebedef',
              borderRadius: '0.25rem',
              padding: '0.15em 0.3em',
              fontWeight: '400',
            },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
            img: {
              borderRadius: '0.5rem',
              border: '1px solid #d8dbdfb3',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
