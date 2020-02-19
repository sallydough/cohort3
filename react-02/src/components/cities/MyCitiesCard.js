import React from 'react';
import syncFunctions from './cities-api-functions.js';

class CityCard extends React.Component {

    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleMovedIn = this.handleMovedIn.bind(this);
        this.handleMovedOut = this.handleMovedOut.bind(this);
        this.state = {
            changePopulation: "",
        }
    }

    //
    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    //goes into cities array, locates specific city using index, 
    //carries out movedIn function with input value of 'this.state.changePopulation'
    //updates population value using populationSync function
    //resets to empty input field
    //loops through cityChecker for new Info to display (north/southern/total pop)
    handleMovedIn(i) {
        if (this.state.changePopulation < 0) {
            alert("Please enter a number greater than zero.");
        }
        else {
            this.props.cities[i].movedIn(Number(this.state.changePopulation));
            syncFunctions.populationSync(this.props.cities[i]);
        }
        this.setState({
            changePopulation: "",
        })
        this.props.cityChecker(this.props.cities);
    }

    //goes into cities array, locates specific city using index, 
    //carries out movedOut function with input value of 'this.state.changePopulation'
    //updates population value using populationSync function
    //resets to empty input field
    //loops through cityChecker for new Info to display (north/southern/total pop)
    handleMovedOut(i) {
        if (this.state.changePopulation < 0 || this.state.changePopulation >= this.props.population) {
            alert("Please enter a number greater than zero or less than current population.");
        }
        else {
            this.props.cities[i].movedOut(Number(this.state.changePopulation));
            syncFunctions.populationSync(this.props.cities[i]);
        }
        this.setState({
            changePopulation: "",
        })
        this.props.cityChecker(this.props.cities);
    }

    //returns city card with name, longitude, latitude, population, an input field, and 3 buttons
    //input field: number entered into input field will change the current state from  "" to the entered number using handleOnChange function
    //movedIn Button: on click = carry out handleMovedIn function
    //movedOut Button: on click = carry out handleMovedOut function
    //Delete Button: on click = carry out handleDelete function (in MyCities.js)
    render() {
        return (
            <div className={`city-card ` + (this.props.selectedCity === this.props.cities[this.props.index] ? "active-city-card" : null)} onClick={(event) => this.props.cityInfoSelector(event, this.props.index)}>
                <label className="city-name city-card-elements">{this.props.name}</label>
                <label className="city-latitude city-card-elements">{(this.props.latitude).toFixed(2)}</label>
                <label className="city-longitude city-card-elements">{(this.props.longitude).toFixed(2)}</label>
                <label className="city-population city-card-elements">{(this.props.population).toFixed(0)}</label>
                <input
                    type="number"
                    name="changePopulation"
                    placeholder="pop."
                    value={this.state.changePopulation}
                    className="city-population-input city-card-elements"
                    onChange={this.handleOnChange} />
                <input
                    type="button"
                    value="Moved In"
                    className="city-button city-card-elements"
                    onClick={() => this.handleMovedIn(this.props.index)} />
                <input
                    type="button"
                    value="Moved Out"
                    className="city-button city-card-elements"
                    onClick={() => this.handleMovedOut(this.props.index)} />
                <input
                    type="button"
                    value="Delete City"
                    className="city-button city-card-elements"
                    onClick={() => this.props.handleDelete(this.props.index)} />
            </div>
        )
    }
}

export default CityCard;