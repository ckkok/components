const COVERAGE_THRESHOLD_PERCENTAGE = 75;

module.exports = {
  "extends": "@istanbuljs/nyc-config-typescript",
  "all": true,
  "check-coverage": true,
  "branches": COVERAGE_THRESHOLD_PERCENTAGE,
  "lines": COVERAGE_THRESHOLD_PERCENTAGE,
  "extension": [
    ".ts",
    ".tsx"
  ],
  "include": [
    "src/**/*.tsx"
  ],
  "exclude": [
    ".",
    "*rc.js",
    "test",
    "dist",
    "coverage",
    "**/*.d.ts",
    "**/*.test.tsx"
  ],
  "reporter": [
    "html"
  ]
}