// import axios from "axios";
import React from "react";
import { Route, Routes } from "react-router-dom";
import ChosenTagPageContainer from "./chosenTagPage/ChosenTagPageContainer";
import Main from "./main/Main";
// import { Buffer } from 'node:buffer'
// import { catPic, catsData } from "./api/api";

function App() {

  // const image =  axios('https://cataas.com/c', { responseType: "blob"}); 
  // console.log(image)
  // const srcForImage = URL.createObjectURL(image.data)

  // const image = await axios(url, { 'https://cataas.com/c': "blob"}); 
  // const srcForImage = URL.createObjectURL(image.data)

  // const xhr = new XMLHttpRequest()
  // xhr.open('GET', 'https://cataas.com/c')
  // xhr.responseType = 'blob'


  // const buffer = Buffer.from(yourArrayBuffer);

  // const base64String = buffer.toString('base64');

  // xhr.onload = () => {
  //   const buffer = Buffer.from(xhr.response);

  // const base64String = buffer.toString('base64');
  //   console.log( base64String)

  // }
  //   xhr.send()
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/tag/:tagName' element={<ChosenTagPageContainer />} />
      {/* <Route path='/' element={<Main />} /> */}
    </Routes>

  )
}









export default App;

