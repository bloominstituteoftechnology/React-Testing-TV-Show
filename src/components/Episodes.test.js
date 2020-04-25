import React from 'react';
import { render } from '@testing-library/react';

import Episodes from './Episodes';

test('render Episode component', () => {
  render(<Episodes episodes={[]} />)
});

test('render Episodes with valid Episodes', () => {
  const {rerender} = render(<Episodes episodes={[]} />)
});