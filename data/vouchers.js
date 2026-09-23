const voucherData = {
  vps: {
    icon: "fas fa-cloud",
    name: "VPS",
    items: [
      // === VPS G11/G12: no longer sold since the G12.5 launch (2026-09-23) ===
      {
        name: "VPS 8000 G12",
        discount: "FREE 1 MONTH",
        codes: [],
        discontinued: true,
      },
      {
        name: "VPS 4000 G12",
        discount: "FREE 1 MONTH",
        codes: [],
        discontinued: true,
      },
      {
        name: "VPS 2000 G12",
        discount: "FREE 1 MONTH",
        codes: [],
        discontinued: true,
      },
      {
        name: "VPS 1000 G12",
        discount: "FREE 1 MONTH",
        codes: [],
        discontinued: true,
      },
      {
        name: "VPS 8000 G11",
        discount: "FREE 1 MONTH",
        codes: [],
        discontinued: true,
      },
      {
        name: "VPS 6000 G11",
        discount: "FREE 1 MONTH",
        codes: [],
        discontinued: true,
      },
      {
        name: "VPS 4000 G11",
        discount: "FREE 1 MONTH",
        codes: [],
        discontinued: true,
      },
      {
        name: "VPS 3000 G11",
        discount: "FREE 1 MONTH",
        codes: [],
        discontinued: true,
      },
      {
        name: "VPS 2000 G11",
        discount: "FREE 1 MONTH",
        codes: [],
        discontinued: true,
      },
      {
        name: "VPS 1000 G11",
        discount: "FREE 1 MONTH",
        codes: [],
        discontinued: true,
      }],
  },
  webhosting: {
    icon: "fas fa-server",
    name: "Webhosting",
    items: [
      {
        name: "Webhosting 8000",
        discount: "30%",
        codes: ["1929nc17341876259",
          "4604nc17901792232",
          "4604nc17901792231",
          "4604nc17901792230"],
      },
      {
        name: "Webhosting 4000",
        discount: "30%",
        codes: ["1928nc17341876229",
          "4603nc17901792182",
          "4603nc17901792181",
          "4603nc17901792180"],
      },
      {
        name: "Webhosting 2000",
        discount: "30%",
        codes: [
          "1927nc17387491610",
          "4602nc17901792132",
          "4602nc17901792131",
          "4602nc17901792130"],
      }],
  },
  rootserver: {
    icon: "fas fa-database",
    name: "Root Server",
    items: [
      // === RS G11/G12: no longer sold since the G12.5 launch (2026-09-23) ===
      {
        name: "RS 8000 G12",
        discount: "FREE 1 MONTH",
        codes: [],
        discontinued: true,
      },
      {
        name: "RS 4000 G12",
        discount: "FREE 1 MONTH",
        codes: [],
        discontinued: true,
      },
      {
        name: "RS 1000 G12",
        discount: "FREE 2 MONTH",
        codes: [],
        discontinued: true,
      },
      {
        name: "RS 2000 G12",
        discount: "FREE 1 MONTH",
        codes: [],
        discontinued: true,
      },

      {
        name: "RS 1000 G11 2M",
        discount: "FREE 2 MONTHS",
        codes: [],
        discontinued: true,
      },
      
      {
        name: "RS 8000 G11",
        discount: "FREE 1 MONTH",
        codes: [],
        discontinued: true,
      },
      {
        name: "RS 4000 G11",
        discount: "FREE 1 MONTH",
        codes: [],
        discontinued: true,
      },
      {
        name: "RS 2000 G11",
        discount: "FREE 1 MONTH",
        codes: [],
        discontinued: true,
      },
      {
        name: "RS 2000 G11 iv SE MNZ",
        discount: "ADV24",
        codes: [],
        discontinued: true,
      },
      {
        name: "RS 2000 G11 iv SE VIE",
        discount: "ADV24",
        codes: [],
        discontinued: true,
      },
      {
        name: "RS 1000 G11",
        discount: "FREE 2 MONTHS",
        codes: [],
        discontinued: true,
      }],
  },
  general: {
    icon: "fas fa-percentage",
    name: "General",
    items: [
      {
        name: "New Customer Offer",
        discount: "€5 DISCOUNT",
        codes: [
          "36nc17341876179",
          "36nc17575786190"
        ],
      }],
  },
};

module.exports = { voucherData };

