import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 60px;
  padding: 16px;
`;

export const TitleHeader = styled.Text`
  font-size: 18px;
  font-weight: bold;
  font-style: italic;
`;

export const MovieListView = styled.View`
  width: 100%;
  flex: 1;
  flex-direction: column;
  padding: 0 16px;
`;

export const ViewLoading = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  flex-direction: row;
`;

export const LoadingIcon = styled.ActivityIndicator.attrs({
  color: 'gray',
  size: 'large'
})``;

export const LoadingText = styled.Text`
  font-size: 12px;
  color: gray;
  margin-left: 10px;
`;


