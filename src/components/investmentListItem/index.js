import React from 'react';
import { useInvestmentDispatch, removeInvestment } from '../../context/investment-context';
import {formatDate} from '../../utils/formatValues';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        height: '3rem',
        width: '3rem',
    },
}));

const InvestmentListItem = ({item}) => {
    const dispatch = useInvestmentDispatch();
    const classes = useStyles();
    const deleItem = id => {
        removeInvestment(dispatch, id);
    }

    return (
        <>
            <div className="flex-aligment">
                <ol style={{display: 'flex'}}> 
                    <div className="date-list-item">[{formatDate(item.date)}]</div>
                    <div className="value-list-item">R${item.value}</div>
                </ol>
                <IconButton className={classes.button} aria-label="delete" onClick={() => deleItem(item._id)}>
                    <DeleteIcon />
                </IconButton>
            </div>
        </>
    )
}

export default InvestmentListItem;

