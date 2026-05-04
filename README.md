# Translator-system-testing-assignment-ITPM
Singlish-Sinhala translator system testing

1. Install prerequisites
 - Install Python 3.11/3.12
 - Install Google Chrome (recommended) or let Playwright install Chromium

2. Install the required dependencies
 - From the current directory in Command Prompt, run the following
   commands:
 - pip install -U pip
 - pip install playwright openpyxl
 - playwright install

3. Run the Playwright script
 - From the current directory in Command Prompt, run the following
   command:
   
python IT23627178.py --excel "IT23627178/IT23627178.xlsx" --
url "https://www.pixelssuite.com/chat-translator" --wait-ms 5000 --type-delay-ms 80 --
slow-mo-ms 200 --save-every 1 --keep-open
