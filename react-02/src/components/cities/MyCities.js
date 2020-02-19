import React from 'react';
import { ThemeContext } from '../theme-context.js';
import CityCreateDisplay from './MyCitiesCreateDisplay.js';
import CityCardsList from './MyCitiesCardsList.js';
import CityFactsDisplay from './MyCitiesFactsDisplay.js';
import CityInfoDisplay from './MyCitiesInfoDisplay.js';
import { Community } from './cities.js';
import syncFunctions from './cities-api-functions.js';
import './cities-index.css';


//MOTHERBOARD OF COMMUNITIES WEBSITE


class Cities extends React.Component {

    constructor(props) {
        super(props);
        this.citiesList = new Community('Cities Controller');
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            dataLoad: false,
            cityName: "",
            latitude: "",
            longitude: "",
            population: "",
            mostNorthern: "",
            mostSouthern: "",
            totalPopulation: "",
            showCity: "",
            howBigCity: "",
            whichSphereCity: "",
            selectedCity: "",
        };
    }

    componentDidMount = async () => {
        if (this.state.dataLoad === false) {
            await syncFunctions.dataSync(this.citiesList.cities);
            this.setState({
                dataLoad: true,
            });
            this.counterSync(this.citiesList);
            this.cityChecker(this.citiesList.cities);
        }
        else return;
    }

    counterSync = (controller) => {
        let arrayKeys = controller.cities.map(city => city.key);
        if (arrayKeys.length > 0) {
            let highestKey = Math.max(...arrayKeys);
            controller.counter = highestKey;
        } else controller.counter = 0;
    }

    // name/number written inside of each input is set as the new value
    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    // calls createCity function onto input info and creates a new-city object & pushes it into cities array
    handleSubmit = (event) => {
        if (this.state.cityName === "") {
            alert("Name required. Please re-enter.");
        }
        else if (this.state.latitude < -90 || this.state.latitude > 90) {
            alert("Latitude must be between -90 and 90 degrees. Please re-enter.");
        }
        else if (this.state.longitude < -180 || this.state.longitude > 180) {
            alert("Longitude must be between -180 and 180 degrees. Please re-enter.");
        }
        else if (this.state.population < 0) {
            alert("Population must be greater than or equal to 0. Please re-enter.");
        }
        else {
            const newCity = this.citiesList.createCity(this.state.cityName, this.state.latitude, this.state.longitude, this.state.population);
            syncFunctions.createCitySync(newCity);
        }
        //resets input values' state to empty
        this.setState({
            cityName: "",
            latitude: "",
            longitude: "",
            population: "",
        })
        //loops through new array and updates most north/south & total population using cityChecker function
        this.cityChecker(this.citiesList.cities);
        event.preventDefault();
    }

    //used in MyCitiesCards.js
    //targets specific city to delete using index, deletes it using deleteCity function, runs cityChecker to generate and update info, resets state to empty
    handleDelete = (i) => {
        syncFunctions.deleteCitySync(this.citiesList.cities[i]);
        this.citiesList.deleteCity(this.citiesList.cities, i);
        this.cityChecker(this.citiesList.cities);
        this.setState({
            selectedCity: "",
            showCity: "",
            howBigCity: "",
            whichSphereCity: "",
        })
    }

    //loops through array, targets most north, most south, total population and sets as state 
    cityChecker = (array) => {
        if (array.length > 0) {
            this.setState({
                mostNorthern: this.citiesList.getMostNorthern(array),
                mostSouthern: this.citiesList.getMostSouthern(array),
                totalPopulation: this.citiesList.getPopulation(array),
            });
        }
        else {
            this.setState({
                mostNorthern: "",
                mostSouthern: "",
                totalPopulation: "",
            });
        }
    }

    //click anywhere on a city card, recieve city statistics on bottom of page:
    //event.target card, shows info statistics' state by looping through 4 functions
    //select city index, show(), howbig() , whichSphere()
    cityInfoSelector = (event, i) => {
        if (event.target.value !== "Delete City") {
            this.setState({
                selectedCity: this.citiesList.cities[i],
                showCity: this.citiesList.cities[i].show(),
                howBigCity: this.citiesList.cities[i].howBig(),
                whichSphereCity: this.citiesList.whichSphere(this.citiesList.cities[i]),
            })
        }
    }

    //RETURNS WHOLE PAGE WITH 4 COMPONENTS WITH NECESSARY PROPS TO BE PASSED INTO IT
    //CREATE CITY || CARD LIST || FACTS DISPLAY || INFO DISPLAY
    render() {
        return (
            <ThemeContext.Consumer>
                {(theme) => (
                    <div className="city-wrapper" style={{ backgroundColor: theme.background, color: theme.color }}>
                        <div className="city-container-left">
                            <span className="city-display-header">Add Conquered City</span>
                            <CityCreateDisplay
                                handleSubmit={this.handleSubmit}
                                handleOnChange={this.handleOnChange}
                                cityName={this.state.cityName}
                                latitude={this.state.latitude}
                                longitude={this.state.longitude}
                                population={this.state.population}
                            />
                        </div>
                        <div className="city-container-middle-top">
                            <div className="city-cards-display-headers">
                                <span className="city-headers">City</span>
                                <span className="city-headers">Lat.</span>
                                <span className="city-headers">Long.</span>
                                <span className="city-headers">Pop.</span>
                            </div>
                            <div>
                                <CityCardsList
                                    cities={this.citiesList.cities}
                                    handleDelete={this.handleDelete}
                                    cityChecker={this.cityChecker}
                                    cityInfoSelector={this.cityInfoSelector}
                                    selectedCity={this.state.selectedCity}
                                />
                            </div>
                        </div>
                        <div className="city-container-middle-bottom">
                            <CityFactsDisplay
                                showCity={this.state.showCity}
                                howBigCity={this.state.howBigCity}
                                whichSphereCity={this.state.whichSphereCity}
                            />
                        </div>
                        <div className="city-container-right">
                            <CityInfoDisplay
                                mostNorthern={this.state.mostNorthern}
                                mostSouthern={this.state.mostSouthern}
                                totalPopulation={this.state.totalPopulation}
                            />
                        </div>
                    </div>
                )}
            </ThemeContext.Consumer>
        );
    }
}

export default Cities;