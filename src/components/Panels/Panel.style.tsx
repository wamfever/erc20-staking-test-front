import styled from 'styled-components';

export const Panel = styled('div')`
    flex-direction: column;
    display: flex;
    margin: 12px;
`;

export const PanelContent = styled('div')`
    h1 {
        text-align: center;
        color: #434343;
        text-transform: uppercase;
        letter-spacing: .05em;
    }
    width: 400px;
    padding: 15px;
    border: #ddd thin solid;
    section {
        margin-bottom: 15px;
    }
`;

export const InputErrorSpan = styled('span')`
    font-size: 0.75rem;
    color: red;
`;
