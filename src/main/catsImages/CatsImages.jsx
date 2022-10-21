import React from "react";
import style from "./CatsImages.module.scss"

const CatsImages = (props) => {
    return (
        <div className={style.container}>
            {props.catsImages}
        </div>
    )
}

export default CatsImages