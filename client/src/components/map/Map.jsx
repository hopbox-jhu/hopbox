import styled from 'styled-components';

export const MapContainerStyle = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    bottom: 10px;
    left: 35%;
`;

export const Sidebar = styled.div`
    overflow: auto;
    background-color: rgba(35, 55, 75, 0.9);
    color: #fff;
    padding: 6px 12px;
    font-family: monospace;
    z-index: 1;
    position: absolute;
    top: 50px;
    left: 0;
    margin: 12px;
    border-radius: 4px;
    width: 450px;
`;

export const Wrapper = styled.div`
    display: flex;
`;

export const ListingWrapper = styled.div`
    margin-right: 20px;
`;

export const MapWrapper = styled.div`
    flex: 1;
`;