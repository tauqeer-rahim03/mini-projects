document.getElementById("generate-button").addEventListener("click", () => {
    const length = document.getElementById("input-length").value;
    document.getElementById("password").innerHTML = createRandomString(length);
});

document.getElementById("copy-button").addEventListener("click", () => {
    var copyText = document.getElementById("password");
    navigator.clipboard.writeText(copyText.innerHTML);
});

function createRandomString(length) {
    const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}
