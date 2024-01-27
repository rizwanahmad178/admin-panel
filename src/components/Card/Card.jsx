import React, { useState } from 'react'
import './Card.css';
import { LayoutGroup } from 'framer-motion';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import {UilTimes} from "@iconscout/react-unicons";

function Card(props) {

    const [expanded, setExpnaded] = useState(false);

  return (
    <LayoutGroup>
        {
            expanded? ( 
                <ExpandedCard param={props} setExpnaded={()=>setExpnaded(false)}/> 
            ) : ( 
                <CompactCard param={props} setExpnaded={()=>setExpnaded(true)}/>
            )
        }
    </LayoutGroup>
  )
}

//CompactCard

function CompactCard({param, setExpnaded}){
    const Png = param.png;
    return(
        <div className="CompactCard"
            style={{
                background: param.color.backGround,
                boxShadow: param.color.boxShadow
            }}
            onClick={setExpnaded}
        >
            <div className="radialBar">
                <CircularProgressbar value={param.barValue} text={`${param.barValue}%`}/>
                <span>{param.title}</span>
            </div>
            <div className="detail">
                <Png />
                <span>${param.value}</span>
                <span>Last 24 hours</span>
            </div>
        </div>
    )
}

//ExpandedCard
function ExpandedCard({param, setExpnaded}){
    return (
        <div className="ExpandedCard" 
        style={{background: param.color.backGround,
            boxShadow:param.color.boxShadow
            }}
        >
        <div>
            <UilTimes onClick={setExpnaded}/>    
        </div>    
        <span>
            {param.title}
        </span>
        <div className="chartContainer">
            Chart
        </div>
        <span>Last 24  hours</span>

        </div>
    )
}

export default Card
