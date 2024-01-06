// doctors.stories.js

import React from 'react';
import Doctors from '../components/Doctors.jsx';
import '../app/globals.css';

export default {
  title: 'Components/Doctors',
  component: Doctors,
};

export const Default = () => <Doctors />; // Historia por defecto
