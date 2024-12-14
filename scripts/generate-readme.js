const fs = require("fs");
const { voucherData } = require("../data/vouchers.js");

const generateReadme = () => {
  try {
    const readme = `# Netcup Voucher Codes

> 🎟️ A curated collection of Netcup voucher codes with a modern, dark-themed interface.

## Available Vouchers

${Object.entries(voucherData)
  .map(
    ([category, data]) => `
### ${data.name}
${data.items
  .map(
    (item) => `
- **${item.name}** (${item.discount})
  ${item.codes.map((code) => `- \`${code}\``).join("\n  ")}`
  )
  .join("\n")}`
  )
  .join("\n")}

## Usage

1. Visit [our website](https://netcupvoucher.com)
2. Choose your desired voucher
3. Click to copy the code
4. Redeem at [netcup.com](https://www.netcup.com/en/checkout/cart)

Last updated: ${new Date().toLocaleDateString()}
`;

    fs.writeFileSync("README.md", readme);
    console.log("Successfully updated README.md");
  } catch (error) {
    console.error("Error generating README:", error);
    process.exit(1);
  }
};

generateReadme();