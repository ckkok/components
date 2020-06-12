import * as React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { Greeting } from './index';

describe('<Greeting /> component test', () => {

  it('should render a default name of Bob', () => {
    const component = mount(<Greeting />);
    expect(component.html()).to.have.string('Bob');
  });

  it('should render a name Alan given a name prop of Alan', () => {
    const component = mount(<Greeting name='Alan' />);
    expect(component.html()).to.have.string('Alan');
  });
})