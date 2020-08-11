import styled from 'styled-components';

export const RighterMain = styled.div`

    width: 78%;
    background-color: #fff;
    margin-left: 1%;
    height: calc(100vh - 80px);
    overflow-y: auto;


    .heading{
        padding: 16px 0px;
        border-bottom: 2px solid #ccc;
        margin-bottom: 15px;
        font-weight: 400;
        color: #272424;
        font-size: 20px;
        text-transform: capitalize;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    input{
        height: 30px;
        width: 190px;
        border: 1px solid #ccc;
        border-radius: 3px;
        padding: 5px;
        box-sizing: border-box;
        /* margin-right: 100px; */
    }


`;