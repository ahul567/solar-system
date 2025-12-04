import React from 'react';
import './piechart.css';
import Turbine from './turbinename.jsx';
import piechartimg from '../assets/flat-color-icons_pie-chart.svg';
import carbon_wind from '../assets/running_windmill.svg';
import stopped_wind from '../assets/Vector.svg';
import Listing from "./ListingComponent/Listingcomp.jsx";

export default function Piechart() {
  const labels=['All','Running','Stopped','Alarm'];
  
  
  return (
     
    <div className="winbox">

      
      <div className="piechartbox">
        <div className="chart-text-box">
          <h2 className="chart-text">2 of 114 Assets are running</h2>
        </div>
        <img className="pie-chart" src={piechartimg} />
      </div>
       
          <div 
            
        style={{ 
          display: "flex",
          justifyContent: "center",
          marginLeft: "800px",
          marginTop: "-50px",
          gap: "50px"
          }}
          >
          {
            labels.map((label, index)=>(
              <Listing key={index} text={label} />
          ))}  
       </div>
      
      <div className="status-wrapper">
        <div className="rec-box">
          <img className="running-wind-mill" src={carbon_wind} alt="carbon-wind" />
          <div className="Status-box">
            <p className="status-typo">Running</p>
            <p className="status-typo2">KN- R21</p>
          </div>
        </div>

        <div className="rec-box2">
          <img className="stopped-wind-mill" src={stopped_wind} alt="stopped-wind" />
          <div className="Status-box2">
            <p className="stopped-status-typo">Stopped</p>
            <p className="stopped-status-typo2">SJ-517</p>
          </div>
        </div>
      </div>
      <div style={{marginLeft:780, marginTop:-160}}>
        <Turbine/>
        </div>
       
    </div>
  );
}
