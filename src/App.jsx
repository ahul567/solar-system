import React from 'react';
import Piechart from './Piechart/Piechart.jsx';
import {Routes,Route} from 'react-router-dom';
export default function App() {
  return (
  <Routes>
    <Route path='/asset-operation' element={ <Piechart />} />
   
  </Routes>
  
  
  );
}