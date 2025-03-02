const colorPicker = document.querySelector(".color-picker");
const targetElement = document.querySelector(".text");

function getLuminance(hexColor) {
    // Remove the # if present
    hexColor = hexColor.replace("#", "");

    // Convert to RGB
    const r = parseInt(hexColor.substr(0, 2), 16);
    const g = parseInt(hexColor.substr(2, 2), 16);
    const b = parseInt(hexColor.substr(4, 2), 16);

    // Calculate luminance (perceived brightness)
    // Using relative luminance formula
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
}

function getContrastColor(hexColor) {
    // If luminance is high (bright background), return black text
    // If luminance is low (dark background), return white text
    return getLuminance(hexColor) > 0.5 ? "#000000" : "#ffffff";
}

colorPicker.addEventListener("input", function () {
    const bgColor = this.value;
    document.body.style.backgroundColor = bgColor;
    targetElement.style.color = getContrastColor(bgColor);
    colorPicker.style.backgroundColor = bgColor;
});
