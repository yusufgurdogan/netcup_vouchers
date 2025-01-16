const fs = require('fs');
const path = require('path');
const { voucherData } = require('../data/vouchers.js');

const updateSite = () => {
  try {
    // Try multiple possible template locations
    const possiblePaths = [
      process.env.TEMPLATE_PATH,
      path.join(process.cwd(), 'templates', 'template.html'),
      path.join(process.cwd(), 'template.html'),
      path.join(__dirname, '..', 'templates', 'template.html'),
      path.join(__dirname, '..', 'template.html')
    ];

    let templatePath;
    let templateContent;

    for (const p of possiblePaths) {
      if (p && fs.existsSync(p)) {
        console.log('Found template at:', p);
        try {
          templateContent = fs.readFileSync(p, 'utf8');
          if (templateContent.includes('// VOUCHER_DATA_PLACEHOLDER')) {
            templatePath = p;
            break;
          }
        } catch (err) {
          console.log(`Couldn't read template at ${p}:`, err.message);
        }
      }
    }

    if (!templatePath || !templateContent) {
      throw new Error('Valid template file not found in any of the expected locations');
    }
    
    const updatedHtml = templateContent.replace(
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