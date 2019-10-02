import React from 'react';
import { useInvestmentDispatch, removeInvestment } from '../../context/investment-context';
import {formatDate} from '../../utils/formatValues';

const InvestmentListItem = ({item}) => {
    const dispatch = useInvestmentDispatch();
    const deleItem = id => {
        removeInvestment(dispatch, id);
    }

    return (
        <>
            <div className="flex-aligment">
                <ol> [{formatDate(item.date)}] R${item.value}</ol>
                <button onClick={() => deleItem(item._id)}>X</button>
            </div>
        </>
    )
}

export default InvestmentListItem;

