import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { blueGrey, orange } from "@material-ui/core/colors";
import { fade } from "@material-ui/core/styles/colorManipulator";

const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#000913",
      light: "#242C36",
      contrastText: "white"
    },
    secondary: {
      main: orange[500]
    }
  },
  shape: {
    borderRadius: 2
  }
});

let theme = createMuiTheme({
  palette: {
    primary: defaultTheme.palette.primary,
    secondary: defaultTheme.palette.secondary
  },
  spacing: defaultTheme.spacing,
  typography: {
    fontFamily: ["Roboto", "Alatsi", "Rubik"].join(","),
    h1: {
      color: defaultTheme.palette.secondary.main,
      paddingBottom: defaultTheme.spacing(2),
      paddingTop: defaultTheme.spacing(2),
      fontFamily: "Alatsi",
      letterSpacing: defaultTheme.spacing(0.2)
    },
    h2: {
      color: defaultTheme.palette.secondary.main,
      paddingBottom: defaultTheme.spacing(2),
      paddingTop: defaultTheme.spacing(2),
      fontFamily: "Alatsi",
      letterSpacing: defaultTheme.spacing(0.2)
    },
    h3: {
      fontFamily: "Alatsi",
      color: defaultTheme.palette.primary.contrastText
    },
    h4: {
      padding: defaultTheme.spacing(2)
    },
    h5: {
      fontFamily: "Alatsi",
      color: defaultTheme.palette.secondary.main
    },
    h6: {
      fontFamily: "Alatsi",
      color: defaultTheme.palette.primary.contrastText
    },
    body1: {
      fontFamily: "Rubik",
      fontWeight: "inherit"
    },
    subtitle1: {
      fontFamily: "Rubik",
      fontWeight: "inherit",
      fontStyle: "italic"
    }
  },
  overrides: {
    MuiContainer: {
      root: {
        backgroundColor: defaultTheme.palette.primary.main,
        overflowX: "hidden"
      }
    },
    MuiSvgIcon: {
      root: {
        color: defaultTheme.palette.primary.contrastText
      }
    },
    MuiDivider: {
      root: {
        backgroundColor: defaultTheme.palette.secondary.main,
        marginBottom: defaultTheme.spacing(4)
      },
      middle: {
        backgroundColor: defaultTheme.palette.primary.light,
        marginTop: defaultTheme.spacing(2),
        marginBottom: defaultTheme.spacing(2)
      }
    },
    MuiGrid: {},
    MuiButton: {
      outlined: {
        border: `1px solid ${defaultTheme.palette.primary.light}`,
        color: defaultTheme.palette.secondary.main,
        "&:hover": {
          border: `1px solid ${defaultTheme.palette.primary.contrastText}`,
          background: defaultTheme.palette.primary.light
        }
      }
    },
    MuiIconButton: {
      root: {
        color: defaultTheme.palette.primary.light
      },
      edgeEnd: {
        //target skills arrows
        "& .MuiSvgIcon-root": {
          fontSize: defaultTheme.spacing(5)
        }
      }
    },
    MuiBackdrop: {
      root: {
        backgroundColor: fade(defaultTheme.palette.secondary.dark, 0.4)
      }
    },
    MuiPaper: {
      root: {
        backgroundColor: "transparent",
        border: `1px solid ${defaultTheme.palette.primary.light}`,
        borderRadius: defaultTheme.shape.borderRadius,
        color: defaultTheme.palette.primary.contrastText
      }
    },
    MuiCardMedia: {
      root: {
        border: `1px solid ${defaultTheme.palette.primary.light}`,
        borderRadius: defaultTheme.shape.borderRadius
      }
    },
    MuiCardActions: {
      root: {
        justifyContent: "space-between"
      }
    },
    MuiExpansionPanelSummary: {
      content: {
        color: defaultTheme.palette.primary.contrastText,
        fontFamily: "Alatsi"
      }
    },
    MuiExpansionPanelDetails: {
      root: {
        color: defaultTheme.palette.primary.contrastText,
        fontFamily: "Rubik"
      }
    },
    MuiFormControl: {
      root: {
        width: "100%"
      }
    },
    MuiFormLabel: {
      root: {
        color: defaultTheme.palette.primary.contrastText,
        fontFamily: "Alatsi"
      }
    },
    MuiInputBase: {
      root: {
        color: defaultTheme.palette.primary.contrastText
      }
    }
  }
});

//https://material-ui.com/customization/typography/#responsive-font-sizes
theme = responsiveFontSizes(theme);

export default theme;
