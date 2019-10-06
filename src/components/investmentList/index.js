import React from 'react';
import InvestmentListItem from '../investmentListItem';
import Paper from '@material-ui/core/Paper';
import Skeleton from '@material-ui/lab/Skeleton';

const InvestmentList = ({title, type, items}) => {
    const listItems = items ? items.filter((item) => item.type === type) : [];

    return (
        <>
        {
            listItems && listItems.length > 0
            ?
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
            :
            <Skeleton height="200px" />
        }
        </>
    )
}

export default InvestmentList;

