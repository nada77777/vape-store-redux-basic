import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import InputStore from './components/input_store/input_store';
import DataDownload from './service/service';
import { Provider } from 'react-redux';
import store from './components/redux/store';

import { firebase } from './service/firebase';
import DataLoader from './service/data';

const database = new DataLoader(firebase);


const Data = new DataDownload();
const InputBtn = (props) => <InputStore {...props} />



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App InputBtn={InputBtn} Data={Data} database={database} />
    </Provider>
  </React.StrictMode>
);


