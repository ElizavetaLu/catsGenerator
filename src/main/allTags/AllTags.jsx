import React, { useEffect, useState } from "react";
import { catsAPI } from "../../api/api";

import Axios from "axios";
import SingleTag from "../../components/singleTag/SingleTag";
import style from "./AllTags.module.scss"


const AllTags = () => {
    const [tags, setTags] = useState([])

    

    useEffect(() => {
        Axios.get('https://cataas.com/api/tags').then(response => {
            let actualTags = response.data.filter(elem => elem[0] !== '#' || '' ? elem : null)
            return setTags(actualTags)
        })
    }, [true])


    const allTags = tags.map(elem => <SingleTag tagName={elem} key={Math.random() * 100} />)
    return (
        <div className={style.mainContainer}>
            {allTags}
        </div>
    )
}

export default AllTags