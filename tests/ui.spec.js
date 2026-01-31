const { test, expect } = require('@playwright/test');

const scenarios = [

  {
    id: 'Pos_UI_0001',
    name: 'Simple sentence',
    input: 'api paasal yanavaa',
    expected: 'අපි පාසල් යනවා'
  },
];


for (const scenario of scenarios) {
  test(`${scenario.id}: ${scenario.name}`, async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
    await inputArea.pressSequentially(scenario.input, { delay: 30 });

    const outputDiv = page.locator('div.whitespace-pre-wrap.overflow-y-auto').first();

    await expect(outputDiv).not.toBeEmpty({ timeout: 10000 });

    const actualOutput = await outputDiv.innerText();
    console.log(`TC ID: ${scenario.id} | Actual Output: ${actualOutput}`);

    await page.screenshot({ path: `screenshots/${scenario.id}.png` });

    expect(actualOutput.trim()).toBe(scenario.expected);
  });
}
