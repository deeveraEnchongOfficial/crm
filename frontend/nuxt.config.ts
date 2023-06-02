// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    runtimeConfig: {
        public: {
            upsale: { 
                api_base_url: process.env.NUXT_UPSALE_API_BASE_URL || '',
            }
        },
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
    ],
})
