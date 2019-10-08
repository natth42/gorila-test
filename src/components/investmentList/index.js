import React from 'react';
import InvestmentListItem from '../investmentListItem';
import Paper from '@material-ui/core/Paper';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: '1rem',
    padding: '1rem'
  },
  list: {
    padding: '0rem'
  }
}));

const InvestmentList = ({ title, type, items }) => {
  const classes = useStyles();
  const listItems = items ? items.filter((item) => item.type === type) : [];

  return (
    <>
      {
        listItems && listItems.length > 0
          ?
          <Paper className={classes.paper}>
            <Typography variant="h6">{title}</Typography>
            <ul className={classes.list}>
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

