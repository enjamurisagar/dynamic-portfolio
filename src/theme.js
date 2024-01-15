import "@fontsource/salsa";
export const colorTokens = {
  primary: {
    50: "#E6FBFF",
    100: "#CCF7FE",
    200: " #7879f9 ",
    300: " #7878f9 ",
    400: "#7878f6 ",
    500: "#7878d3 ",
    600: " #7878b9 ",
    700: " #7875a9 ",
    800: " #7865a9 ",
    900: " #7860a9 ",
  },
  grey: {
    0: "#FFFFFF",
    10: "#F6F6F6",
    50: "#F0F0F0",
    100: "#E0E0E0",
    200: "#C2C2C2",
    300: "#A3A3A3",
    400: "#858585",
    500: "#666666",
    600: "#4D4D4D",
    700: "#333333",
    800: "#1A1A1A",
    900: "#0A0A0A",
    1000: "#000000",
  },
};

export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,

      ...(mode === "dark"
        ? {
            primary: {
              dark: colorTokens.primary[200],
              main: colorTokens.primary[500],
              light: colorTokens.primary[800],
            },
            secondary: {
              dark: colorTokens.grey[100],
              main: colorTokens.grey[200],
              light: colorTokens.grey[700],
            },
            background: {
              default: colorTokens.grey[900],
              paper: colorTokens.grey[800],
            },
          }
        : {
            primary: {
              dark: colorTokens.primary[700],
              main: colorTokens.primary[500],
              light: colorTokens.primary[50],
            },
            secondary: {
              dark: colorTokens.grey[700],
              main: colorTokens.grey[500],

              light: colorTokens.grey[50],
            },
            background: {
              default: colorTokens.grey[10],
              paper: colorTokens.grey[0],
            },
          }),
    },
    typography: {
      fontFamily: ["Salsa", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Salsa", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Salsa", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Salsa", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Salsa", "sans-serif"].join(","),
        fontSize: 17,
      },
      h5: {
        fontFamily: ["Salsa", "sans-serif"].join(","),
        fontSize: 14,
      },
      h6: {
        fontFamily: ["Salsa", "sans-serif"].join(","),
        fontSize: 11,
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 450,
        md: 800,
        lg: 1000,
        xl: 1536,
      },
    },
  };
};
