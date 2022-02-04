import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Loading from '../components/Home/Loading';

describe('Test Loading render', () => {
  test('Test Loading', () => {
    const tree = render(
      <BrowserRouter>
        <Loading />
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
