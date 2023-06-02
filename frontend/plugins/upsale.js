import axios from "axios"
axios.defaults.withCredentials = true;

export default defineNuxtPlugin((NuxtApp) => {
    const { public: config } = useRuntimeConfig()
    return {
        provide: {
            upsale: axios.create({
                baseURL: config.upsale.api_base_url,
                common: {
                    Accept: 'application/json;q=0.9,text/plain',
                },
                headers : {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
                }
            })
        }
    }
  })

  