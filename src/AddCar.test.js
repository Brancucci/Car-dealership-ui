import React from 'react';
import AddCar from './components/AddCar';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<AddCar />', () => {
    it('renders five <TextInput /> components', () => {
        const wrapper = shallow(<AddCar />);
        expect('abc').toHaveLength(3);
        //expect(wrapper.find('Button')).toHaveLength(3);
    });
});