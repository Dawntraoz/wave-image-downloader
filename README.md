# "WavE Image Downloader" web extension sample

WavE Image Downloader is a browser extension, created for the talk ["El poder de las Web Extensions"](https://bit.ly/talk-poder-web-ext), that showcase an image grid for the active tab webpage and allows you to select and download them.

<p align="center">
  <img src="https://github.com/user-attachments/assets/a9288502-5317-444b-aa1b-07e258c60738" alt="WavE Image Downloader screenshot" />
</p>

This Web Extension was built using [`vitesse-webext`](https://github.com/antfu-collective/vitesse-webext) template by [@antfu](https://github.com/antfu).

## Features

### Shared options

Adds a dynamic `name` at the header of the Popup by creating an option with the `useWebExtensionStorage` composable.

![Header with name screenshot](https://github.com/user-attachments/assets/9fd2fed1-b364-4ea9-9b77-915ffd5330e8)

### Image selector

An image grid showcasing the images from the webpage at the activeTab with a select functionality.

![Image selector grid screenshot](https://github.com/user-attachments/assets/112ab041-9492-4039-94c9-dcb1da6c358c)

## Packages under the hood

- [`webextension-polyfill`](https://github.com/mozilla/webextension-polyfill) - WebExtension browser API Polyfill with types
- [`webext-bridge`](https://github.com/antfu/webext-bridge) - effortlessly communication between contexts
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Directly use `browser` and Vue Composition API without importing
- [`unplugin-vue-components`](https://github.com/antfu/vite-plugin-components) - components auto import
- [`unplugin-icons`](https://github.com/antfu/unplugin-icons) - icons as components
  - [Iconify](https://iconify.design) - use icons from any icon sets [🔍Icônes](https://icones.netlify.app/)
- [VueUse](https://github.com/antfu/vueuse) - collection of useful composition APIs
- [UnoCSS](https://github.com/unocss/unocss) - the instant on-demand Atomic CSS engine

## Usage

### Folders

- `src` - main source.
  - `contentScript` - scripts and components to be injected as `content_script`
  - `background` - scripts for background.
  - `components` - auto-imported Vue components that are shared in popup and options page.
  - `styles` - styles shared in popup and options page
  - `assets` - assets used in Vue components
  - `manifest.ts` - manifest for the extension.
- `extension` - extension package root.
  - `assets` - static assets (mainly for `manifest.json`).
  - `dist` - built files, also serve stub entry for Vite on development.
- `scripts` - development and bundling helper scripts.

### Development

```bash
pnpm dev
```

Then **load extension in browser with the `extension/` folder**.

For Firefox developers, you can run the following command instead:

```bash
pnpm start:firefox
```

> While Vite handles HMR automatically in the most of the case, [Extensions Reloader](https://chrome.google.com/webstore/detail/fimgfedafeadlieiabdeeaodndnlbhid) is still recommended for cleaner hard reloading.

### Build

To build the extension, run

```bash
pnpm build
```

And then pack files under `extension`, you can upload `extension.crx` or `extension.xpi` to appropriate extension store.

## Web Extension Resources

### Docs

Official documentation at Chrome for Developers: [Get Started with Web Extensions](https://developer.chrome.com/docs/extensions/get-started).

Stay updated by checking [What's new in Chrome extensions](https://developer.chrome.com/docs/extensions/whats-new) from time to time.

### Books

[“Browser extension development, simplified”](https://serversideup.net/building-multi-platform-browser-extensions/).

### Repositories

Vite starter Web Extensions templates: [Vue 3](https://github.com/antfu-collective/vitesse-webext/), [React](https://github.com/JohnBra/vite-web-extension), ...

Web Extensions superframework (agnostic): [WXT](https://wxt.dev/).

### Free courses

[Build a Chrome Extension – Course for Beginners](https://www.youtube.com/watch?v=0n809nd4Zu4) by freeCodeCamp.org.
