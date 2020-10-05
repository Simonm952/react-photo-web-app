import React, {useState, useContext} from "react"
import {Context} from "../Context"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function Image({className, img}) {
    const [hovered, setHovered]= useState(false)
    const {toggleFavorite} = useContext(Context)
    console.log(hovered)
    const elementHeart = <FontAwesomeIcon icon={faHeart} />
    const elementCart = <FontAwesomeIcon icon={faShoppingCart} />
    const heartIcon = hovered && <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}>{elementHeart}</i>
    const cartIcon = hovered && <i className="ri-add-circle-line cart">{elementCart}</i>
    

    return (
        <div className={`${className} image-container`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}

        
        >
            <img src={img.url} className="image-grid"/>
            {heartIcon}
            {cartIcon}
        </div>
    )
}

export default Image
