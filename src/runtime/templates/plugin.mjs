import { defineNuxtPlugin } from '#imports';
import { createVuetify } from '#vuetify';

const opts = JSON.parse('<%= JSON.stringify(options) %>')

'<% if (options.blueprint) { %>'
import { <%= options.blueprint %> as blueprint } from 'vuetify/blueprints'
opts.blueprint = blueprint
'<% } %>'

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify(opts)

    nuxtApp.vueApp.use(vuetify)

    return {
        provide: {
            vuetify
        }
    }
})