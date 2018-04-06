import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

// connect/configure enzyme
configure({adapter: new Adapter()});

// Takes description arg and testing function
describe('<NavigationItems / >', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NavigationItems />); // Shallow is useful because it doesn't render sub components, simply the current component
    });

    // it allows you to test one thing and takes a description and method
    it('should render two <NavigationItem /> elements if not authenticated', () => {    
        // expect is from jest to test if we see two navItems if not authenticated, since no props passed
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });

    // it('should render three <NavigationItem /> elements if authenticated', () => {
    //     const wrapper = shallow(<NavigationItems isAuthenticated />); // passing it like this defaults to true
    //     expect(wrapper.find(NavigationItem)).toHaveLength(3);
    // });

    it('should render three <NavigationItem /> elements if authenticated', () => {
        // wrapper = shallow(<NavigationItems isAuthenticated />);
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });

    it('should render Logout <NavigationItem /> elements if authenticated', () => {
        wrapper.setProps({isAuthenticated: true});
        // expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toHaveLength(1);
        // or
        expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
    });

    it('should render Auth <NavigationItem /> elements if not authenticated', () => {
        // expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toHaveLength(1);
        // or
        expect(wrapper.contains(<NavigationItem link="/auth">Authenticate</NavigationItem>)).toEqual(true);
    });

});