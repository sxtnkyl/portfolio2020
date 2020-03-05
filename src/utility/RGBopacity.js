export default function RGBopacity(hex, opac) {
  var opacity = opac.toString();

  //color as rgb
  if (hex.charAt(0) !== "#") {
    var values = hex.split("");
    var insert = ", " + opacity + ")";
    values.splice(values.length - 1, 1, insert);
    return values.join("");
  }

  //color as hex value
  if (hex.charAt(0) === "#") {
    hex = hex.substr(1);

    let values = hex.split("");

    let r = parseInt(values[0].toString() + values[1].toString(), 16);
    let g = parseInt(values[2].toString() + values[3].toString(), 16);
    let b = parseInt(values[4].toString() + values[5].toString(), 16);

    return "rgb(" + r + "," + g + "," + b + "," + opacity + ")";
  }
}
