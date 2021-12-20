import Vue from 'vue'
import { VTooltip } from './../packages/v-tooltip/src/index'

declare module '@nuxt/vue-app' {
    interface Context {
        $VTooltip: VTooltip
    }
    interface NuxtAppOptions {
        $VTooltip: VTooltip
    }
}

// Nuxt 2.9+
declare module '@nuxt/types' {
    interface Context {
        $VTooltip: VTooltip
    }
    interface NuxtAppOptions {
        $VTooltip: VTooltip
    }
}

declare module 'vue/types/vue' {
    interface Vue {
        $VTooltip: VTooltip
    }
}

declare module 'vuex/types/index' {
    interface Store<S> {
        $VTooltip: VTooltip
    }
}