import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({adapter: new Adapter()})

    let wrapper;

    describe('<NavigationItems />', () => {

    beforeEach(() => {
        wrapper = shallow(<NavigationItems />);
    });

    it('should render something', () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });
});