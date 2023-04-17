import styled from 'styled-components';

export const Divider = styled.div`
  display: flex;
  background: #f8f4f4;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    height: 200vh;
    flex-direction: column;
  }

  @media screen and (max-width: 480px) {
    height: 200vh;
    flex-direction: column;
  }
`;


export const MapContainerStyle = styled.div`
    position: absolute;
    right: 2vw;
    width: 60vw;
    height: 78vh;
    right: 2vw;
    top: 16vh;
    bottom: 10vh;
`;

export const Heading = styled.div`
    color: #fff;
    padding: 6px 12px;
    font-family: monospace;
    z-index: 1;
    position: absolute;
    border-radius: 4px;
    width: 33vw;
    height: 10vh;
    align-items: flex-start;
    flex-direction: column;
`;

export const Sidebar = styled.div`
    overflow: scroll;
    color: #fff;
    padding: 6px 12px;
    z-index: 1;
    border-radius: 2px;
    width: 34vw;
    height: 79vh;
`;

export const Wrapper = styled.div`
    margin-top: 15vh;
    margin-left: 2vw;
    display: flex;
`;

export const ListingWrapper = styled.div`
    margin-top: 10vh;
    overflow: scroll;

`;

export const MapWrapper = styled.div`
`;

export const Text1 = styled.p`
  font-size: 1.8vw;
  color: #000000;
  font-weight: 400;
  line-height:1.3;

  @media screen and (max-width: 480px) {
    font-size: 3.5vw;
  }

  @media screen and (max-width: 768px) {
    font-size: 3.5vw;
  }
`;

export const Text2 = styled.p`
  font-size: 1vw;
  color: #000000;
  font-weight: 100;
  line-height:1.3;
  

  @media screen and (max-width: 480px) {
    font-size: 3.5vw;
  }

  @media screen and (max-width: 768px) {
    font-size: 3.5vw;
  }
`;