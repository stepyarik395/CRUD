import React from 'react';
import useStyles from './MainStyles';
import { useState } from 'react';
import { TextField, Container, Grid, Fab, Button } from '@material-ui/core';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import axios from 'axios';

const Main = () => {
  const classes = useStyles();
  const [mainObj, setMainObj] = useState({
    nickName: '',
    realName: '',
    superPowers: '',
    originDescription: '',
    catchPhrase: '',
  });
  const [heroImage, setHeroImage] = useState('');
  const createHero = () => {
    axios({
      method: 'post',
      url: 'http://localhost:3001/api/create',
      data: {
        // nickName: nickName,
        // realName: realName,
        // superPowers: superPowers,
        // originDescription: originDescription,
        // catchPhrase: catchPhrase,
        // heroImage: heroImage.name,
      },
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  };

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
          name="nickName"
          value={mainObj.nickName}
          onChange={(e) => {
            setMainObj((mainObj) => {
              return { ...mainObj, nickName: e.target.value };
            });
          }}
          label="nickName​"
        />
        <TextField
          name="realName"
          value={mainObj.realName}
          onChange={(e) => {
            setMainObj((mainObj) => {
              return { ...mainObj, realName: e.target.value };
            });
          }}
          label="real_name​"
        />
        <TextField
          name="superPowers"
          value={mainObj.superPowers}
          onChange={(e) => {
            setMainObj((mainObj) => {
              return { ...mainObj, superPowers: e.target.value };
            });
          }}
          label="superpowers"
        />
        <TextField
          name="originDescription"
          value={mainObj.originDescription}
          onChange={(e) => {
            setMainObj((mainObj) => {
              return { ...mainObj, originDescription: e.target.value };
            });
          }}
          label="origin_description​"
        />
        <TextField
          name="catchPhrase"
          value={mainObj.catchPhrase}
          onChange={(e) => {
            setMainObj((mainObj) => {
              return { ...mainObj, catchPhrase: e.target.value };
            });
          }}
          label="catch_phrase​"
        />
        <input
          name="file"
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
        <Button
          onClick={createHero}
          classes={{ root: classes.createbutton }}
          variant="outlined"
        >
          Create
        </Button>
      </Grid>
    </Container>
  );
};

export default Main;
