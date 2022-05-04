"use strict";
let firstColor = 0;
function componentToLongHex(c) {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
function componentToShortHex(c) {
    let hex = c.toString(16);
    return hex.length != 1 ? (hex = hex[0]) : hex;
}
function rgbToLongHex(r, g, b) {
    return ("#" + componentToLongHex(r) + componentToLongHex(g) + componentToLongHex(b));
}
function rgbToShortHex(r, g, b) {
    return ("#" +
        componentToShortHex(r) +
        componentToShortHex(g) +
        componentToShortHex(b));
}
class Color {
    constructor(r = 0, g = 0, b = 0, hexString = "000000", opacity = 0) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.hex = hexString;
        this.opacity = opacity;
    }
    getColorRGB() {
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
        }
        else
            this.getColor = "rgb(" + this.r + "," + this.g + "," + this.b + ")";
        console.log(this.getColor);
    }
    getColorShortHex() {
        this.getColor = rgbToShortHex(this.r, this.g, this.b);
        console.log(this.getColor);
    }
    getColorLongHex() {
        this.getColor = rgbToLongHex(this.r, this.g, this.b);
        console.log(this.getColor);
    }
    getHex() {
        if (this.opacity > 0) {
            this.getColor = "#" + this.hex + "," + this.opacity;
        }
        else
            this.getColor = "#" + this.hex;
        console.log(this.getColor);
    }
}
firstColor = new Color();
firstColor.getColorRGB();
// firstColor.getColorShortHex();
// firstColor.getColorLongHex();
firstColor.getHex();
