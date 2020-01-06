import React from 'react';
import { ThemeContext } from '../theme-context.js';
import './settings.css';

const ChangeSettingsDisplay = (props) => {

    const theme = React.useContext(ThemeContext);

    return (
        <div className="settings-wrapper" style={{ backgroundColor: theme.background, color: theme.color }}>
            <div className="settings-dropdown-wrapper">
                <label className="settings-background-text">Change Theme:</label>
                <select
                    className="settings-backround-dropdown"
                    onChange={(event) => props.handleSettingsChange(event)}
                >
                    <option value="default">Default</option>
                    <option value="dark">Black</option>
                </select>
            </div>
        </div>
    )
}

export default ChangeSettingsDisplay;