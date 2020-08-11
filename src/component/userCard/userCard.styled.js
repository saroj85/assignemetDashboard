import styled from 'styled-components';


export const UserCardMain = styled.div`
    background: #cdd8db;
    width:  300px;
    box-sizing: border-box;
    padding: 10px;
    margin-bottom: 10px;
    margin-right: 10px;
    border-radius: 2px;
    box-shadow: 2px 2px 3px #00000038;

    div{
        margin-bottom: 15px;
        width: 100%;
    }
    input{
        width: 100%;
        height: 38px;
        padding: 3px 10px;
        border-radius: 3px;
        box-sizing: border-box;
        border: 1px solid #ccc;
    }

    textarea{
        width: 100%;
        height: 80px;
        padding: 3px 10px;
        border-radius: 3px;
        box-sizing: border-box;
        border: 1px solid #ccc;
    }
    label{ 
        display: block;
        margin-bottom: 5px;
        font-size: 12px;
    }
    button{
        width: 100%;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 3px;
        border: 0px;
        font-weight:500;
        font-size: 14px;
        &:hover{
            opacity: .8;
        }
    }
    .create_user{
        background-color: #efa730;
        color: #fff;
    }
    .delete_user{
        background: #ec2314;
        color: #fff;
    }
`;