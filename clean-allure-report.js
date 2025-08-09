const fs = require('fs');
const path = require('path');

const reportDir = path.resolve(__dirname, 'allure-report');

if (fs.existsSync(reportDir)) {
  fs.rmSync(reportDir, { recursive: true, force: true });
  console.log('✅ Deleted previous allure-report');
}
