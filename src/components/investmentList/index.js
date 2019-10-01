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
                        <InvestmentListItem item={listItem} />
                    ))
                }
            </ul>
        </>
    )
}

export default InvestmentList;

