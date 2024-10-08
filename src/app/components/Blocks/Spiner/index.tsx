import styled from 'styled-components';

export const Spiner = styled.div`
  display: inline-block;
  width: 60px;
  height: 60px;

  &:after {
    content: ' ';
    display: block;
    width: 34px;
    height: 34px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
