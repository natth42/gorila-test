import React from 'react';
import InvestmentListItem from '../investmentListItem'

const InvestmentList = ({title, type, items}) => {
    const listItems = items ? items.filter((item) => item.type === type) : [];

    return (
        <>
            <h3>{title}</h3>
            <ul>
                {
                    listItems.map((listItem) => (
                        <InvestmentListItem key={listItem._id} item={listItem} />
                    ))
                }
            </ul>
        </>
    )
}

export default InvestmentList;

