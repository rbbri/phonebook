import React, { Component } from 'react';
import ContactList from './ContactList.js'
import {shallow} from 'enzyme'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });



test('renders without crashing', () => {
  shallow(<ContactList />);
});

test('renders correctly', () => {
  let wrapper = shallow(<ContactList />);
  expect(wrapper).toMatchSnapshot();
});
