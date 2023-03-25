import {device, element, by, describe, beforeAll, it, expect} from 'detox';

// below are shortened versions of Detox methods
function getByLabel(label) {
  return element(by.lable(label));
}
function getById(id) {
  return element(by.id(id));
}

describe('Create Flow', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should have login screen', async () => {
    await expect(getById('welcomeText')).toBeVisible();
    await expect(getByLabel('Sign in')).toBeVisible();
  });
  it('user sign in should work', async () => {
    await getByLabel('Email').typeText('ishara@gmail.com');
    await getByLabel('Password').typeText('PHpid_75');
    await getByLabel('Sign in').tap();
  });
  it('create modal should open', async () => {
    await getById('fabBtn').tap();
  });
  it('todo item create should work', async () => {
    await getByLabel('title').typeText('Test todo item');
    await getByLabel('description').typeText('Test todo description');
    await getByLabel('Create').tap();
  });
});
