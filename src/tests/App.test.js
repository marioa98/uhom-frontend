import React from 'react';
import { shallow } from "enzyme"
import App from '../App';
import "./config"

it('renders <App/>', () => {
  shallow(<App/>);
});
