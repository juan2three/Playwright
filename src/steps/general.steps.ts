import { ICustomWorld } from '../support/custom-world';
import { compareToBaseImage, getImagePath } from '../utils/compareImages';
import { Then, Given } from '@cucumber/cucumber';

Then('Snapshot {string}', async function (this: ICustomWorld, name: string) {
  const { page } = this;
  await page?.screenshot({ path: getImagePath(this, name) });
});

Then('Snapshot', async function (this: ICustomWorld) {
  const { page } = this;
  const image = await page?.screenshot();
  image && (await this.attach(image, 'image/png'));
});

Given('debug', async function () {
  // eslint-disable-next-line no-debugger
  debugger;
});
export async function takeScreenshot(this: ICustomWorld) {
  const { page } = this;
  const image = await page?.screenshot();
  image && (await this.attach(image, 'image/png'));
}
Then('Screen matches the base image {string}', async function (this: ICustomWorld, name: string) {
  await this.page?.waitForTimeout(6000);
  const screenshot = await this.page!.screenshot();
  await compareToBaseImage(this, name, screenshot as Buffer);
});
