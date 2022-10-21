import React from "react";
import style from "./ChosenTagPage.module.scss"


const ChosenTagPage = (props) => {



    return (
        <div className={style.container}>
            <form onSubmit={props.handleSubmit}>
                <div className={style.wrapper}>
                    <div className={style.tools}>
                        <div className={style.param}>
                            <div className={style.paramName}>Text:</div>
                            <input name="text" placeholder="Add some text to picture" onChange={props.onTextInputChange}/>
                        </div>
                        <div className={style.param}>
                            <div className={style.paramName}>Filter:</div>
                            <input name="filter" placeholder="Blur, mono, sepia, negative, paint, pixel" />
                        </div>
                        <div className={style.param}>
                            <div className={style.paramName}>Image size:</div>
                            <input name="imgType" placeholder="Small, medium, square, original" />
                        </div>
                    </div>
                    <button className={style.btn} onClick={props.generateImage}>Apply tools</button>
                    <div className={style.picDiv}>
                        <img src={props.cat} alt="" className={style.picture} />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ChosenTagPage



