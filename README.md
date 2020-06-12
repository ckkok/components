# React Component Examples

This repository shows a MVP for publishing React components to Bitbucket for other projects to import as dependencies.

# Usage

- Ensure that you have access to this repository at `https://bitbucket.ship.gov.sg/users/kok_chee_kean/repos/react-component-examples/browse`

- Run `npm install git+ssh://git@bitbucket-ssh.ship.gov.sg:7999/~kok_chee_kean/react-component-examples.git` to install this as a package.

- Then, `import { Greeting } from '@kok_chee_kean/react-component-examples'` and voila!

# Publishing

- Run `npm run build` to compile package
- Push the package up to the repository to publish it for consumption
  - Change the `version` value in `package.json` so that consumers can install specific versions by appending `#1.0.0` (example) to the git url when running `npm install`

# Things That This Example Takes Care Of

- Webpack and Babel transpilation of JSX to ES5 syntax for export
  - Check `webpack.config.js` and `.babelrc`
- `package.json` configuration for exporting as npm package
  - Note the `files` and `peerDependencies` sections
- TypeScript and generation of `index.d.ts` for specifying type information to IDEs (extremely useful for devs!)
- Linting
  - Configured with ESLint and Prettier, with React and TypeScript recommended settings
  - Run `npm run lint`
- Test infrastructure with Mocha, Chai, and Enzyme configured for TypeScript
  - Run `npm run test:unit` to run all `.test.tsx` files in the `src` folders
  - Observe that no test is needed to assert that the name property of the Greeting component has to be a string. TypeScript will not compile if a non-string is provided.

# Things That This Example Does NOT Take Care Of (but you should!)

- Styling of components and bundling of CSS (or processing of SCSS) via Webpack
- Package scoping
- Semantic versioning (important!!!)

# Stretch Goals

- Set up a private NPM registry, e.g. using Verdaccio or npm-register, so that devs can do `npm install @kok_chee_kean/react-component-examples` instead while keeping that repository private

# Reference(s)

In all likelihood, for a complete (but extremely heavy) solution, you can follow https://www.pluralsight.com/guides/publish-es6-react-modules-to-npm.