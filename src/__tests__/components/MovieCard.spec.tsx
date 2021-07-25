import React from 'react';
import { render } from '@testing-library/react-native';
import MovieCard from '../../components/MovieCard';

const people = {
  picture: {
    large: 'Testando'
  },
  name: {
    first: 'string'
  },
  gender: 'Testando',
  dob: {
    age: 'Testando'
  },
  email: 'Testando',
  phone: 'Testando'
};

describe('MovieCard Component', () => {
  it('should be able', () => {
    const { debug } = render(
      <MovieCard people={people} />
    );

    debug();
  });
})
