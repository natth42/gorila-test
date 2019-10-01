import React from 'react';
import { useInvestmentDispatch, removeInvestment } from '../../context/investment-context';

const InvestmentListItem = ({item}) => {
    const dispatch = useInvestmentDispatch();
    const formatDate = (date) => new Date(date).toLocaleDateString();
    const deleItem = id => {
        removeInvestment(dispatch, id);
    }

    return (
        <>
            <div className="flex-aligment" key={item._id}>
                <ol> [{formatDate(item.date)}] R${item.value}</ol>
                <button onClick={() => deleItem(item._id)}>X</button>
            </div>
        </>
    )
}

export default InvestmentListItem;

