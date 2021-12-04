import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Form from '../Form/Form';

import useStyles from './styles';

const Popup = ({ currentId, setCurrentId, active, closeForm }) => {
  const props = {
    active
  };

  const dispatch = useDispatch();
  const classes = useStyles(props);

  return (
    <div className={classes.popup}>
      <Form currentId={currentId} setCurrentId={setCurrentId} closeForm={closeForm} />
    </div>
  );
};

export default Popup;
