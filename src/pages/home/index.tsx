import React, { useEffect } from 'react';
import { AsyncAction } from 'redux-promise-middleware';
import { State } from '../../services/store';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import ApiConnection from '../../services/api';
import MovieCard from '../../components/MovieCard';
import {
  Container,
  Header,
  TitleHeader,
  MovieListView,
  ViewLoading,
  LoadingIcon,
  LoadingText
} from './styles';

interface IHomeProps {
  peoples?: object[];
  dispatch(getPeoples: any): void;
}

const Home = ({ peoples, dispatch }: IHomeProps) => {
  useEffect(() => {
    dispatch(getPeoples());
  }, [])

  const getPeoples = (): AsyncAction => ({
    type: 'GET_PEOPLES',
    payload: ApiConnection.get('/?results=50')
      .then(response => response.data.results)
  });

  return (
    <Container>
      <Header>
        <TitleHeader>Peoples</TitleHeader>
      </Header>
      <MovieListView>
        {peoples && peoples.length ? (
          <FlatList
            data={peoples}
            windowSize={10}
            initialNumToRender={3}
            removeClippedSubviews={true}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{ paddingVertical: 16 }}
            renderItem={({ item }: any) => (
              <MovieCard people={item} />
            )}
          />
        ) : (
          <ViewLoading>
            <LoadingIcon />
            <LoadingText>Carregando...</LoadingText>
          </ViewLoading>
        )}
      </MovieListView>
    </Container>
  );
}

export default connect((state: State)=> ({ peoples: state.peoples }))(Home);
