const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7ff1096141c478b1f2fdb44511cd5c1e&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
            const condition = body.current.weather_descriptions[0]
            const temperature = body.current.temperature
            const feelslike = body.current.feelslike
            const precipitation = body.current.precip
            const windSpeed = body.current.wind_speed
            const windDirection = body.current.wind_dir
            const humidity = body.current.humidity
            const visibility = body.current.visibility
            callback(undefined, condition + '. It is currently ' + temperature + ' degrees outside and feels like ' + feelslike + ' degrees. There is ' + precipitation + '% chance of rain. Wind is blowing at ' + windSpeed + 'kmph in ' + windDirection + ' direction. Humidity is ' + humidity + '% and Visibility is ' + visibility + 'km.')
        }
    })
}

module.exports = forecast