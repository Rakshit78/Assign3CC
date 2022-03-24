import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import First from '../Components/First';
const loading: boolean = true;
const count: number = 0;
describe('render First', () => {
  test('render the component', () => {
    render(
      <First
        handle={() => {}}
        handlejson={() => {}}
        list={undefined}
        setcount={() => {}}
        scrollToTop={() => {}}
        navigate={() => {}}
        count={count}
        loading={loading}
      />
    );
    // screen.debug();
  });
});

test('assert in title', () => {
  render(
    <First
      handle={() => {}}
      handlejson={() => {}}
      list={undefined}
      setcount={() => {}}
      scrollToTop={() => {}}
      navigate={() => {}}
      count={count}
      loading={loading}
    />
  );
  expect(screen.getByRole('progressbar')).toBeInTheDocument();
});
test('heading', () => {
  render(
    <First
      handle={() => {}}
      handlejson={() => {}}
      list={undefined}
      setcount={() => {}}
      scrollToTop={() => {}}
      navigate={() => {}}
      count={count}
      loading={loading}
    />
  );
  expect(screen.getByText('Datatable')).toBeInTheDocument();
});
