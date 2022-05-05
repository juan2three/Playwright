import { ICustomWorld } from '../support/custom-world';
import { config } from '../support/config';
import { takeScreenshot } from '../steps/general.steps';
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
//import expect from 'expect';
// import { request } from 'http';
// import exp from 'constants';
// eslint-disable-next-line import/no-unresolved
import { unlink } from 'node:fs';

Given('Go to the playwright website', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.goto(config.BASE_URL);
  await page.locator('nav >> a >> text="Playwright"').waitFor();
});

When('Change theme to {string} mode', async function (this: ICustomWorld, mode: string) {
  const page = this.page!;
  const current = await page.getAttribute('html', 'data-theme');
  if (current !== mode) {
    await page.locator('//*[@id="__docusaurus"]/nav/div[1]/div[2]/div[1]').click();
  }
  await page.waitForSelector(`html[data-theme=${mode}]`);
});
When('We delete temp files', async function (this: ICustomWorld) {
  unlink('/screenshots/features', (err) => {
    if (err) throw err;
    // eslint-disable-next-line no-console
    console.log('successfully deleted /tmp/hello');
  });
});
Then('We see {string} mode', async function (this: ICustomWorld, mode: string) {
  const page = this.page!;
  const theme = await page.locator('html').getAttribute('data-theme');
  expect(theme).toEqual(mode);
});
