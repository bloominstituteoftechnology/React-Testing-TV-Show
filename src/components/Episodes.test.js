import React from 'react';
import { render } from '@testing-library/react';

import Episodes from './Episodes';

test('render Episode component', () => {
  render(<Episodes episodes={[]} />)
})