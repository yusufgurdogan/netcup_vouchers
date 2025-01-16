const fs = require('fs');
const path = require('path');
const { voucherData } = require('../data/vouchers.js');

const updateSite = () => {
  try {
    // Try multiple possible template locations
    const possiblePaths = [
      process.env.TEMPLATE_PATH,
      path.join(process.cwd(), 'template.html'),
      path.join(process.cwd(), 'templates', 'template.html'),
      path.join(__dirname, '..', 'template.html'),
      path.join(__dirname, '..', 'templates', 'template.html')
    ];

    let templatePath;
    for (const p of possiblePaths) {
      if (p && fs.existsSync(p)) {
        templatePath = p;
        break;
      }
    }

    if (!templatePath) {
      throw new Error('Template file not found in any of the expected locations');
    }

    console.log('Using template from:', templatePath);
    
    const template = fs.readFileSync(templatePath, 'utf8');
    const updatedHtml = template.replace(
      '// VOUCHER_DATA_PLACEHOLDER',
      `const voucherData = ${JSON.stringify(voucherData, null, 2)};`
    );

    fs.writeFileSync('index.html', updatedHtml);
    console.log('Successfully updated index.html');
  } catch (error) {
    console.error('Error updating site:', error);
    console.error('Error details:', error.message);
    console.error('Stack trace:', error.stack);
    process.exit(1);
  }
};

updateSite();