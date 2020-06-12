import * as React from 'react';
import { mount } from 'enzyme';
import { Greeting } from './index';

describe('<Greeting /> component test', function () {
  it('should render a default name of Bob', function () {
    const component = mount(<Greeting />);
    expect(component.html()).to.have.string('Bob');
  });

  it('should render a name Alan given a name prop of Alan', function () {
    const component = mount(<Greeting name="Alan" />);
    expect(component.html()).to.have.string('Alan');
  });
});
