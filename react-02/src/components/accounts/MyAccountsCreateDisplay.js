  
import React from 'react';

class AccountCreateDisplay extends React.Component {

    render() {
        return (
            <div className="create-account-display">
                <form onSubmit={this.props.handleSubmit}>
                    <label className="create-account-text">Name:</label>
                    <input
                        type="text"
                        name="acctName"
                        placeholder="name"
                        className="create-account-name-input"
                        value={this.props.acctName}
                        onChange={this.props.handleOnChange} />
                    <label className="create-account-text">Opening Balance:</label>
                    <input
                        type="number"
                        name="acctBalance"
                        placeholder="balance"
                        className="create-account-balance-input"
                        value={this.props.acctBalance}
                        onChange={this.props.handleOnChange} />
                    <input
                        type="submit"
                        value="Submit"
                        className="account-button create-account-button" />
                </form>
            </div>
        )
    }
}

export default AccountCreateDisplay;