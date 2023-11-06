import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      red: {
        50: '#FFE8E6',
        100: '#FFC8B8',
        200: '#FFA38B',
        300: '#FF7C5C',
        400: '#FF5937',
        500: '#FF2B0E',
        600: '#ff2308',
        700: '#FF1601',
        800: '#f10000',
        900: '#D10000' ,
      },
    }
  },
  plugins: [],
}
export default config
