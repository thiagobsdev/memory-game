import styled from "styled-components";


export const Container = styled.div`
        display: flex;
        heigth: 70px;
        width: 200px;
        background-color: #1550FF;
        border-radius: 10px;
        align-items: center;
       
        transition: all ease .3s;
        
        &:hover {
            opacity: 0.8;
        }

`

export const Icon = styled.img`
       heigth: inherit;
       padding: 7px 10px;
       border-right: 1px solid #CCC;
    
       

`

export const Label = styled.div`
       
        flex: 1;
        heigth: inherit;
        font-weight: bold;
        display:flex;
        justify-content:center;
        color: white; 
        
`