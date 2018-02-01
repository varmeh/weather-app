import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchWeather } from '../redux/actions'

class SearchBar extends Component {
    state = { 
        term: ''
    }

    onInputChange = event => {
        this.setState({ term: event.target.value })
    }

    onSubmitForm = event => {
        event.preventDefault()

        this.props.fetchWeather(this.state.term)
        this.setState({ term: '' })
    }

    render() {
        return (
            <form 
                onSubmit={this.onSubmitForm}
                className="input-group">
                <input 
                    placeholder="Get a 5 day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">SUBMIT</button>
                </span>
            </form>
        )
    }
}

const mapDispatchToProps = { fetchWeather }

export default connect(null, mapDispatchToProps)(SearchBar)
