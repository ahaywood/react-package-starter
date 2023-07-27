# Quick Start

- Clone the repo
- Install the dependencies using `yarn install`
- View the components in the browser using `yarn storybook`
- Create a unique project token for your Storybook by [signing in to Chromatic](https://www.chromatic.com/start) and creating a project.
- Run the following command: `npx chromatic --project-token <your-project-token>`. When complete, you’ll see the build status and a link to the published Storybook.
- Test any changes by running `yarn test`
- Build the library using `yarn build`

# About this Repo

This is a starter repo for creating a UI component library. It uses:

- React
- TypeScript
- Rollup
- Storybook
- Jest
- React Testing Library
- PlopJS
- Prettier and EsLint
- TailwindCSS

# Shout Outs

I used [@Timonwa](https://github.com/Timonwa)'s [Log Rocket: How to Build a Component Library within React and TypeScript](https://blog.logrocket.com/how-to-build-component-library-react-typescript/#why-build-component-library) and [demo-ui-library](https://github.com/Timonwa/demo-ui-library) as a starting point.

# Roadmap

- [ ] Set up Design Tokens / [Style Dictionary](https://www.michaelmang.dev/blog/introduction-to-design-tokens)
- [ ] Run [Chromatic]()
- [ ] Add [CI/CD]()
