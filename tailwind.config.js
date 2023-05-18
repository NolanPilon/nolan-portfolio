/** @type {import('tailwindcss').Config} */

const generateColorClass = (variable) => {
  return ({ opacityValue }) =>
    opacityValue
      ? `rgba(var(--${variable}), ${opacityValue})`
      : `rgb(var(--${variable}))`
}

const textColor = {
  primary: generateColorClass('text-primary'),
}

const backgroundColor = {
  primary: generateColorClass('bg-primary'),
  secondary: generateColorClass('bg-secondary'),
  tertiary: generateColorClass('bg-tertiary'),
  quaternary: generateColorClass('bg-quaternary'),
}

const borderColor = {
  primary: generateColorClass('border-primary'),
  secondary: generateColorClass('border-secondary'),
  tertiary: generateColorClass('border-tertiary'),
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      textColor,
      backgroundColor,
      borderColor,
    },
  },
  plugins: [],
}