import React from 'react';

const InvestmentList = ({title, type, items}) => {
    const listItems = items ? items.filter((item) => item.type === type) : [];
    const formatDate = (date) => new Date(date).toLocaleDateString();
    return (
        <>
            <h3>{title}</h3>
            <ul>
                {
                    listItems.map((listItem) => (
                        <ol key={listItem._id}> [{formatDate(listItem.date)}] R${listItem.value}</ol>
                    ))
                }
            </ul>
        </>
    )
}

export default InvestmentList;

