// Helpers for preparing voucherData for rendering.
// - Items marked `discontinued: true` keep their product page (so existing
//   URLs don't 404) but are left out of listings, menus and sidebars. The
//   homepage links them from a small "older generations" list instead.
// - Items with no codes of their own and `fallbackCodesFrom: "<item name>"`
//   show that item's codes (and discount) with `usingFallback: true`. Once the
//   voucher automation fills the item's own `codes`, those take over.

const isActive = (item) => !item.discontinued;

// Copy of voucherData with fallback codes filled in
const resolveVoucherData = (voucherData) => {
  const itemsByName = {};
  Object.values(voucherData).forEach((category) =>
    category.items.forEach((item) => {
      itemsByName[item.name] = item;
    })
  );

  return Object.fromEntries(
    Object.entries(voucherData).map(([key, category]) => [
      key,
      {
        ...category,
        items: category.items.map((item) => {
          const fallback = itemsByName[item.fallbackCodesFrom];
          if (item.codes.length > 0 || !fallback) return item;
          return {
            ...item,
            codes: fallback.codes,
            discount: fallback.discount,
            usingFallback: true,
          };
        }),
      },
    ])
  );
};

// Resolved copy for listings: discontinued items are moved to `previous`
// (names only) and categories with nothing active are dropped
const getActiveVoucherData = (voucherData) =>
  Object.fromEntries(
    Object.entries(resolveVoucherData(voucherData))
      .map(([key, category]) => [
        key,
        {
          ...category,
          items: category.items.filter(isActive),
          previous: category.items
            .filter((item) => !isActive(item))
            .map((item) => item.name),
        },
      ])
      .filter(([, category]) => category.items.length > 0)
  );

module.exports = { isActive, resolveVoucherData, getActiveVoucherData };
