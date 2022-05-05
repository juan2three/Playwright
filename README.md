# cucumber-playwright

## What's inside

- Typescript setup for writing steps with eslint/typescript and prettier
- Launching of Playwright browser before running all tests
- Launching new context and page for each scenario
- Running feature with video recording option
- Report generated with last good image attached
- Allure reports
- Utilies function to help you with writing steps
- VScode configuration to debug a single feature or an only scenario (run when located on the feature file)

## To run your tests

`npm run test` or `npx cucumber-js` runs all tests
`npm run test <feature name>` or `npx cucumber-js <feature name>` run the single feature

## Browser selection

By default we will use chromium. You can define an envrionment variable called BROWSER and
set the name of the browser. Available options: chromium, firefox, webkit

On Linux and Mac you can write:

`BROWSER=chromium npm run test`, `BROWSER=webkit npx cucumber-js` or `BROWSER=firefox npm run <feature>` runs all tests using Firefox

One Windows you need to write

```
set BROWSER=firefox
npm run test
```

### Attaching data to report

## Screenshots

```
  //Add this to your step definition to take and attach a screenshot
  const image = await page?.screenshot();
  image && (await this.attach(image, 'image/png'));
```

## Plain text

```
  //Add this to your step definition to attach text
  this.attach('add your text here', 'text/plain');
```

## Debugging Features

### From CLI

- `npm run debug` - headful mode with APIs enables both APIs and debug options
- `npm run api` - headless mode with debug apis
- `npm run video` - headless mode vith video

## In Visual Studio Code

- Open the feature
- Select the debug options in the VSCode debugger
- Set breakpoints in the code

To stop the feature, you can add the `Then debug` step inside your feature. It will stop your debugger.

## To choose a reporter

The last reporter/formatter found on the cucumber-js command-line wins:

```text
--format summary --format @cucumber/pretty-formatter --format cucumber-console-formatter
```

In [cucumber.js](cucumber.js) file, modify the options.

## To ignore a scenario

- tag the scenario with `@ignore`

## To check for typescript, linting and gherkin errors

- run the command `npm run build`.

## To view the steps usage

- run the command `npm run steps-usage`.

## To view the html report of the last run

- run the command `npm run report`.

## To view allure report

- run the command `npm run allure`.
