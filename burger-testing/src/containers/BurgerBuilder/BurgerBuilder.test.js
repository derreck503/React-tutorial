import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

import { BurgerBuilder } from './BurgerBuilder';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Spinner from '../../components/UI/Spinner/Spinner';

configure({adapter: new Adapter()});

describe('<BurgerBuilder />', () => {
    let wrapper;

    beforeEach(() => {
        // Pass onInitIngredients an empty funciton as it needs to be instiated if props are used
        wrapper = shallow(<BurgerBuilder onInitIngredients={() => {}} />);
    });
    
    it('should render <BuildControls /> when recieving ingredients', () => {
        wrapper.setProps({ings : {salad: 0}});
        expect(wrapper.find(BuildControls)).toHaveLength(1);
    });

    it('should render error message if error is found', () => {
        wrapper.setProps({error: true});
        expect(wrapper.contains(<p>Ingredients can't be loaded!</p>)).toEqual(true);
    });

    it('should render spinner if no error is found', () => {
        wrapper.setProps({error: false});
        expect(wrapper.contains(<Spinner />)).toEqual(true);
    });

    it('should not render spinner if ingredients recieved', () => {
        wrapper.setProps({ings : {salad: 0}});
        expect(wrapper.contains(<Spinner />)).toEqual(false);
    });
})

// Test containers by stripping out redux connection. Add export to container class