import styled from 'styled-components';

export const MainLefter = styled.div`
    width: 20%;
    background-color:#eaeaea91;
    box-sizing: border-box;
    padding: 20px 10px;
    height: calc(100vh - 80px);


    h1{ 
        margin: 0px;
        margin-bottom: 12px;
        font-size: 18px;
        font-weight: 400;
    }
`;


export const MenuBox = styled.div`
        background-color: ${props => props.active ? "#efa730" : '#fff'};
        color: ${props => props.active ? "#fff" : "#222"};
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 4px 7px;
        border-radius: 1px;
        font-size: 15px;
        position: relative;
        margin-bottom: 14px;
        cursor: pointer;
        border: 1px solid #eaeaea;


    &:after{
        position: absolute;
        content: '';
        right: 0px;
        height: 100%;
        width: 7px;
        background: #f79606;
    }

`;