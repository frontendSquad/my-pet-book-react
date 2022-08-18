import React from 'react'
import { Link } from 'react-router-dom'
function BtnLink(props) {
    let ic = props.icon
    return (
        <Link to={props.BtnPath} className={props.BtnClass}>{props.BtnText} {ic ? <i className="fas fa-arrow-right ml-1" /> : ''}</Link>
    )
}

export default BtnLink