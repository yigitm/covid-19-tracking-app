import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Noregion from '../components/Detail/Noregion';

describe('Test Noregion render', () => {
  test('Test Noregion', () => {
    const tree = render(
      <BrowserRouter>
        <Noregion />
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
