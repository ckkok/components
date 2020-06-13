# React Component Library Example

This repository shows a MVP for publishing React components to Bitbucket for other projects to import as dependencies. A sample consumer app can be found [here](https://bitbucket.ship.gov.sg/users/kok_chee_kean/repos/cra-import-component-example/browse).

# Why Use a Component Library?

- An **organisation-wide** component library increases team velocities and enhances design consistency

- Keeps the codebase containing business logic small and manageable

- Allows teams to spin up new services quicker to address new business needs in different domains

- Encourages clean software architecture and engineering practices by decoupling presentational concerns from business logic and promoting injection of the latter

- Potentially abstracts away enough of the implementation details of the underlying framework so that the components can be easily reused across different media via their interface, e.g. importing a component into React Native projects but keeping the same API while the component library handles the implementation changes 

# What Does Not Belong Here

Business and state logic are the responsibilities of the application, not the library. For example, an application may choose to manage state with Redux, and implement login functionality via Google OAuth. Both of these features can change from application to application, and have nothing to do with how the Login button or menu looks like, and so do not belong to this library.

# What's Still Up for Debate

- Localization features: This is a frequent enough use case that a component library might want to define a system for handling localization of texts, but implementing one enforces an opinion that makes the library less reusable. Alternatively, a dependency injection purist would rather the application itself pass in the appropriate content for presentation, and this allows the library to be more flexible, and possibly more performant.

- Accessibility and responsive design management: See above.

# Using Components from the Library

- Ensure that you have access to this repository at `https://bitbucket.ship.gov.sg/users/kok_chee_kean/repos/react-component-examples/browse`

- In your project, run `npm install git+ssh://git@bitbucket-ssh.ship.gov.sg:7999/~kok_chee_kean/react-component-examples.git` to install this as a package.

- Import the component(s) you need, e.g. `import { Greeting } from '@kok_chee_kean/react-component-examples'`

- Import the stylesheet, e.g. `import '@kok_chee_kean/react-component-examples/dist/styles.css'`

- (_Optional_) Configure Webpack for tree-shaking in your project to remove unused components and reduce your bundle size

# Developing Components for the Library

## Notes

  - Husky has been pre-configured with a git hook to **lint and run all unit tests before pushing** to the repository. Ensure that these pass before your last commit if you are intending to push your code up. The push will fail otherwise.

  - The minimum branch and lines test coverage percentage is **75%**. IstanbulJS will fail the build if this coverage percentage is not met.

## To develop new components for the library:

  - Create a subdirectory under `src/components` for your component, e.g. `src/components/Counter`

  - Create a file `index.tsx` in the newly created directory. Your component should be exported from here.

  - Create a test file, e.g. `Counter.test.tsx`, in the newly created directory. Your unit tests should be written here.

  - Add a line to `src/index.tsx` to export your component for users, e.g. `export * from './components/Counter'`

## Available NPM scripts

  - `clean`: Removes all files and subdirectories in `dist`

  - `lint`: Runs ESLint

  - `lint:fix`: Runs ESLint and fixes as many violations as possible

  - `test`: Runs Mocha tests for all `.test.tsx` files in `src`

  - `test:watch`: Runs Mocha tests, watches for specified files and re-runs tests when they've changed

  - `compile`: Runs Webpack to build the components for distribution. Use this when introducing a new `.scss` file to generate the corresponding CSS module.

  - `build`: Cleans, lints, tests, and compiles the project

# Publishing the Library

- Run `npm run build` to lint, test, and build the package for release

- Push the project up to the repository to publish it for consumption

  - Change the `version` value in `package.json` so that users can install specific versions by appending `#1.0.0` (example) to the git url when running `npm install`

- Alternatively, run `npm pack` to generate an artifact that can be installed via `npm install <filename>`

# Things That This Example Takes Care Of

- Webpack and TypeScript transpilation of TSX to ES5 syntax for export

- `package.json` configuration for exporting only components and styles as npm package
  - React and React-DOM are not exported. Library users will need to install those as peer dependencies.

- Generation of `index.d.ts` to specify type information for IDEs

- Linting: run `npm run lint`
  - Configured with ESLint and Prettier, with React and TypeScript recommended settings

- Test infrastructure with Mocha, Chai, and Enzyme: run `npm run test`
  - Write unit tests in files ending with `.test.tsx` next to your components
  - Observe that no test is needed to assert that the name property of the Greeting component has to be a string. TypeScript will not compile if a non-string is provided.

- Styling of components and bundling of CSS (or processing of SCSS) via Webpack
  - Note that CSS/SCSS is scoped to each component via CSS modules. Class names are hashed on build and should be imported using CSS module styling. See the Greeting component for an example.

# Stretch Goals

- Set up a private NPM registry, e.g. using Verdaccio or npm-register, so that devs can do `npm install @kok_chee_kean/react-component-examples` instead while keeping that repository private

# Reference(s)

In all likelihood, for a complete (but extremely heavy) solution, you may wish to follow https://www.pluralsight.com/guides/publish-es6-react-modules-to-npm, which is based off the use of the `create-react-app` tool. However, the instructions there do not implement many of the auxilliary features here.