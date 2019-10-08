import React from 'react';
import { useInvestmentDispatch, removeInvestment } from '../../context/investment-context';
import { formatDate } from '../../utils/formatValues';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  align: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottom: '1px #e4e5ef solid',
    height: '4rem',
  },
  button: {
    margin: theme.spacing(1),
    height: '3rem',
    width: '3rem',
  },
  date: {
    color: '#888E8E',
    marginRight: '0.5rem'
  },
  itemLabel: {
    padding: '0rem',
    display: 'flex'
  }
}));

const InvestmentListItem = ({ item }) => {
  const dispatch = useInvestmentDispatch();
  const classes = useStyles();
  const deleItem = id => {
    removeInvestment(dispatch, id);
  }

  return (
    <>
      <div className={classes.align}>
        <ol className={classes.itemLabel}>
          <div className={classes.date}>[{formatDate(item.date)}]</div>
          <div>R${item.value}</div>
        </ol>
        <IconButton className={classes.button} aria-label="delete" onClick={() => deleItem(item._id)}>
          <DeleteIcon />
        </IconButton>
      </div>
    </>
  )
}

export default InvestmentListItem;

