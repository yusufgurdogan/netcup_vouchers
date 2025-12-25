const voucherData = {
  vps: {
    icon: "fas fa-cloud",
    name: "VPS",
    items: [
      {
        name: "VPS 8000 G11",
        discount: "FREE 1 MONTH",
        codes: [
          "4105nc17642320710",
          "4105nc17632851610",
          "4105nc17571693820",
          "4105nc17567498931",
          "4105nc17567498930",
          "4105nc17661764440"],
      },
      {
        name: "VPS 6000 G11",
        discount: "FREE 1 MONTH",
        codes: [
          "4104nc17648405351",
          "4104nc17648405350",
          "4104nc17453955311",
          "4104nc17585415041",
          "4104nc17585415040",
          "4104nc17661764410"],
      },
      {
        name: "VPS 4000 G11",
        discount: "FREE 1 MONTH",
        codes: [
          "4103nc17653032553",
          "4103nc17653032552",
          "4103nc17653032551",
          "4103nc17653032550",
          "4103nc17661764380"],
      },
      {
        name: "VPS 3000 G11",
        discount: "FREE 1 MONTH",
        codes: [
          "4102nc17632851812",
          "4102nc17632851811",
          "4102nc17632851810",
          "4102nc17588252571",
          "4102nc17588252570",
          "4102nc17431902430",
          "4102nc17431897680",
          "4102nc17661764340",
          "4102nc17663148220"],
      },
      {
        name: "VPS 2000 G11",
        discount: "FREE 1 MONTH",
        codes: [
          "4101nc17658761940",
          "4101nc17653032960",
          "4101nc17582863970",
          "4101nc17654458122",
          "4101nc17654458121",
          "4101nc17654458120",
          "4101nc17661764300",
          "4101nc17663148170",
          "4101nc17664876180",
          "4101nc17666172180",
          "4101nc17666604180"],
      },
      {
        name: "VPS 1000 G11",
        discount: "FREE 1 MONTH",
        codes: [
          "4095nc17654458411",
          "4095nc17654458410",
          "4095nc17642321010",
          "4095nc17635498813",
          
          "4095nc17627555831",
          "4095nc17661764270",
          "4095nc17663148120",
          "4095nc17663580130",
          "4095nc17664012130",
          "4095nc17664444130",
          "4095nc17664876130",
          
          "4095nc17666604130"],
      }],
  },
  webhosting: {
    icon: "fas fa-server",
    name: "Webhosting",
    items: [
      {
        name: "Webhosting 8000",
        discount: "30%",
        codes: ["1929nc17341876259"],
      },
      {
        name: "Webhosting 4000",
        discount: "30%",
        codes: ["1928nc17341876229"],
      },
      {
        name: "Webhosting 2000",
        discount: "30%",
        codes: [
          "1927nc17387491610",
          "1927nc17341876197",
          "1927nc17341876196",
          "1927nc17341876195"],
      }],
  },
  rootserver: {
    icon: "fas fa-database",
    name: "Root Server",
    items: [
      // === NEW: Generation 12 (G12) coupons ===
      {
        name: "RS 8000 G12",
        discount: "FREE 1 MONTH",
        codes: [
          "5162nc17624158160",
          "5162nc17579245100",
          "5162nc17648405781",
          "5162nc17648405780"],
      },
      {
        name: "RS 4000 G12",
        discount: "FREE 1 MONTH",
        codes: [
          "5161nc17658761630",
          
          "5161nc17580112721",
          "5161nc17580112720",
          "5161nc17575037545",
          "5161nc17644329952",
          "5161nc17644329951",
          "5161nc17644329950"],
      },
      {
        name: "RS 1000 G12",
        discount: "FREE 2 MONTH",
        codes: [
          ],
      },
      {
        name: "RS 2000 G12",
        discount: "FREE 1 MONTH",
        codes: [
          "5160nc17658761351",
          "5160nc17658761350",
          "5160nc17649496551",
          "5160nc17592469760",
          "5160nc17587342663"],
      },

      // === Existing Generation 11 (G11) coupons ===
      {
        name: "RS 1000 G11 2M",
        discount: "FREE 2 MONTHS",
        codes: [
          "4096nc17545605010",
          "4096nc17538666952",
          "4096nc17538666950",
          "4096nc17509273891",
          "4096nc17480217403",
          "4096nc17480217400"],
      },
      
      {
        name: "RS 8000 G11",
        discount: "FREE 1 MONTH",
        codes: [
          "4100nc17573183321",
          "4100nc17573183320",
          "4100nc17568068830",
          "4100nc17555276921",
          "4100nc17555276920",
          "4100nc17364138842"],
      },
      {
        name: "RS 4000 G11",
        discount: "FREE 1 MONTH",
        codes: [
          "4099nc17574941771",
          "4099nc17574941770",
          "4099nc17554168682",
          "4099nc17554168681",
          "4099nc17554168680",
          "4099nc17415196473"],
      },
      {
        name: "RS 2000 G11",
        discount: "FREE 1 MONTH",
        codes: [
          "4098nc17573183052",
          "4098nc17573183051",
          "4098nc17573183050",
          "4098nc17439419561",
          "4098nc17543008693"],
      },
      {
        name: "RS 2000 G11 iv SE MNZ",
        discount: "ADV24",
        codes: ["4489nc17341876113"],
      },
      {
        name: "RS 2000 G11 iv SE VIE",
        discount: "ADV24",
        codes: ["4487nc17341876051"],
      },
      {
        name: "RS 1000 G11",
        discount: "FREE 2 MONTHS",
        codes: [
          "5159nc17639846170"],
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
          "36nc17575786191",
          "36nc17575786190"
        ],
      }],
  },
};

module.exports = { voucherData };

