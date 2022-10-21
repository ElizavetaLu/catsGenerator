import React from "react";
import AllTags from "./allTags/AllTags";
import CatsImagesContainer from "./catsImages/CatsImagesContainer";
import style from "./Main.module.scss"


const Main = () => {
    return (
        <div className={style.main}>
            <CatsImagesContainer/>
            <AllTags/>
        </div>
    )
}

export default Main