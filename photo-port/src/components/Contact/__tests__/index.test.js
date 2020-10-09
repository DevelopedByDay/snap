import React from 'react';
import { render, cleanup, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '../../Contact';

afterEach(cleanup)

describe('Contact is rendering', () => {

  it('renders', () => {
    render(<Contact />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Contact />)
    expect(asFragment()).toMatchSnapshot()
  })
})

describe('links are visible', () => {
    it('inserts text into the linkjs', () => {
        const { getByTestId } = render(<Contact
            
          />);
        
        expect(getByTestId('Contact me')).toHaveTextContent('Contact me');
        expect(getByTestId('submit')).toHaveTextContent('Submit');
    });
})