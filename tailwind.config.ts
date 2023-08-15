import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import Colors from 'tailwindcss/colors'

const MyTheme = {
  colors: {
    green: {
      DEFAULT: '#16A75C',
      '50': '#E6F6EC',
      '100': '#C3E9D0',
      '200': '#87D4B2',
      '300': '#69CA9E',
      '400': '#4BBF8B',
      '500': '#1FB767',
      '600': '#16A75C',
      '700': '#069550',
      '800': '#008444',
      '900': '#000000',
    },
    blue: {
      DEFAULT: '#1E88E5',
      '50': '#E3F2FD',
      '100': '#BBDEFB',
      '200': '#7AC8FF',
      '300': '#52B8FF',
      '400': '#29A7FF',
      '500': '#2196F3',
      '600': '#1E88E5',
      '700': '#1976D2',
      '800': '#1565C0',
      '900': '#00121F',
    },
    red: {
      DEFAULT: '#FF6464',
      '50': '#FFEBEE',
      '100': '#FFFFFF',
      '200': '#FFDEDE',
      '300': '#FFB6B6',
      '400': '#FF8D8D',
      '500': '#FF6464',
      '600': '#FF2C2C',
      '700': '#D32F2F',
      '800': '#BB0000',
      '900': '#830000',
    },
    yellow: {
      '50': '#FFF9E1',
      '100': '#FFEEB4',
      '600': '#FFB900',
      '700': '#FFA600',
      '800': '#FF9500'
    },
    purple: {
      '700': '#7A1FA2'
    },
    gray: {
      '50': '#FAFAFA',
      '100': '#F5F5F5',
      '200': '#EEEEEE',
      '300': '#E0E0E0',
      '400': '#BDBDBD',
      '500': '#9E9E9E',
      '600': '#757575',
      '700': '#616161',
      '800': '#424242',
      '900': '#212121'
    },
  }
}

const tailwindConfig: Partial<Config> = {
  theme: {
    extend: {
      maxWidth: {
        '8xl': '90rem'
      }
    },
    colors: {
      transparent: Colors.transparent,
      current: 'currentColor',
      white: Colors.white,
      black: Colors.black,
      red: MyTheme.colors.red,
      green: MyTheme.colors.green,
      blue: MyTheme.colors.blue,
      yellow: MyTheme.colors.yellow,
      purple: MyTheme.colors.purple,
      gray: MyTheme.colors.gray,
      slate: Colors.slate
    },
    fontFamily: {
      sans: ['Lato', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
  content: [
    `./components/**/*.{vue,js,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./composables/**/*.{js,ts}`,
    `./plugins/**/*.{js,ts}`,
    `./utils/**/*.{js,ts}`,
    `./App.{js,ts,vue}`,
    `./app.{js,ts,vue}`,
    `./Error.{js,ts,vue}`,
    `./error.{js,ts,vue}`
  ],
}

export default tailwindConfig
