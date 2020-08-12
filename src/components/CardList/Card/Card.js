import React from 'react';
import { Card, CardContent, Typography} from '@material-ui/core';
import classes from './Card.module.css';
import CountUp from 'react-countup'

const card = (props) => {

  return (
    <Card className={`${classes.Card} ${classes[props.styls]}`} elevation={4}>
      <CardContent>
        <Typography gutterBottom>
          Total {props.name}
        </Typography>
        <Typography gutterBottom color={props.txtTyp}>
          <CountUp
            start={0}
            end={props.val}
            />
        </Typography>
        <Typography gutterBottom  variant="body2">
          {new Date(props.lastRefreshed).toDateString()}
        </Typography>
        <Typography gutterBottom variant="caption" component="p">
          Official Source - The Ministry of Health and Family Welfare
        </Typography>
      </CardContent>
      </Card>
  );
}

export default card;
