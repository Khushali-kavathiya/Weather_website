var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add')
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')

apik="7715e3f9b4e0b5b79e97224ed02fcb54"

function convertion(val)
{
    return (val - 273).toFixed(3)
}

btn.addEventListener('click',function()
{
    fetch('https://api.openweathermap.org/data/2.5/wether?q='+inputvalue.value+'&appid='+apik).then(res => res.json())

    .then(data =>
        {
            var nameval = data['name']
            var descrip = data['wether']['0']['description']
            var tempature = data['main']['temp']
            var wndspeed = data['wind']['speed']

            city.innerHTML = 'Wether of <span>${nameval}<span>'
            temp.innerHTML = 'Tempature: <span>${convertion(tempature)} C</span>'
            description.innerHTML = 'sky Conditions: <span>${descrip}<span>'
            wind.innerHTML = 'Wind speed: <span>${wndspeed} km/h<span>'
        }
        )

        .catch(err => alert('you entered wrong city name'))
}
)
