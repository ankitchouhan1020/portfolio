export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "ssr",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: "Ankit Chouhan",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Ankit Chouhan, Programmer, Web Developer"
      },
      {
        hid: "keywords",
        name: "keywords",
        content: "resume, frontend, backend, developer, vue"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon-32x32.png" }]
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss",
    [
      "nuxt-fontawesome",
      {
        component: "fa", //customize component name
        imports: [
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["faLightbulb"]
          },
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: [
              "faGithub",
              "faLinkedinIn",
              "faHtml5",
              "faCss3",
              "faJsSquare"
            ]
          },
          { set: "@fortawesome/free-regular-svg-icons", icons: ["faLightbulb"] }
        ]
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {}
};
