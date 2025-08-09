// clean-allure.js
const fs = require('fs');
const path = require('path');

const dir = path.resolve(__dirname, 'allure-results');

if (fs.existsSync(dir)) {
  fs.rmSync(dir, { recursive: true, force: true });
  console.log('✅ Cleaned allure-results folder');
} else {
  console.log('ℹ️ No existing allure-results folder to clean');
}
