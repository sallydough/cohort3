import React from 'react';

class AccountCard extends React.Component {

    constructor() {
        super();
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleDeposit = this.handleDeposit.bind(this);
        this.handleWithdraw = this.handleWithdraw.bind(this);
        this.state = {
            changeBalance: "",
        }
    }

    //event listener of input field. whenever s/t is writtien in it, 
    //it will locate the name of the input and set the state to the written value
    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            //changingBalance: event.target.value (another way of seeing it)
        })
    }

    //goes in account array and looks for specific account via index
    //deposits amount into existing array
    //resets input to empty
    //prompts balanceChecker which gathers highest/lowest/total balance of array and updates infoDisplay
    handleDeposit(i) {
        if (this.state.changeBalance < 0.01) {
            alert("Please enter a number greater than zero!");
        }
        else {
            this.props.listArray[i].accountDeposit(Number(this.state.changeBalance));
        }
        this.setState({
            changeBalance: "",
        })
        this.props.balanceChecker(this.props.listArray);
    }

    //goes in account array and looks for specific account via index
    //withdraws amount into existing array
    //resets input to empty
    //prompts balanceChecker which gathers highest/lowest/total balance of array and updates infoDisplay
    handleWithdraw(i) {
        if (this.state.changeBalance < 0.01) {
            alert("Please enter a number greater than zero!");
        }
        else {
            this.props.listArray[i].accountWithdraw(Number(this.state.changeBalance));
        }
        this.setState({
            changeBalance: "",
        })
        this.props.balanceChecker(this.props.listArray);
    }

    //returns card with name & account balance, input field, 3 buttons (delete, withdraw, deposit)
    render() {
        return (
            <div className="account-card">
                <label className="account-name">
                    {this.props.name}
                </label>
                <label className="account-balance">
                    {`$${(this.props.balance).toFixed(2)}`}
                </label>
                <input
                    type="number"
                    name="changeBalance"
                    placeholder="amount"
                    value={this.state.changeBalance}
                    className="account-input"
                    onChange={this.handleOnChange} />
                <input
                    type="button"
                    value="Deposit"
                    className="account-button"
                    onClick={() => this.handleDeposit(this.props.index)} />
                <input
                    type="button"
                    value="Withdraw"
                    className="account-button"
                    onClick={() => this.handleWithdraw(this.props.index)} />
                <input
                    type="button"
                    value="Delete Account"
                    className="account-button"
                    onClick={() => this.props.handleDelete(this.props.index)} />
            </div>
        )
    }
}

export default AccountCard;