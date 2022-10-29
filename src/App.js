import React from "react";
import { Route, Routes } from "react-router-dom";
import ChosenTagPageContainer from "./chosenTagPage/ChosenTagPageContainer";
import Main from "./main/Main";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/tag/:tagName' element={<ChosenTagPageContainer />} />
    </Routes>

  )
}









export default App;

