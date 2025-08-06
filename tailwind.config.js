import animatePlugin from 'tailwindcss-animate';
import { tailwindPlugin } from './app/_lib';

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ['./components/**/*.{js,jsx,mdx}', './app/**/*.{js,jsx,mdx}'],
  plugins: [tailwindPlugin, require('tailwindcss-animate')],
};

module.exports = tailwindConfig;
