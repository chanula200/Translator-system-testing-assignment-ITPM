const { test, expect } = require('@playwright/test');

const scenarios = [

  {
    id: 'Pos_Fun_0001',
    name: 'Simple sentence',
    input: 'api paasal yanavaa',
    expected: 'අපි පාසල් යනවා'
  },
  {
    id: 'Pos_Fun_0002',
    name: 'Simple sentence',
    input: 'mata bath oonee',
    expected: 'මට බත් ඕනේ'
  },
  {
    id: 'Pos_Fun_0003',
    name: 'Short request phrase',
    input: 'mata request ekak dhaanavadha?',
    expected: 'මට request එකක් දානවද?'
  },

  {
    id: 'Pos_Fun_0004',
    name: 'Compound sentence',
    input: 'api kaeema kanna yanavaa saha passe chithrapatayakuth balanavaa',
    expected: 'අපි කෑම කන්න යනවා සහ පස්සෙ චිත්‍රපටයකුත් බලනවා'
  },
  {
    id: 'Pos_Fun_0005',
    name: 'Complex sentence',
    input: 'mama gedhara yanavaa, haebaeyi vahina nisaa dhaenma yannee naehae',
    expected: 'මම ගෙදර යනවා, හැබැයි වහින නිසා දැන්ම යන්නේ නැහැ'
  },

  {
    id: 'Pos_Fun_0006',
    name: 'Complex sentence',
    input: 'oyaa enavaa nam mama balan innavaa',
    expected: 'ඔයා එනවා නම් මම බලන් ඉන්නවා'
  },
  {
    id: 'Pos_Fun_0007',
    name: 'Greetings',
    input: 'suba udhaeesanak!',
    expected: 'සුබ උදෑසනක්!'
  },

  {
    id: 'Pos_Fun_0008',
    name: 'Interrogative',
    input: 'oyaata kohomadha?',
    expected: 'ඔයාට කොහොමද?'
  },
  {
    id: 'Pos_Fun_0009',
    name: 'Interrogative',
    input: 'meeka hariyata vaeda karanavaadha?',
    expected: 'මේක හරියට වැඩ කරනවාද?'
  },

  {
    id: 'Pos_Fun_0010',
    name: 'Imperative',
    input: 'issarahata yanna',
    expected: 'ඉස්සරහට යන්න'
  },
  {
    id: 'Pos_Fun_0011',
    name: 'Imperative request',
    input: 'mata kiyanna',
    expected: 'මට කියන්න'
  },

  {
    id: 'Pos_Fun_0012',
    name: 'Positive form',
    input: 'api heta enavaa',
    expected: 'අපි හෙට එනවා'
  },
  {
    id: 'Pos_Fun_0013',
    name: 'Negative form',
    input: 'api heta lectures ennee naehae',
    expected: 'අපි හෙට lectures එන්නේ නැහැ'
  },

  {
    id: 'Pos_Fun_0014',
    name: 'Polite request',
    input: 'karuNaakaralaa mata podi udhavvak karanna puLuvandha?',
    expected: 'කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුළුවන්ද?'
  },
  {
    id: 'Pos_Fun_0015',
    name: 'Repeated word expressions used for emphasis',
    input: 'hari hari',
    expected: 'හරි හරි'
  },

  {
    id: 'Pos_Fun_0016',
    name: 'Tense variation-Past tense',
    input: 'mata adha udhee aehaerenna parakku una nisaa class eka miss unaa',
    expected: 'මට අද උදේ ඇහැරෙන්න පරක්කු උන නිසා class එක miss උනා'
  },
  {
    id: 'Pos_Fun_0017',
    name: 'Tense variation-Present tense',
    input: 'mama dhaen vaeda karanavaa',
    expected: 'මම දැන් වැඩ කරනවා'
  },
  {
    id: 'Pos_Fun_0018',
    name: 'Future tense',
    input: 'mama heta gamata enavaa',
    expected: 'මම හෙට ගමට එනවා'
  },

  {
    id: 'Pos_Fun_0019',
    name: 'Singular pronoun',
    input: 'oyaa enavaadha?',
    expected: 'ඔයා එනවාද?'
  },
  {
    id: 'Pos_Fun_0020',
    name: 'Plural pronoun',
    input: 'oyaalaa enavaadha?',
    expected: 'ඔයාලා එනවාද?'
  },

  {
    id: 'Pos_Fun_0021',
    name: 'Multi-word expression',
    input: 'mata oona',
    expected: 'මට ඕන'
  },
  {
    id: 'Pos_Fun_0022',
    name: 'Sentences containing places and common English words that should remain as they are',
    input: 'mama ground ekata bike eken ennam',
    expected: 'මම ground එකට bike එකෙන් එන්නම්'
  },

  {
    id: 'Pos_Fun_0023',
    name: 'Sentence with spacing',
    input: 'mama gedhara yanavaa',
    expected: 'මම ගෙදර යනවා'
  },

  {
    id: 'Pos_Fun_0024',
    name: 'Common response',
    input: 'hari, mama karannam',
    expected: 'හරි, මම කරන්නම්'
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
