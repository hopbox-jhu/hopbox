import styled from 'styled-components';


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;


  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;

  }
`;