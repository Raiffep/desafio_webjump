import React, { memo } from 'react';
import {
  MovieContainer,
  MovieBanner,
  MovieInformationsView,
  MovieTitle,
  MovieInformations
} from './styles';

interface IPeople {
  people: {
    picture: {
      large: string
    };
    name: {
      first: string;
    };
    gender: string;
    dob: {
      age: string
    };
    email: string;
    phone: string;
  }
}

const MovieCard = ({ people }: IPeople) => {
  return (
    <MovieContainer>
      <MovieBanner source={{ uri: people.picture.large }} />
      <MovieInformationsView>
        <MovieTitle>{people.name.first}</MovieTitle>
        <MovieInformations>
          Gender: {people.gender}
        </MovieInformations>
        <MovieInformations>
          Age: {people.dob.age}
        </MovieInformations>
        <MovieInformations>
          E-mail: {people.email}
        </MovieInformations>
        <MovieInformations>
          Phone: {people.phone}
        </MovieInformations>
      </MovieInformationsView>
    </MovieContainer>
  );
}

export default memo(MovieCard);
