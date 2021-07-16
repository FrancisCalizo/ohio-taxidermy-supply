import styled from 'styled-components';

export const Container = styled.div`
  & .slick-list {
    margin-left: -5px;
    padding: 0.5rem 0;
    background: white;
  }
`;

export const StyledPictureVertical = styled.img`
  height: 440px;
  width: 310px;
`;

export const StyledPictureHorizontal = styled.img`
  height: 230px;
  width: 354px;
`;

export const PictureContainer = styled.div`
  border-left: 10px solid white;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
    img {
      opacity: 0.8;
    }
  }
`;

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid lightgray;
  border-radius: 5px;
`;

export const CardDialog = styled.div`
  padding: 0.75rem;

  & > div > h3,
  h5 {
    margin: 0.1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    width: 100%;
    min-width: 1;
  }
`;

export const RowTitle = styled.h2`
  background: ${(props) => props.theme.colors.teal};
  border: 2px solid ${(props) => props.theme.colors.pink};
  box-shadow: 0px 2px 9px ${(props) => props.theme.colors.pink};
  display: inline-block;
  padding: 0.5rem 1rem;
  margin: 1rem 1rem;
  color: white;
  border-radius: 7px;
  text-transform: uppercase;
  transform: skewX(-20deg);

  & > span {
    transform: skewX(20deg);
  }
`;

export const PageTitle = styled.h1`
  text-align: center;
  margin: 3rem 0;
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.purple};
  padding: 0.5rem 3rem;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 1px 20px 1px ${(props) => props.theme.colors.pink};
  display: inline-block;
`;
