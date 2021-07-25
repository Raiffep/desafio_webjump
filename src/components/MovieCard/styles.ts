import styled from 'styled-components/native';

export const MovieContainer = styled.View`
  width: 100%;
  height: 250px;
  align-items: center;
  flex-direction: row;
  background-color: lightgray;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 0 10px;
`;

export const MovieBanner = styled.Image.attrs({
  resizeMode: 'cover'
})`
  flex: 0.4;
  width: 130px;
  height: 180px;
  border-radius: 4px;
`;

export const MovieInformationsView = styled.View`
  flex: 0.6;
  flex-direction: column;
  padding: 0 10px;
`;

export const MovieTitle = styled.Text`
  font-size: 16px;
  color: black;
  font-weight: bold;
`;

export const MovieInformations = styled.Text`
  font-size: 13px;
  color: black;
  font-weight: normal;
`;
