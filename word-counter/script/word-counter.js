document.getElementById("input-area").addEventListener("input", () => {
    const text = document.getElementById("input-area").value.trim();
    let words = text.match(/\b\w+\b/g);
    let wordCount = words ? words.length : 0;

    document.getElementById(
        "word-count"
    ).innerHTML = `Word Count: ${wordCount}`;
    document.getElementById(
        "char-count"
    ).innerHTML = `Character Count: ${text.length}`;
});
