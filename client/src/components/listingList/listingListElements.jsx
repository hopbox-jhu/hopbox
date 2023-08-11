import styled from 'styled-components';


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 720px;
  @media screen and (max-width: 820px) {
  width: 100vw;
}

@media screen and (max-width: 450px) {
  width: 100vw;
}
`;