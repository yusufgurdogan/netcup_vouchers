// Helpers for preparing voucherData for rendering.
// - Items marked `discontinued: true` keep their product page (so existing
//   URLs don't 404) but are left out of listings, menus and sidebars. The
//   homepage links them from a small "older generations" list instead.
// - Items with no codes of their own and `fallbackCodesFrom: "<item name>"`
//   show that item's codes (and discount) with `usingFallback: true`. Once the
//   voucher automation fills the item's own `codes`, those take over.

const isActive = (item) => !item.discontinued;

// How many codes a card shows. Fallback cards each show a different slice of
// the shared codes, so visitors don't all grab the same one.
const MAX_SHOWN_CODES = 10;
const FALLBACK_SHOWN_CODES = 3;

// `count` codes starting at `start`, wrapping around
const rotatedSlice = (codes, start, count) =>
  Array.from({ length: Math.min(count, codes.length) }, (_, i) => codes[(start + i) % codes.length]);

// Copy of voucherData with fallback codes filled in
const resolveVoucherData = (voucherData) => {
  let fallbackIndex = 0;
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
          if (item.codes.length > 0 || !fallback) {
            return { ...item, codes: item.codes.slice(0, MAX_SHOWN_CODES) };
          }
          const start = (fallbackIndex++ * FALLBACK_SHOWN_CODES) % Math.max(fallback.codes.length, 1);
          return {
            ...item,
            codes: rotatedSlice(fallback.codes, start, FALLBACK_SHOWN_CODES),
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
