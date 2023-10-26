// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
],
app:{
  head:{
    script:[
      {
        src:"https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.0.0/flowbite.min.js"
      }
    ]
  }
}
})
