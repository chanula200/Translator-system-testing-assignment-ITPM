const { test, expect } = require('@playwright/test');

const scenarios = [

  {
    id: 'Neg_Fun_0001',
    name: 'Conditional sentence',
    input: 'vassa vahinavaa nam api gedhara innavaa kiyalaa hithanavaa',
    expected: 'වැස්ස වහිනවා නම් අපි ගෙදර ඉන්නවා කියලා හිතනවා'
  },
  
  {
    id: 'Neg_Fun_0002',
    name: 'Compound sentence with tense confusion',
    input: 'mama eeyee vada karala heta yanna hitanavaa',
    expected: 'මම ඊයේ වැඩ කරල හෙට යන්න හිතනවා'
  },

  {
    id: 'Neg_Fun_0003',
    name: 'Interrogative structure ambiguity',
    input: 'oyaa hondhin innawadha?',
    expected: 'ඔයා හොඳින් ඉන්නවද?'
  },

  {
    id: 'Neg_Fun_0004',
    name: 'Negative form with condition',
    input: 'api heta enne nathnam hondai',
    expected: 'අපි හෙට එන්නෙ නැත්නම් හොඳයි'
  },

  {
    id: 'Neg_Fun_0005',
    name: 'Polite phrasing',
    input: 'karuNaakaralaa mata meeka karala dhenna puluvandha?',
    expected: 'කරුණාකරලා මට මේක කරල දෙන්න පුළුවන්ද?'
  },

  {
    id: 'Neg_Fun_0006',
    name: 'Greetings',
    input: 'isthuthi',
    expected: 'ස්තුති'
  },

  {
    id: 'Neg_Fun_0007',
    name: 'Negation pattern',
    input: 'mata wadata enna baha',
    expected: 'මට වැඩට එන්න බැහැ'
  },

  {
    id: 'Neg_Fun_0008',
    name: 'proper nouns and dates in mixed-content',
    input: 'dhesaembar 25 lankaawe match eka',
    expected: 'දෙසැම්බර් 25 ලංකාවේ match එක'
  },

  {
    id: 'Neg_Fun_0009',
    name: 'case-sensitivity in consonant mapping',
    input: 'mata SMS ekak daanna puluwanda?',
    expected: 'මට SMS එකක් දාන්න පුලුවන්ද?'
  },

  {
    id: 'Neg_Fun_0010',
    name: 'Robustness of phonetic mapping in multi-clause sentences',
    input: 'gedara wada karalaa iwara welaa sellam karamu',
    expected: 'ගෙදර වැඩ කරලා ඉවර වෙලා සෙල්ලම් කරමු'
  }

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
