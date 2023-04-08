module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black_900_7f: "#0000007f",
        gray_50_00: "#fafafa00",
        bluegray_50: "#eef2f5",
        gray_900_99: "#1b1a1a99",
        light_green_200: "#d4c38b",
        red_400: "#e44f55",
        amber_A100: "#f6e978",
        gray_600_a0: "#7c7b7ba0",
        yellow_A400: "#ffe800",
        gray_806: "#3c3c3b",
        light_blue_A700: "#008de4",
        gray_804: "#453a25",
        gray_805: "#3f3824",
        gray_402: "#c0ad9e",
        lime_300: "#d8c173",
        gray_403: "#b1b1b1",
        gray_400: "#bdbdbd",
        lime_301: "#e0cd81",
        blue_900: "#0033ad",
        gray_401: "#d7c1b3",
        lime_302: "#d2c281",
        gray_802: "#574f35",
        lime_303: "#d6bc6f",
        lime_700: "#caa13e",
        orange_209: "#e9ce77",
        gray_803: "#543e26",
        lime_304: "#dfc677",
        gray_800: "#414141",
        lime_701: "#ba9f33",
        orange_208: "#e6c367",
        lime_305: "#dec270",
        blue_500: "#2196f3",
        gray_801: "#585136",
        lime_702: "#c2a44d",
        orange_207: "#e5c66b",
        orange_206: "#ebcc73",
        amber_100: "#f4ecb4",
        orange_205: "#e3c571",
        amber_101: "#f2e8b0",
        orange_204: "#e2c270",
        orange_203: "#e5cc7c",
        orange_202: "#dfc57c",
        orange_201: "#e5cb7a",
        orange_200: "#e2cc85",
        bluegray_801: "#3e4462",
        bluegray_800: "#3d3f4c",
        black_900_11: "#00000011",
        bluegray_400: "#8c8c8c",
        gray_600_5b: "#7c7b7b5b",
        lime_703: "#c89d3a",
        lime_50: "#f7f7e7",
        lime_704: "#c39d3c",
        lime_705: "#c0993a",
        black_900_19: "#00000019",
        lime_706: "#c49937",
        lime_707: "#c99e3d",
        lime_708: "#c29637",
        lime_709: "#be9c44",
        gray_52: "#f8f8f8",
        gray_51: "#fafcfc",
        gray_912: "#141414",
        gray_910: "#111827",
        gray_911: "#252525",
        yellow_903: "#e4751f",
        yellow_902: "#e2761b",
        gray_600_59: "#7c7b7b59",
        orange_212: "#ffbd69",
        gray_50: "#f9f9f9",
        orange_211: "#e3c677",
        orange_210: "#eac970",
        light_green_900: "#3b7f05",
        yellow_901: "#f6851b",
        yellow_900: "#e4761b",
        deep_orange_800: "#cd6116",
        gray_905: "#252211",
        gray_906: "#39331f",
        pink_800: "#9e1f63",
        gray_903: "#161616",
        gray_904: "#0e0f23",
        purple_800: "#662d91",
        gray_909: "#2d2816",
        black_900_68: "#00000068",
        gray_907: "#292311",
        gray_908: "#2d2815",
        orange_A100: "#f1d789",
        lime_200: "#f3e19d",
        lime_201: "#e6db9d",
        lime_202: "#e6d89c",
        lime_203: "#e2d59d",
        orange_A101: "#ecd592",
        gray_901: "#161819",
        lime_600: "#ceb052",
        gray_902: "#212121",
        lime_601: "#cca847",
        lime_602: "#d3ae4d",
        gray_900: "#242424",
        lime_603: "#cdae50",
        yellow_A700_68: "#ffd70068",
        lime_604: "#d2a83e",
        lime_605: "#cba94c",
        lime_606: "#cca849",
        lime_607: "#cbac5a",
        lime_608: "#c4a859",
        lime_609: "#cbaf59",
        red_600: "#e64040",
        black_900_3f: "#0000003f",
        teal_300: "#50af95",
        black_900_db: "#000000db",
        white_A700_ab: "#ffffffab",
        purple_900: "#4f0166",
        white_A700_19: "#ffffff19",
        gray_600: "#7c7b7b",
        lime_101: "#f4efc8",
        gray_601: "#727272",
        orange_A200: "#ffad34",
        gray_602: "#82764f",
        lime_900: "#763d16",
        gray_603: "#84754b",
        yellow_A700: "#ffce00",
        gray_600_26: "#8e827126",
        gray_200: "#ebebeb",
        yellow_A702: "#ffd700",
        yellow_A701: "#fed700",
        lime_100: "#f5eec0",
        purple_800_b2: "#701393b2",
        lime_901: "#8c6228",
        lime_902: "#7a6a2a",
        lime_903: "#92723a",
        lime_904: "#806031",
        lime_905: "#685026",
        white_A700: "#ffffff",
        lime_810: "#ac924c",
        lime_811: "#9f8e57",
        lime_812: "#927d49",
        black_900_9e: "#0000009e",
        gray_800_bf: "#414141bf",
        yellow_A700_db: "#ffd700db",
        light_green_300: "#c3b378",
        black_900_1c: "#0000001c",
        black_900: "#000000",
        yellow_700: "#f3ba2f",
        black_901: "#020105",
        gray_705: "#6f674d",
        deep_orange_A400: "#ff5000",
        gray_50_33: "#fafafa33",
        gray_700: "#666666",
        gray_301: "#e6e6e6",
        lime_400: "#cfb66c",
        lime_401: "#ccb360",
        gray_302: "#dcdfe4",
        gray_703: "#5e5d5d",
        lime_402: "#d2ba6b",
        gray_704: "#6e6342",
        lime_403: "#dfc068",
        gray_701: "#555555",
        amber_600: "#f5b300",
        lime_800: "#a88f33",
        lime_404: "#d4b968",
        gray_702: "#57646c",
        lime_801: "#988430",
        lime_405: "#d7bc6b",
        purple_900_cc: "#530e94cc",
        orange_305: "#dcba5a",
        orange_304: "#e6bd62",
        orange_303: "#d8b65b",
        gray_600_7a: "#7c7b7b7a",
        orange_302: "#d2b159",
        orange_301: "#d2b257",
        gray_300: "#dbdbdb",
        orange_300: "#d5b457",
        bluegray_900: "#2b2b2b",
        gray_900_b5: "#212121b5",
        orange_50: "#f8f6de",
        lime_802: "#b59544",
        lime_803: "#b6933f",
        lime_804: "#b58634",
        indigo_900: "#05297f",
        lime_805: "#ac8132",
        blue_200: "#8ec2f2",
        lime_806: "#a67a2e",
        lime_807: "#a17c34",
        bluegray_903: "#343434",
        bluegray_902: "#233447",
        lime_808: "#b18e3e",
        bluegray_901: "#252b42",
        lime_809: "#b6903c",
      },
      fontFamily: {
        montserrat: "Montserrat",
        futuramaxicgbook: "Futura Maxi CG Book",
        futuramaxicgbold: "Futura Maxi CG Bold",
        roboto: "Roboto",
        hind: "Hind",
        futuramaxicgdemi: "Futura Maxi CG Demi",
        poppins: "Poppins",
        codeprobold: "Code Pro Bold",
        lato: "Lato",
        futuramaxicglight: "Futura Maxi CG Light",
        dmsans: "DM Sans",
        codeproboldlc: "Code Pro Bold LC",
        urbanist: "Urbanist",
      },
      boxShadow: {
        bs3: "0px -2px  1px 0px #ffad34",
        bs1: "0px 4px  4px 0px #0000003f",
        bs7: "0px 2px  4px 0px #00000019",
        bs4: "6px 5px  4px 0px #0000001c",
        bs6: "3px 4px  4px 0px #00000019",
        bs: "0px 4px  120px 0px #8e827126",
        bs5: "0px 13px  19px 0px #00000011",
        bs2: "-17px 28px  32px 0px #0000007f",
      },
      textShadow: { ts: "0px 2px  4px #00000019" },
      backgroundImage: {
        gradient: "linear-gradient(145deg ,#fafafa33,#ffffff19,#fafafa00)",
        gradient1: "linear-gradient(180deg ,#ffe800,#4f0166)",
        gradient2:
          "linear-gradient(203deg ,#ffd700,#020105,#4f0166,#ffd700,#ffd700,#f6e978)",
        gradient3: "linear-gradient(180deg ,#ffd700,#000000)",
        gradient4: "linear-gradient(180deg ,#00000068,#ffd70068)",
        gradient5: "linear-gradient(180deg ,#ffd700db,#000000db)",
        gradient6: "linear-gradient(89deg ,#0000009e,#0000009e,#0000009e)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
