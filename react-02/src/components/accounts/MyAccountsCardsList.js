import React from 'react';
import AccountCard from './MyAccountsCard.js'


//Component: Account Cards List:
//loops through array of account objects and creates a physcial card for them to be pushed into the Accounts List
class AccountCardsList extends React.Component {

    render() {
        const cardList = this.props.listArray.map((account, i) => {
            return <AccountCard
                listArray={this.props.listArray}
                handleDelete={this.props.handleDelete}
                balanceChecker={this.props.balanceChecker}
                index={i}
                key={account.key}
                name={account.accountName}
                balance={account.startingBalance}
            />
        })

        return (
            <div className="account-display">
                {cardList}
            </div>
        )
    }
}

export default AccountCardsList;