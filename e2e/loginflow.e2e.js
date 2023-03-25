import {device, element, by, describe, beforeAll, it, expect} from 'detox';

// below are shortened versions of Detox methods
function getByLabel(label) {
  return element(by.lable(label));
}
function getById(id) {
  return element(by.id(id));
}

describe('Login Flow', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should have login screen', async () => {
    await expect(getById('welcomeText')).toBeVisible();
    await expect(getByLabel('Sign in')).toBeVisible();
  });
  it('User sign in should work', async () => {
    await getByLabel('Email').typeText('ishara@gmail.com');
    await getByLabel('Password').typeText('PHpid_75');
    await getByLabel('Sign in').tap();
  });
  it('should navigate to Home page', async () => {
    await expect(getById('fabBtn')).toBeVisible();
  });
});
