import React from "react";
import { Link } from "react-router-dom";
import style from "./SingleTag.module.scss"

const SingleTag = (props) => {
    return <Link to={`/tag/${props.tagName}`} target="_blank" className={style.singleTag}>{props.tagName}</Link>
}

export default SingleTag