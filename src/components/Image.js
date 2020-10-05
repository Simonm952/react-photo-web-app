import React, {useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function Image({className, img}) {
    const [hovered, setHovered]= useState(false)
    console.log(hovered)
    const element = <FontAwesomeIcon icon={faHeart} />
    

    return (
        <div className={`${className} image-container`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}

        
        >
            <img src={img.url} className="image-grid"/>
            {
                hovered &&
                <i className="ri-heart-line favorite">{element}</i> 
            }
        </div>
    )
}

export default Image
