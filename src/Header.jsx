import './header.css'
import Card from './card.jsx'
import Header from '.Header.jsx'


function Header (props){

    return(
        <>
        <h1 style={{color: props.color}} >Asi no {props.lenguaje}</h1>
        </>
    )
}

export default Header