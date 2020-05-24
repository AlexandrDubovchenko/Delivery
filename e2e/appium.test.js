import wd from 'wd';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
const PORT = 4723;
const config = {
  platformName: 'android',
  deviceName: "7a834706",
  app: "C:\\Users\\Alexandr\\Desktop\\react native\\delivery\\hunter-delivery-5d8857201aa84d299f4aafe470753cd6-signed.apk",
  automationName: "UiAutomator2",
  appWaitForLaunch: false
};
const driver = wd.promiseChainRemote('localhost', PORT);

beforeAll(async () => {
  await driver.init(config);
  await driver.sleep(2000); // wait for app to load
})

test('appium renders', async () => {
  expect(await driver.hasElementByAccessibilityId('test')).toBe(true);
  expect(await driver.hasElementByAccessibilityId('notthere')).toBe(false);
});