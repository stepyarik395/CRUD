import React from 'react';
import useStyles from './MainStyles';
import { TextField, Container, Grid, Fab, Button } from '@material-ui/core';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';

const Main = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <h1>CRUD</h1>
      <Grid
        className={classes.root}
        noValidate
        container
        direction="column"
        autoComplete="off"
        alignItems="center"
      >
        <TextField label="nickname​" />
        <TextField label="real_name​" />
        <TextField label="origin_description​" />
        <TextField label="superpowers" />
        <TextField label="catch_phrase​" />
        <Button classes={{ root: classes.buttoncreate }} variant="outlined">
          Create
        </Button>
        <input
          accept="image/*"
          className={classes.input}
          multiple
          type="file"
          id="contained-button-file"
        />
        <label className={classes.label} htmlFor="contained-button-file">
          <Fab component="span" className={classes.button}>
            <AddPhotoAlternateIcon />
          </Fab>
        </label>
      </Grid>
    </Container>
  );
};

export default Main;
