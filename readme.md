# Quick Start

- Clone the repo
- Install the dependencies using `yarn install`
- View the components in the browser using `yarn storybook`
- Test any changes by running `yarn test`
- Build the library using `yarn build`
- Publish your package on [npm](https://www.npmjs.com/). ([Additional instructions here](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages))

## Connecting to Chromatic

- Create a unique project token for your Storybook by [signing in to Chromatic](https://www.chromatic.com/start) and creating a project.
- Run the following command: `npx chromatic --project-token <your-project-token>`.
- When complete, you’ll see the build status and a link to the published Storybook.

# Scripts

Within the `package.json` file, there are several scripts you can run:

- `test` - Runs Jest unit tests
- `test:ci` - Runs Jest unit tests in CI mode. The only difference between this and `test` is that it doesn't watch for changes.
- `build` - Builds the library and preps it for publishing to npm
- `storybook` - Runs Storybook
- `build-storybook` - Builds Storybook
- `lint` - Runs EsLint
- `lint:fix` - Runs EsLint and fixes any issues it finds
- `plop` - Runs PlopJS. You'll still need to specify what PlopJS script you want to run. Right now, the only available script is `component`.

##

# CI/CD

- When you push code to the repo, stories will be published to [Chromatic](https://www.chromatic.com/). _NOTE: There's a little extra setup required to connect to Chromatic. (Detailed below)_
- When code is pushed is pushed to the `main` branch or a new pull request is made, [CodeQL](https://codeql.github.com/) will run.
- When code is pushed Jest unit tests will run. ([for reference](https://github.com/marketplace/actions/run-jest))

### Setting up Chromatic

- Navigate to your GitHub repository. Click the **Settings** tab, followed by **Secrets** and then **New secret.**
- Create a secret named `CHROMATIC_PROJECT_TOKEN` and paste the token into the value.
  You can find additional information on [Chromatic's documentation](https://www.chromatic.com/docs/github-actions).

# About this Repo

This is a starter repo for creating a UI component library. It uses:

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Rollup](https://rollupjs.org/)
- [Storybook](https://storybook.js.org/) and [Chromatic](https://www.chromatic.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [PlopJS](https://plopjs.com/)
- [Prettier](https://prettier.io/) and [EsLint](https://eslint.org/)
- [TailwindCSS](https://tailwindcss.com/)

## Working with PlopJS

[PlopJS](https://plopjs.com/) is A-MAZING for generating code. If you're really interested, I wrote a little [blog post describing some of my favorite use cases.](https://selfteachme.hashnode.dev/plopjs-the-tool-every-developer-needs-for-a-faster-workflow)

Here, I'm using it to generate all the code needed for an individual component (a component file, a story, a unit test, and an index file).

To use it, run `yarn plop component`. You'll be prompted for the name of your component. Then, PlopJS will create a new component folder inside of **src/components** with all the appropriate files.

To change the files, edit the templates inside `plop-templates/component`.

The plop script is located in **plopfile.mjs**.

# Shout Outs

I used [@Timonwa](https://github.com/Timonwa)'s [Log Rocket: How to Build a Component Library within React and TypeScript](https://blog.logrocket.com/how-to-build-component-library-react-typescript/#why-build-component-library) and [demo-ui-library](https://github.com/Timonwa/demo-ui-library) as a starting point.

# Roadmap

- [ ] Set up Design Tokens / [Style Dictionary](https://www.michaelmang.dev/blog/introduction-to-design-tokens)
