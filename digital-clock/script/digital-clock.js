let timeHTML = "";
setInterval(() => {
    const hours = dayjs().hour();
    const minutes = dayjs().minute();
    const seconds = dayjs().second();

    const stringHours = String(hours).padStart(2, "0");
    const stringSeconds = String(seconds).padStart(2, "0");
    const stringMinutes = String(minutes).padStart(2, "0");
    timeHTML = `
            <div><span class='hours'>${stringHours}</span>:<span class='minutes'>${stringMinutes}</span>:<span class='seconds'>${stringSeconds}s</span></div>`;
    document.querySelector(".time").innerHTML = timeHTML;
}, 1000);
