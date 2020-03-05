//takes the theme object, desired typography scaling(string), and breakpoint
//gets media sizes, return px value for style (ie. height/width)
const remToPx = (size, fs) => {
  //size = number and string: "4.132rem"
  //fs = htmlpxsize
  let value = size
    .split("")
    .slice(0, size.length - 3)
    .join("");
  //get rem conversion to px
  let pxRatio = fs / 16;
  return value * 16 * pxRatio;
};

export default function mediaToPx(theme, typ, bp) {
  const fs = theme.typography.htmlFontSize;
  //typography object to get media queries

  let xs = remToPx(theme.typography[typ].fontSize, fs);
  let small = "@media (min-width:600px)";
  let medium = "@media (min-width:960px)";
  let large = "@media (min-width:1280px)";
  const sm = remToPx(theme.typography[typ][small].fontSize, fs);
  const md = remToPx(theme.typography[typ][medium].fontSize, fs);
  const lg = remToPx(theme.typography[typ][large].fontSize, fs);

  const sizes = [xs, sm, md, lg];

  const breakpoints = ["xs", "sm", "md", "lg"];

  return sizes[breakpoints.indexOf(bp)];

  // [theme.breakpoints.down("sm")]: {
  //   width: "16px",
  //   height: "16px"
  // },
  // [theme.breakpoints.up("md")]: {
  //   width: mediaToPx(theme, "h1")
  // },
  // [theme.breakpoints.up("lg")]: {
  //   width: "100px",
  //   height: "100px"
  // }
}
