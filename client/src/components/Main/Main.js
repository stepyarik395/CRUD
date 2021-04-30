import React from 'react';
import useStyles from './MainStyles';
import { useState } from 'react';
import { TextField, Container, Grid, Fab, Button } from '@material-ui/core';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';

const Main = () => {
  const classes = useStyles();
  const [nickname, setNickname] = useState('');
  const [realName, setRealName] = useState('');
  const [superPowers, setSuperpowers] = useState('');
  const [originDescription, setOriginDescription] = useState('');
  const [catchPhrase, setCatchPhrase] = useState('');
  const [heroImage, setHeroImage] = useState('');

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
        <TextField
          value={nickname}
          onChange={(e) => {
            setNickname(e.target.value);
          }}
          label="nickname​"
        />
        <TextField
          value={realName}
          onChange={(e) => {
            setRealName(e.target.value);
          }}
          label="real_name​"
        />
        <TextField
          value={originDescription}
          onChange={(e) => {
            setOriginDescription(e.target.value);
          }}
          label="origin_description​"
        />
        <TextField
          value={superPowers}
          onChange={(e) => {
            setSuperpowers(e.target.value);
          }}
          label="superpowers"
        />
        <TextField
          value={catchPhrase}
          onChange={(e) => {
            setCatchPhrase(e.target.value);
          }}
          label="catch_phrase​"
        />
        <input
          accept="image/*"
          className={classes.input}
          multiple
          onChange={(e) => {
            setHeroImage(e.target.files[0]);
          }}
          type="file"
          id="contained-button-file"
        />
        <label className={classes.label} htmlFor="contained-button-file">
          <Fab component="span" className={classes.button}>
            <AddPhotoAlternateIcon />
          </Fab>
        </label>
        <Button classes={{ root: classes.createbutton }} variant="outlined">
          Create
        </Button>
      </Grid>
    </Container>
  );
};

export default Main;
