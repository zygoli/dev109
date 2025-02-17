function generateRhombus() {
    const height = parseInt(document.getElementById("height").value);
    const oddColor = document.getElementById("oddColor").value;
    const evenColor = document.getElementById("evenColor").value;
    const symbol = document.getElementById("symbol").value;
    let patternHTML = "";

    for (let i = 1; i <= height; i++) {
        patternHTML += " ".repeat(height - i);
        for (let j = 0; j < 2 * i - 1; j++) {
            const color = (j % 2 === 0) ? oddColor : evenColor;
            patternHTML += `<span style="color:${color};">${symbol}</span>`;
        }
        patternHTML += "<br>";
    }

    for (let i = height - 1; i >= 1; i--) {
        patternHTML += " ".repeat(height - i);
        for (let j = 0; j < 2 * i - 1; j++) {
            const color = (j % 2 === 0) ? oddColor : evenColor;
            patternHTML += `<span style="color:${color};">${symbol}</span>`;
        }
        patternHTML += "<br>";
    }

    document.getElementById("pattern").innerHTML = patternHTML;
}
