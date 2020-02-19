import React from 'react';

// Component: All City's Information: Total Population, Most North City, Most South City
//Uses state.totalPopulation from MyCities.js >>> props.totalPopulation
//Uses state.mostNorthern from MyCities.js
//Uses state.mostSouthern from MyCities.js
class CityInfoDisplay extends React.Component {

    render() {
        return (
            <div>
                <div className="city-calculations-display">
                    
                    <span className="city-container-right-header city-display-header">Total People Conquered:</span>
                    <p className="container-right-info">{this.props.totalPopulation}</p>
                </div>
                <div className="city-calculations-display">
                    <span className="city-container-right-header city-display-header">Most Northern City:</span>
                    <p className="container-right-info">{this.props.mostNorthern}</p>
                </div>
                <div className="city-calculations-display">
                    <span className="city-container-right-header city-display-header">Most Southern City:</span>
                    <p className="container-right-info">{this.props.mostSouthern}</p>
                </div>
            </div>

        )
    }
}

export default CityInfoDisplay;