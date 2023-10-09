import {
  pg_colors,
  pg_fonts,
  pg_backgrounds,
} from './themes/pg-tailwindcss/tokens.cjs'

export default {
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@pinegrow/tailwindcss-plugin').default({
      // colors: { ...pg_colors, pp: pg_colors.primary }, // pp, primary, secondary etc
      fonts: pg_fonts,
      backgrounds: pg_backgrounds, // bg-design-image, bg-design-image-large
    }),
  ],

  theme: {
    extend: {
      // Nuxt UI can process colors extended directly, and not via plugin (as above), so the colors are added here instead of passing it to @pinegrow/tailwindcss-plugin above
      // Primary is added additionally as pp as it's required to set Nuxt UI's primary in app.config.ts. Other colors like secondary etc can be used in Nuxt UI component's color prop
      colors: { ...pg_colors, pp: pg_colors.primary },
    },
  },

  get content() {
    const _content = [
      './components/**/*.{js,vue,ts}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
      './app.vue',
      '*.{mjs,js,ts}',
    ]
    return process.env.NODE_ENV === 'production'
      ? _content
      : [..._content, './_pginfo/**/*.{html,js}'] // used by Vue Desginer for live-designing during development
  },
}
