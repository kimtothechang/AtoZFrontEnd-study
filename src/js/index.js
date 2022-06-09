import { fetch } from 'whatwg-fetch';
import Nodes from './Nodes.js';

const $app = document.querySelector('.root');

const initialState = {
  nodes: [
    { id: 0, name: '김' },
    { id: 1, name: '창' },
    { id: 2, name: '현' },
  ],
};

const nodes = new Nodes({ $app, initialState });
