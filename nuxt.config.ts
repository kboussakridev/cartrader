// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/css/tailwind.css'],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  modules: ["@nuxtjs/tailwindcss",
            "@nuxt/image",
            "@vueuse/nuxt",
            "@nuxtjs/supabase"
  ],

  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirect: false,
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      include: undefined,
      exclude: [],
      cookieRedirect: false,
    }
  }
  

})