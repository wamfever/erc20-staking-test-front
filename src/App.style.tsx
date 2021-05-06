import styled from "styled-components";

export const Button = styled.button`
    padding: 10px;
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
    text-transform: uppercase;
    letter-spacing: .07em;
    background: #2980b9;
    border: none;
    border-radius: 5px;
    width: 100%;
    color: white;
    font-size:16px;
    cursor: pointer;
    transition: background 300ms;
    &:hover {
        background: #3498db;     
    };
    margin-top: 12px;
`;

export const DisabledButton = styled.button`
    padding: 10px;
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
    text-transform: uppercase;
    letter-spacing: .07em;
    background: darkgrey;
    border: none;
    border-radius: 5px;
    width: 100%;
    color: white;
    font-size:16px;
    cursor: pointer;
    transition: background 300ms;
    margin-top: 12px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`;
