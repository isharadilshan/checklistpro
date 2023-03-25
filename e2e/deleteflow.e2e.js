import {device, element, by, describe, beforeAll, it, expect} from 'detox';

// below are shortened versions of Detox methods
function getByLabel(label) {
  return element(by.lable(label));
}
function getById(id) {
  return element(by.id(id));
}

describe('Delete Flow', () => {
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
  it('delete modal should open', async () => {
    await getById('deleteBtn').tap();
  });
  it('todo item deletion should work when press confirm', async () => {
    await getByLabel('Confirm').tap();
  });
});
