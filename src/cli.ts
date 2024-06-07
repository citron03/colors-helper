#!/usr/bin/env node

import { Command } from 'commander';
// import fs from 'fs';
// import path from 'path';
import { getRandomColorHex, getRandomColorRgb } from '..';

// const packageJsonPath = path.join(__dirname, '../package.json');

// const packageJsonData = fs.readFileSync(packageJsonPath, 'utf-8');
// const packageJsonObject = JSON.parse(packageJsonData);
// const version = packageJsonObject.version;

const program = new Command();
const version = '1.5.9';

program
  .name('colors-helper-tools')
  .description('colors-helper-tools helps you control colors !')
  .version(`colors-helper-tools version 🎶 ${version}`);

program
  .command('random')
  .description('Get Random N Colors (default HEX)')
  .argument('[number]', 'number you want to get (default 1)', '1')
  .option('-r, --rgb', 'get rgb colors')
  .action((number, options) => {
    const isRgb = !!options.rgb;
    const colors = [];
    for (let i = 0; i < Number(number); i++) {
      let color = '';
      if (isRgb) {
        const rgb = getRandomColorRgb();
        color += `rgb: ${rgb.red} ${rgb.green} ${rgb.blue}`;
      } else {
        color = getRandomColorHex();
      }
      colors.push(color);
    }
    console.log(colors.join(' '));
  });

program.parse();