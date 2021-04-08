
const dogURL = 'https://dog.ceo/api/breeds/image/random';
const dogPic = document.querySelector("#dog")

document.querySelector("#callDog").addEventListener('click', () => {
    fetch(dogURL)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            dogPic.src = data.message;
        })
})

document.querySelector("#searchWeather").addEventListener('click', () => {
    const city = document.querySelector("#city").value;
    const weatherURL = `https://goweather.herokuapp.com/weather/${city}`

    fetch(weatherURL)
        .then((res) => res.json())
        .then((data) => {
            if (data.message === "NOT_FOUND"){
                alert('Could not locate city')
                return;
            }
            let temp = data.temperature;
            let wind = data.wind;
            let description = data.description;

            let element = `<p>The temperature in ${city} is ${temp}.</p>
            <p>The wind speed in ${city} is currently ${wind}.</p>
            <p>It is currently ${description} in ${city} today.</p>`;

            document.querySelector("#app").innerHTML = element;



        })
})