import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';



const styles = theme => ({
  card: {
    display: "flex",
    margin: "10px",
    width: "100%"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 151,
    height: 151
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  }
    
});

const HouseCard = ({ classes, theme, details}) => (
  <a href={details.link}>
    <Card className={classes.card} hr>
      <CardMedia
        className={classes.cover}
        image={details.image_src}
       // src={details.image_src}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="title">{details.title} </Typography>
          <Typography variant="subheading" color="textSecondary">
            {details.subtitle}
          </Typography>
          <Typography variant="h">{details.price}</Typography>
        </CardContent>
      </div>
    </Card>
  </a>
);

HouseCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(HouseCard);
