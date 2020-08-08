import React from 'react';
import axios from 'axios';
import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

const defaults = {
  baseUrl: 'http://localhost:3000',
  headers: ()=>({
    'content-type': 'application/json',
  })
};

