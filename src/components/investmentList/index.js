import React from 'react';
import InvestmentListItem from '../investmentListItem'
import Paper from '@material-ui/core/Paper';

const InvestmentList = ({title, type, items}) => {
    const listItems = items ? items.filter((item) => item.type === type) : [];

    return (
        <Paper className={`paper`}>
            <h3>{title}</h3>
            <ul>
                {
                    listItems.map((listItem) => (
                        <InvestmentListItem key={listItem._id} item={listItem} />
                    ))
                }
            </ul>
        </Paper>
    )
}

export default InvestmentList;

