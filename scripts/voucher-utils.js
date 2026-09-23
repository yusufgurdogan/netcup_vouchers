// Helpers for filtering voucherData down to what should be shown to visitors.
// Items marked `discontinued: true` keep their product page (so existing URLs
// don't 404) but are left out of listings, menus and sidebars.

const isActive = (item) => !item.discontinued;

// Copy of voucherData with discontinued items removed and empty categories dropped
const getActiveVoucherData = (voucherData) =>
  Object.fromEntries(
    Object.entries(voucherData)
      .map(([key, category]) => [
        key,
        { ...category, items: category.items.filter(isActive) },
      ])
      .filter(([, category]) => category.items.length > 0)
  );

module.exports = { isActive, getActiveVoucherData };
