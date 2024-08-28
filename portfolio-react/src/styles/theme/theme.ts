interface DefaultTheme {
  color: {
    primary: string;
    secondary: string;
    white: string;
    black: string;
    purple: string;
    bone: string;
    darkGrey: string;
    grey: string;
    darkPurple: string;
  };

  background: {
    primary: string;
    secondary: string;
    terciary: string;
    cuaternary: string;
  };

  fontFamily: {
    primary: string;
  };

  fontSize: {
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
    xxl: string;
    xxxl: string;
    xxxxl: string;
    xxxxxl: string;
    xxxxxxl: string;
    xxxxxxxl: string;
    xxxxxxxxl: string;
  };

  gradient: {
    primary: string;
    secondary: string;
  };

  spacing: {
    none: string;
    xxs: string;
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
    xxl: string;
    xxxl: string;
    xxxxl: string;
    xxxxxl: string;
  };

  borderRadius: {
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
    xxl: string;
    xxxl: string;
  };

  border: {
    xxs: string;
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
  };

  mediaQueries: {
    mobile: string;
    tablet: string;
    mobileAndTablet: string;
    tabletAndDesktop: string;
    desktop: string;
  };

  margin: {
    none: string;
    xxs: string;
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
    xxl: string;
    xxxl: string;
    xxxxl: string;
    xxxxxl: string;
  };

  lineHeight: {
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
    xxl: string;
    xxxl: string;
  };

  boxShadow: {
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
  };

  opacity: {
    light: string;
    medium: string;
    heavy: string;
  };
}

export const theme: DefaultTheme = {
  color: {
    primary: "#f58949",
    secondary: "#a34b37",
    white: "#ffffff",
    black: "#000000",
    purple: "#B415FF",
    bone: "#d4d4d4",
    darkGrey: "#32323b",
    grey: "#a0a0a0",
    darkPurple: "#1f0016",
  },

  background: {
    primary: "linear-gradient(270deg, #df8908 10%, #b415ff 100%)",
    secondary: "linear-gradient(267deg, #da7c25 0.36%, #b923e1 102.06%)",
    terciary: "linear-gradient(45deg, #3f0028, #582300)",
    cuaternary: "linear-gradient(270deg, #df8908 50%, #b415ff 100%)",
  },

  fontFamily: {
    primary: "Outfit",
  },

  fontSize: {
    xs: "10px",
    s: "12px",
    m: "14px",
    l: "16px",
    xl: "20px",
    xxl: "24px",
    xxxl: "35px",
    xxxxl: "42px",
    xxxxxl: "50px",
    xxxxxxl: "65px",
    xxxxxxxl: "80px",
    xxxxxxxxl: "90px",
  },

  gradient: {
    primary:
      "linear-gradient(180deg, rgba(253,250,243,1) 0%, rgba(243,226,208,1) 50%, rgba(162,132,124,1) 100%)",
    secondary: "linear-gradient(267deg, #da7c25 0.36%, #b923e1 102.06%)",
  },

  spacing: {
    none: "0",
    xxs: "0.10rem",
    xs: "0.25rem",
    s: "0.5rem",
    m: "1rem",
    l: "1.5rem",
    xl: "2rem",
    xxl: "3rem",
    xxxl: "4rem",
    xxxxl: "5rem",
    xxxxxl: "5.5rem",
  },

  borderRadius: {
    xs: "4px",
    s: "8px",
    m: "12px",
    l: "16px",
    xl: "24px",
    xxl: "35px",
    xxxl: "50px",
  },

  border: {
    xxs: "2px",
    xs: "4px",
    s: "8px",
    m: "12px",
    l: "16px",
    xl: "24px",
  },

  margin: {
    none: "0",
    xxs: "0.10rem",
    xs: "0.25rem",
    s: "0.5rem",
    m: "1rem",
    l: "1.5rem",
    xl: "2rem",
    xxl: "3rem",
    xxxl: "4rem",
    xxxxl: "5rem",
    xxxxxl: "7rem",
  },

  lineHeight: {
    xs: "1.2",
    s: "1.4",
    m: "1.6",
    l: "1.8",
    xl: "2",
    xxl: "2.2",
    xxxl: "2.6",
  },

  boxShadow: {
    xs: "0 1px 2px rgba(0, 0, 0, 0.1)",
    s: "0 2px 4px rgba(0, 0, 0, 0.1)",
    m: "0 4px 8px rgba(0, 0, 0, 0.2)",
    l: "0 6px 12px rgba(0, 0, 0, 0.2)",
    xl: "0 8px 16px rgba(0, 0, 0, 0.3)",
  },

  opacity: {
    light: "0.3",
    medium: "0.6",
    heavy: "0.9",
  },

  mediaQueries: {
    mobile: `@media (max-width: 48rem)`,
    mobileAndTablet: `@media (max-width: 64rem)`,
    tablet: `@media (max-width: 64rem) and (min-width: 48rem)`,
    tabletAndDesktop: "@media (min-width: 48rem)",
    desktop: "@media (min-width: 64rem)",
  },
};
