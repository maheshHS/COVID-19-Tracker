import React, { useState } from 'react';
import Card from './Card/Card'
import classes from './CardList.module.css'

const CardList = props => {

  const [SummaryState] = useState({
    Active: props.summary.total,
    Deaths: props.summary.deaths,
    Inactive: props.summary.discharged
  });

  return(
    <div className={classes.CardList}>
          <Card name="Active Cases" lastRefreshed={props.lastUpdate} val={SummaryState.Active} styls="Active" txtTyp="primary"/>
          <Card name="Recovered Cases" lastRefreshed={props.lastUpdate} val={SummaryState.Inactive} styls="Discharged" txtTyp="textSecondary"/>
          <Card name="Deaths" lastRefreshed={props.lastUpdate} val={SummaryState.Deaths} styls="Deaths" txtTyp="error"/>
    </div>
      );}

export default CardList;
