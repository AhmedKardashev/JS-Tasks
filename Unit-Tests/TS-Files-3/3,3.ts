let firstColor: any = 0;

export function componentToLongHex(c: number): string {
  let hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

export function componentToShortHex(c: number): string {
  let hex: string = c.toString(16);
  return hex.length != 1 ? (hex = hex[0]) : hex;
}

export function rgbToLongHex(r: number, g: number, b: number): string {
  return (
    "#" + componentToLongHex(r) + componentToLongHex(g) + componentToLongHex(b)
  );
}

export function rgbToShortHex(r: number, g: number, b): string {
  return (
    "#" +
    componentToShortHex(r) +
    componentToShortHex(g) +
    componentToShortHex(b)
  );
}

export class Color {
  r: number;
  g: number;
  b: number;
  hex: number | string;
  opacity: number;
  getColor: any;
  constructor(r = 0, g = 0, b = 0, hexString = "000000", opacity = 0) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.hex = hexString;
    this.opacity = opacity;
  }

  getColorRGB(): void {
    if (this.opacity > 0) {
      this.getColor =
        "rgb(" +
        this.r +
        "," +
        this.g +
        "," +
        this.b +
        "," +
        this.opacity +
        ")";
    } else this.getColor = "rgb(" + this.r + "," + this.g + "," + this.b + ")";
    console.log(this.getColor);
  }

  getColorShortHex(): void {
    this.getColor = rgbToShortHex(this.r, this.g, this.b);
    console.log(this.getColor);
  }

  getColorLongHex(): void {
    this.getColor = rgbToLongHex(this.r, this.g, this.b);
    console.log(this.getColor);
  }

  getHex(): void {
    if (this.opacity > 0) {
      this.getColor = "#" + this.hex + "," + this.opacity;
    } else this.getColor = "#" + this.hex;

    console.log(this.getColor);
  }
}
firstColor = new Color();
firstColor.getColorRGB();
// firstColor.getColorShortHex();
// firstColor.getColorLongHex();
firstColor.getHex();
