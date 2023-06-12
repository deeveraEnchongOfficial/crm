// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    runtimeConfig: {
        public: {
            prodash: { 
                api_base_url: process.env.NUXT_PRODASH_API_BASE_URL || '',
            }
        },
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
    ],
})
