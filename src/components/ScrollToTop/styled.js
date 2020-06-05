import styled from 'styled-components';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

export const ScrollToTopContainer = styled.div `
    width: 20px;
    height: 20px;
    position: fixed;
    bottom: 20px;
    right: 20px;
    border-radius: 10px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 5px;
    transition: all 0.5s;
    @media (max-width: 700px){
        bottom: 5px;
        right: 5px;
        box-shadow: 0 0 10px;
    }
`
export const StyledExpandLessIcon = styled(ExpandLessIcon)`
    color: black;
    transition: color 0.5s;
    :hover{
        cursor: pointer;
        color: gray;
    }
`