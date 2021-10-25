// @flow

import axios from 'axios';
import {baseURL} from './config';

export const api = axios.create({
  baseURL: baseURL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
});
