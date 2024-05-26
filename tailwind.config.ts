import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {},
    },
    colors: {
      white: {
        base: '#FFFFFF'
      },
      black:  {
        100: '#333333',
      },
      blue: {
        100: '#0335b1',
      },
      yellow: {
        100: '#f9ffce',
      },
      red: {
        100: '#fbb8ae'
      },
      green: {
        100: '#9efca2'
      },
      error: {
        base: '#ff0000'
      },
      gray: {
        100: '#f5f5f5'
      }
    },
  },
  plugins: [],
}
export default config
