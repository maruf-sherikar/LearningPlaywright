import {test, expect} from `@playwrogiht/test`;


test(`login test`, async ({page}) => {
    await page.goto(`https://example.com/login`);

    await expect (page).toHaveTitle(`Login - Example`);

});