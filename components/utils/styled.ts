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
    ${StyledPictureVertical} {
      opacity: 0.8;
    }
  }
`;

export const CardVertical = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid lightgray;
  border-radius: 5px;
`;

export const CardVerticalDialog = styled.div`
  padding: 0.75rem;
`;

export const RowTitle = styled.h2`
  background: #e20046;
  display: inline-block;
  padding: 0.5rem 1rem;
  margin: 1rem 1rem;
  color: white;
  text-transform: uppercase;
  transform: skewX(-20deg);

  & > span {
    transform: skewX(20deg);
  }
`;
