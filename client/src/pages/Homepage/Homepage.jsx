import styled from 'styled-components';

export const Divider = styled.div`
  display: absolute;
  background: white;
  flex-direction: column;
  overflow-y: scroll;

  @media screen and (max-width: 768px) {

    flex-direction: column;
  }

  @media screen and (max-width: 480px) {

    flex-direction: column;
  }
`;


export const MapContainerStyle = styled.div`
    position: fixed;
    left: 770px;
    width: 60%;
    height: 100vh;
    max-height: 100%;
    bottom: 1vh;
    /* box-shadow: 0.5px 0.5px 2px rgba(0, 0, 0, 0.5); */
    @media screen and (max-width: 820px) {
    display: none;
    }
    @media screen and (max-width: 450px) {
    display: none;
    }
`;

export const Heading = styled.div`
    border-radius: 4px;
    width: 700px;
    height: 250px;
    justify-content: center;
  align-items: center;
    flex-direction: row;
    @media screen and (max-width: 820px) {
  width: 100%;
  max-width: 650px; 
}

  @media screen and (max-width: 450px) {
    width: 100%;
    max-width: 350px; 
}
`;

export const Sidebar = styled.div`
    overflow: hidden;
    background:#920f0facfff;
    border-radius: 2px;
    width: 800px;
    height: 100%;

    @media screen and (max-width: 768px) {
  height: auto;

}

@media screen and (max-width: 480px) {
  height: auto;

}
`;

export const Wrapper = styled.div`
    margin-top: 100px;
    margin-left: 2vw;
    flex-direction: column;
    display: flex;
    overflow-y: scroll;

`;


export const Text1 = styled.p`
  font-size: 2rem;
  color: #000000;
  font-weight: 400;
  line-height:1.3;
  margin-top: 20px;

  @media screen and (max-width: 820px) {
    font-size: 5vw;
  }

  @media screen and (max-width: 450px) {
    font-size: 7vw;
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

export const FilterBar = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  padding-top: 40px;
`