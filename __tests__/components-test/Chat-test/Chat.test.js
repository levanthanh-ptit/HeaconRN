import React from 'react';
import Chat from '../../../src/components/Chat/Chat';

import renderer from 'react-test-renderer';

test('renders correctly', () =>{
    const tree = renderer.create(<Chat></Chat>).toJSON();
    expect(tree).toMatchSnapshot();
});