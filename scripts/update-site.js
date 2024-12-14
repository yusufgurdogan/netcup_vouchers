const fs = require('fs');
const { voucherData } = require('../data/vouchers.js');

const updateSite = () => {
  try {
    const template = fs.readFileSync('template.html', 'utf8');
    const updatedHtml = template.replace(
      '// VOUCHER_DATA_PLACEHOLDER',
      `const voucherData = ${JSON.stringify(voucherData, null, 2)};`
    );
    fs.writeFileSync('index.html', updatedHtml);
    console.log('Successfully updated index.html');
  } catch (error) {
    console.error('Error updating site:', error);
    process.exit(1);
  }
};

updateSite();