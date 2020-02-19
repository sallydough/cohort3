import React from 'react';


//Component: City Statistics - returns selected city's info (city name, population, north/south sphere)
//Uses state.showCity from MyCities.js
//Uses state.howBigCity from MyCities.js
//Uses state.whichSphereCity from MyCities.js

class CityFactsDisplay extends React.Component {

    render() {
        return (
            <div className="city-facts-display">
                City Statistics (click for more information):
                <p className="city-facts-text">{this.props.showCity}</p>
                <p className="city-facts-text">{this.props.howBigCity}</p>
                <p className="city-facts-text" >{this.props.whichSphereCity}</p>
            </div>
        )
    }
}

export default CityFactsDisplay;