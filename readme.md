# Hugo and Bootstrap Boilerplate

🚀 Hugo and Bootstrap Boilerplate is starter code for your website with Hugo and Bootstrap 5. ⚡️ Made with [Hugo](https://gohugo.io), [Bootstrap 5](https://www.getbootstrap.com), [ESLint](https://eslint.org), [Prettier](https://prettier.io), [Stylelint](https://), [Markdownlink](https://).

Clone this project and use it to create your own [Hugo](https://nextjs.org) website. You can check the [GitHub Page](https://github.com/hugo-starters) for more starters.

## Features

- 🎈 Offline editing
- 🤖 All file types linted and formatted
- ⚙️ Sensible defaults
- 📖 Pagination
- 🌈 Open source
- ⬇️ Markdown
- 💯 Maximize lighthouse score

Developer experience first:

- 🔥 [Next.js](https://nextjs.org) for Static Site Generator
- 🎨 Integrate with [Tailwind CSS](https://tailwindcss.com)
- 💅 [PostCSS](https://postcss.org) for processing [Tailwind CSS](https://tailwindcss.com)
- 🎉 Type checking [TypeScript](https://www.typescriptlang.org)
- ✏️ Lint with [ESLint](https://eslint.org),
- 🛠 Code Format with [Prettier](https://prettier.io)
- 🦊 SEO metadata, [JSON-LD](https://developers.google.com/search/docs/guides/intro-structured-data) and [Open Graph](https://ogp.me/) tags with [Next SEO](https://github.com/garmeeh/next-seo)
- ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

### Philosophy

- Minimal code
- Ready to extend
- 🚀 Production-ready

### Requirements

- Node.js and npm
- Latest version of Hugo-extended must be installed locally and in PATH

### Getting started

Run the following command on your local environment:

```
git clone --depth=1 https://github.com/hugo-starters/default-template.git my-project-name
cd my-project-name
npm install
```

Then, you can run locally in development mode with live reload:

```shell
npm run dev
```

Open http://localhost:1313 with your favorite browser to see your project.

``` text
.
|
├── archetypes          # Template for content creation
├── content             # Markdown files for page generation
├── data                # For .yaml, .toml and .json databases.
├── layouts             # Template for content creation
|   ├── _default        # Default templates for page generation
|   |  ├── baseof.html  #
|   |  ├── list.html
|   |  └── single.html
|   ├── partials        # Partials for inclusion in templates
|   ├── shortcodes      # Shortcodes for use in markdown
|   ├── 404.html        # 404 error page template
|   └── index.html      # Homepage template
├── node_modules
├── public
├── resources
├── static              # Directory contents are accessible in project root
│   ├── css
│   ├── js
│   └── img
└── themes
```

### Customization

You can easily configure Next js Boilerplate. Please change the following file:

- `public/apple-touch-icon.png`, `public/favicon.ico`, `public/favicon-16x16.png` and `public/favicon-32x32.png`: your blog favicon, you can generate from https://favicon.io/favicon-converter/
- `public/assets/images/logo.png`, `public/assets/images/logo-32x32.png`: your blog logo
- `src/styles/main.css`: your blog CSS file using Tailwind CSS
- `src/utils/Config.ts`: configuration file like blog name, url, etc.
- `src/templates/Main.tsx`: blog theme

### Deploy to production

You can see the results locally in production mode with:

```
$ npm run build
$ npm run start
```

The generated HTML and CSS files are minified (built-in feature from Next js). It will also removed unused CSS from [Tailwind CSS](https://tailwindcss.com).

You can create an optimized production build with:

```
npm run build-prod
```

Now, your blog is ready to be deployed. All generated files are located at `dist` folder, which you can deploy with any hosting service.

### Deploy to Netlify

Clone this repository on own GitHub account and deploy to Netlify:

[![Netlify Deploy button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ixartz/Next-js-Blog-Boilerplate)

### Contributions

Everyone is welcome to contribute to this project. Feel free to open an issue if you have question or found a bug.

### License

Licensed under the MIT License, Copyright © 2022

See [LICENSE](LICENSE) for more information.

---

Made with ♥ by [CreativeDesignsGuru](https://creativedesignsguru.com) [![Twitter](https://img.shields.io/twitter/url/https/twitter.com/cloudposse.svg?style=social&label=Follow%20%40Ixartz)](https://twitter.com/ixartz)

[![Sponsor Next JS Boilerplate](https://cdn.buymeacoffee.com/buttons/default-red.png)](https://www.buymeacoffee.com/ixartz)




## Linting

`npm run lint` will run eslint, stylelint and prettier

You should install code editor plugins for eslint, stylelint and prettier, so that you can see errors in real time, and format on save.

## Editor config settings

If using VS Code, you need the editorconfig plugin to inherit the .editorconfig settings.

## Installation

You need to have node.js installed, and run npm install after cloning the git repository
