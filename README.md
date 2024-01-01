> [Vuetify 3](https://next.vuetifyjs.com) module for [Nuxt](https://nuxt.com)

## UNMAINTAINED
Please consider using another module: [vuetify-nuxt-module](https://github.com/userquin/vuetify-nuxt-module)

## Info
An alternative module for setting up Vueitfy 3 with nuxt.

## Setup

1. Add `@nuxt-alt/vuetify` and `sass` dependency to your project

```bash
yarn add @nuxt-alt/vuetify sass
```

1. Add `@nuxt-alt/vuetify` to the `modules` section of `nuxt.config.ts`

```ts
export default defineNuxtConfig({
    modules: [
        '@nuxt-alt/vuetify'
    ],
    vuetify: {
        /* module options */
    }
});

```

## Demo Setup

You can view a Stackblitz setup [here](https://stackblitz.com/edit/nuxt-starter-dopi16)

## Options

### `vuetifyOptions`

- Type: `Object`
- Default: `{}`

This property sets the configuration for vuetify via the `createVuetify` function. All the properites here are for the vuetify vonfiguration, so consider looking at their documentation for that.

### `pluginOptions`

- Type: `Object`
- Default: `{}`

These options pertain to the vuetify-loader options

| Option     | Type                                                       | 
|------------|------------------------------------------------------------|
| autoImport | Boolean                                                    |
| styles     | true / 'none' / 'expose' / 'sass' / { configFile: string } |

## Composables

Vuetify comes with their own compasables, I've just added it to nuxt for auto-importing.

| Available Composables |
|-----------------------|
| useTheme              |
| UseDisplay            |
| useRtl                |
| useLocale             |
| useLayout             |

## Known Bugs

#### 1. Custom Scss issue (Source: https://github.com/nuxt/framework/issues/8825)

There is a bug with vuetify where custom scss files might not function correctly. Depending on how severe this issue i, I might try to implement an alternative solution to this.

#### 2. Theme values not applying & memory leak (Source: https://github.com/vuetifyjs/vuetify/issues/16156)

~~There's currently a bug with vueuse/head where it's potentially causing a memory leak and also not adapting changes when using the `useTheme` composable. For now, I have made a workaround where the module will be running its own `createVuetify` instance inheriting from vueitfy and making the necissary changes to make it function. Until this is fixed thta will be used instead.~~

This should have been fixed in vueitfy's `3.1.6` version.
