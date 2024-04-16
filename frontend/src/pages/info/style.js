import styled from 'styled-components';

export const InfoHeader = styled.div`
    margin: 1.5rem 0;
    h2{
        text-align: center;
        font-size: 16px;
    }
`
export const InfoBodyGrid = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const InfoButton = styled.div`
    display: flex;
    align-items: center;
    p{
        font-weight: bold;
        font-size: 12px;
    }
`
export const InfoBody = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
`
export const ButtonGo = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    svg{
        width: 100%;
        height: 22px;
    }
`

export const InfoCare = styled.div`
    padding: 1rem;
    border: 1px solid #f0f0f0;
    margin: 2rem;
    border-radius: 4px;
    p{
        font-size: 12px;
    }
`
export const Ballon = styled.div`
    background-color: #6EEF7B;
    padding: 0.8rem;
    border-radius: 50%;
    margin-right: 0.5rem;
    svg{
        width: 100%;
        height: 22px;
        color: #1F5014;
    }
`