# test-swa

This project acts as a demonstrator for the **Static Web Apps** issue [#1373](https://github.com/Azure/static-web-apps/issues/1373).

## Context

This project has been created following issues on Static Web Apps with an app running `next.js` + `typescript` + `yarn` + `vitest` in order to identify the issue and report it to the team.

## Development

This project was created based on the standard `next.js` boilerplate with `typescrip`t enabled.

This version is available in the `main` branch and deployed with SWA at the following url: https://mango-dune-0715c5103.4.azurestaticapps.net (and working).

## Secondary Branches

All those branches has been created from `main` to separate the different test on framework and find the one blocking the app.

- :white_check_mark: `yarn` Provide the migration from npm to yarn. Deployed with SWA here: <br/>https://yellow-flower-0c1fe6703.4.azurestaticapps.net/
- :negative_squared_cross_mark: `vitest` Addition of unit tests based on vitest. Deployed with SWA here: <br/>https://lively-flower-0ce3d6d03.4.azurestaticapps.net/
- :white_check_mark: `jest` Addition of unit tests based on jest. Deployed with SWA here: <br/>https://purple-wave-05f306e03.4.azurestaticapps.net/
