import React, { useEffect, useState } from "react";
import Axios from "axios";
import style from "./CatsImages.module.scss"
import CatsImages from "./CatsImages";

const CatsImagesContainer = () => {
    const [pic, setPic] = useState([])

    useEffect(() => {

        Axios.get('https://cataas.com/api/cats?limit=20').then(resp => {
            let catsId = [];
            resp.data.forEach(elem => catsId.push(elem._id))
            setPic(catsId)
        });
    }, [true])

    let catsImages = pic.map(elem => <img src={`https://cataas.com/cat/${elem}`} alt="" className={style.catPic} key={Math.random() * 100} />)

    return <CatsImages catsImages={catsImages} />
}

export default CatsImagesContainer