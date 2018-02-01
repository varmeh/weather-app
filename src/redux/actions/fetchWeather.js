import types from './types'
import axios from 'axios'

const API_KEY = 'e2f48852717817b31a8c675f628e432d'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const fetchWeather = (city) => {
    const url = `${ROOT_URL}&q=${city},us`
    const request = axios.get(url)

    return dispatch => {
        request.then(response => dispatch({
            type: types.FETCH_WEATHER,
            payload: response
        }))
    }
}
