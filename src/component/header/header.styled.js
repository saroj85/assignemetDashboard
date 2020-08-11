import styled from 'styled-components';


export const Header = styled.div`
    width: 100%;
    height: 80px;
    background-color: #cdd8db;
    box-sizing: border-box;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-family: 'Lato', sans-serif;

    .row{
        display: flex;
        flex-direction: column;
        margin-left: 20px;

        &:nth-child(1){
            margin-left: 0px;
        }
    }

    label{
        color: #8b9092;
        font-size: 12px;
        margin-bottom: 5px;
    }
    select{
        height: 30px;
        background-color: #cdd8db;
        width: 200px;
        
    }
    input {
        height: 30px;
        background-color: #cdd8db;
        box-sizing: border-box;
        padding: 0px 10px;
        width: 200px;
    }

    button{
        margin-left: 20px;
        height: 40px;
        background-color: #efa730;
        color: #fff;
        border: 0px;
        cursor: pointer;
        width: 107px;
        border-radius: 3px;

        &:hover{
            opacity: .6;
        }

    }
`;