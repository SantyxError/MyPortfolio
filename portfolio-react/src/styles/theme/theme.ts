interface DefaultTheme {
    color: {
      primary: string;
      secondary: string;
      white: string;
      black: string;
      wheat: string;
      maroon: string;
      whiteTooth: string;
      purple: string;
  
    };

    background:{
      primary: string;
    };

    fontFamily:{
      primary: string;
    };
  
    gradient: {
      background: string;
    };
  
    spacing: {
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
      xxl:string;
      xxxl:string;
    };
  

    border: {
      xxs:string;
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
  }
  
  export const theme: DefaultTheme = {
    color: {
      primary: "#f58949",
      secondary: "#a34b37",
      white: "#ffffff",
      black: "#000000",
      wheat: "#fee6cc",
      maroon: '#9d4d38',
      whiteTooth: '#fee6cc',
      purple: '#B415FF',
    },

    background:{
      primary: 'linear-gradient(267deg, #da7c25 0.36%, #b923e1 102.06%)',
    },

    fontFamily:{
      primary: 'Outfit',
    },

    gradient: {
      background:
        "linear-gradient(180deg, rgba(253,250,243,1) 0%, rgba(243,226,208,1) 50%, rgba(162,132,124,1) 100%)",
    },
    spacing: {
      xxs: '0.10rem',
      xs: '0.25rem',
      s: '0.5rem',
      m: '1rem',
      l: '1.5rem',
      xl: '2rem',
      xxl: '3rem',
      xxxl: '4rem',
      xxxxl: '5rem',
      xxxxxl: '5.5rem'
    },
    borderRadius: {
      xs: "4px",
      s: "8px",
      m: "12px",
      l: "16px",
      xl: "24px",
      xxl: "35px",
      xxxl: "50px"
    },

    border: {
      xxs: "2px",
      xs: "4px",
      s: "8px",
      m: "12px",
      l: "16px",
      xl: "24px",
    },
    mediaQueries: {
      mobile: `@media (max-width: 48rem)`,
      mobileAndTablet: `@media (max-width: 64rem)`,
      tablet: `@media (max-width: 64rem) and (min-width: 48rem)`,
      tabletAndDesktop: "@media (min-width: 48rem)",
      desktop: "@media (min-width: 64rem)",
    },
  };
  