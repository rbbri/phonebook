import React, { Component } from 'react';
import ContactList from './ContactList.js'
import {shallow} from 'enzyme'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
configure({ adapter: new Adapter() });

describe('contactList container', () => {
  test('renders without crashing', () => {
    shallow(<ContactList />);
  });

  test('renders correctly', () => {
    let wrapper = shallow(<ContactList />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('#changeOrder', () => {
  test('it calls sortAscending when ascending is selected', () => {
    let sortAscending = sinon.stub();
    let wrapper = shallow(<ContactList />);
    let dropdown = wrapper.find('select');
    dropdown.simulate('change', {target: {value: 'Ascending'}})
    expect(sortAscending).toHaveBeenCalled
  })
  test('it calls sortDescending when descending is selected', () => {
    let sortDescending = sinon.stub();
    let wrapper = shallow(<ContactList />);
    let dropdown = wrapper.find('select');
    dropdown.simulate('change', {target: {value: 'Ascending'}})
    expect(sortDescending).toHaveBeenCalled
  })
})
