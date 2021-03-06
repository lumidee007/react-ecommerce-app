import React from 'react'
import './menuItem.styles.scss'
import {withRouter} from 'react-router-dom'

function MenuItem({title, imageUrl, size, history, match, linkUrl}) {
    // console.log("menuitemprops", match)
    return (
        <div className ={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div style={{ backgroundImage:`url(${imageUrl})`}} className="background-image" />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle"> SHOP NOW</span>
            </div>
        </div>
    )
}
export default withRouter(MenuItem)
