# React Component Examples

This repository shows a MVP for publishing React components to Bitbucket for other projects to import as dependencies.

# Usage

- Ensure that you have access to this repository at `https://bitbucket.ship.gov.sg/users/kok_chee_kean/repos/react-component-examples/browse`

- Run `npm install git+ssh://git@bitbucket-ssh.ship.gov.sg:7999/~kok_chee_kean/react-component-examples.git` to install this as a package.

- Then, `import { Greeting } from '@kok_chee_kean/react-component-examples'` and voila!

# Things That This Package Takes Care Of

- Webpack and Babel transpilation of JSX to ES5 syntax for export
  - Check `webpack.config.js` and `.babelrc`
- `package.json` configuration for exporting as npm package
  - Note the `files` and `peerDependencies` sections
- TypeScript and generation of `index.d.ts` for specifying type information to IDEs (extremely useful for devs!)

# Things That This Package Does NOT Take Care Of (but you should!)

- Styling of components and bundling of CSS (or processing of SCSS) via Webpack
- Linting
- Package scoping
- Semantic versioning (important!!!)
- Tests (definitely important!!! Install Mocha, Chai, and Enzyme and start writing the things)

# Stretch Goals

- Set up a private NPM registry, e.g. using Verdaccio or npm-register, so that devs can do `npm install @kok_chee_kean/react-component-examples` instead while keeping that repository private

# Reference(s)

In all likelihood, for a complete (but extremely heavy) solution, you can follow https://www.pluralsight.com/guides/publish-es6-react-modules-to-npm.