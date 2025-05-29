let city = "Bangalore";

async function loadPage() {
    const apiKey = "bd9bbf54fca117545f46f9b1f228b4cb";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    await fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            document.getElementById(
                "description"
            ).innerHTML = `its ${data.weather[0].description}`;

            const iconURL = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            document.getElementById("icon").src = iconURL;
            document.getElementById("temperature").innerHTML =
                Math.round(data.main.temp / 10) + "°C";
            document.getElementById("min-max").innerHTML = `${Math.round(
                data.main.temp_max / 10
            )}/${Math.round(data.main.temp_min / 10)} °C`;
        })
        .catch((error) => {
            document.getElementById("description").innerHTML =
                "Error loading weather data";
        });
}
loadPage();
document.getElementById("city-name").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        city = document.getElementById("city-name").value;
        document.ge;
        loadPage();

        return city;
    }
});
