import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import ChosenTagPage from "./ChosenTagPage";


const ChosenTagPageContainer = () => {
    const { tagName } = useParams()

    const [cat, setCat] = useState([])

    useEffect(() => {
        Axios.get(`https://cataas.com/cat/${tagName}`, { responseType: "blob" }).then(resp => {
            const url = URL.createObjectURL(resp.data);
            setCat(url)
        });
    }, [tagName])



    const [textInput, setTextInput] = useState('')
    const [filterInput, setFilterInput] = useState('')
    const [imgTypeInput, setImgTypeInput] = useState('')

    let onTextInputChange = (event) => {
        setTextInput(event.currentTarget.value)
    }

    let handleSubmit = (event) => {
        event.preventDefault()
        setTextInput(event.target.text.value)
        setFilterInput(event.target.filter.value)
        setImgTypeInput(event.target.imgType.value)
    }

    let generateImage = () => {
        Axios.get(`https://cataas.com/cat/${tagName}/${textInput? 'says/'+ textInput: null}${filterInput? '?filter='+filterInput: null}${imgTypeInput? '&type='+imgTypeInput : null}`, { responseType: "blob" }).then(resp => {
            const url = URL.createObjectURL(resp.data);
            setCat(url)
        });
    }
    // 
    return <ChosenTagPage cat={cat} handleSubmit={handleSubmit} generateImage={generateImage} onTextInputChange={onTextInputChange}/>
    
}

export default ChosenTagPageContainer
// `/c/${textInput? 's/' + textInput + '?' :null}fi=sepia&c=orange&s=40&t=or`
// `https://cataas.com/cat/${textInput? 'says/'+ textInput: null}`
// 'https://cataas.com/cat/says/Pipka?type=medium?filter=blur?width=600?height=600'

// '/c/gif/s/Hello?fi=sepia&c=orange&s=40&t=or'

