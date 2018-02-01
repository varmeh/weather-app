import React, { Component } from 'react'
import { connect } from 'react-redux'

import Chart from '../components/Chart'
import GoogleMap from '../components/GoogleMap'

class WeatherList extends Component {
    renderWeather(cityData) {
        const temps = [], pressure = [], humidity = []
        // Iterate through data to create individual arrays for temp, humidity & pressure.
        cityData.list.forEach(element => {
            temps.push(element.main.temp)
            pressure.push(element.main.pressure)
            humidity.push(element.main.humidity)
        })

        const { lat, lon } = cityData.city.coord
        return (
            <tr key={cityData.city.name}>
                <td><GoogleMap lat={lat} lon={lon} /></td>
                <td><Chart data={temps} color="red" /></td>
                <td><Chart data={pressure} color="blue" /></td>    
                <td><Chart data={humidity} color="green" /></td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>             
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = ({ weather }) => ({ weather })

export default connect(mapStateToProps)(WeatherList)
