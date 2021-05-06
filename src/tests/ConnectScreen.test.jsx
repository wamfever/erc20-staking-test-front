import ConnectScreen from '../screens/Connect/ConnectScreen';
import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, mount } from 'enzyme';

configure({adapter: new Adapter()});

describe('Connect provider screen', () => {
  it('Should render connect button', () => {
    const button = mount((<ConnectScreen/>));
    expect(button.text()).toContain("Connect Provider");
  });

  it('Should render connect button', () => {
    const wrapper = mount(<ConnectScreen />);
    const button = wrapper.find('button');
    expect(button.exists()).toBeTruthy()

    button.simulate('click');
    
    const metamask = wrapper.find('a');
    expect(metamask.exists()).toBeTruthy();
    expect(metamask.text()).toContain("Connect MetaMask");
  });
});