import styled from 'styled-components';

export const Divider = styled.div`
  display: flex;
  background: white;
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
    height: 84vh;
    max-height: 84vh;
    right: 2vw;
    top: 14vh;
    bottom: 10vh;
    /* box-shadow: 0.5px 0.5px 2px rgba(0, 0, 0, 0.5); */
`;

export const Heading = styled.div`
    color: #fff;
    padding: 6px 12px;
    font-family: monospace;
    z-index: 1;
    position: absolute;
    border-radius: 4px;
    width: 33vw;
    height: 15vh;
    align-items: flex-start;
    flex-direction: row;
`;

export const Sidebar = styled.div`
    overflow: scroll;
    color: #fff;
    padding: 6px 12px;
    z-index: 1;
    border-radius: 2px;
    width: 34vw;
    height: 75vh;
    margin-top: 20px;
    bottom: auto;
`;

export const Wrapper = styled.div`
    margin-top: 12vh;
    margin-left: 2vw;
    display: flex;
`;

export const ListingWrapper = styled.div`
    margin-top: 21vh;
    overflow: scroll;

`;

export const MapWrapper = styled.div`
`;

export const Text1 = styled.p`
  font-size: 2rem;
  color: #000000;
  font-weight: 400;
  line-height:1.3;
  margin-top: 20px;

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
  padding-top: 10px;
  

  @media screen and (max-width: 480px) {
    font-size: 3.5vw;
  }

  @media screen and (max-width: 768px) {
    font-size: 3.5vw;
  }
`;

export const Filter = styled.div`
  display: flex;
  background-color: ##5d2626;
  height: 5vh;
  width: auto;
  margin-top: -20px;
  align-items: flex-end;
  flex-direction: column;
`