import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import { UserForm } from '../components/UserForm';
import { UserPhoneRequest } from '../components/UserPhoneRequest';

it('renders without crashing', () => {
    shallow(<UserForm />);
});


