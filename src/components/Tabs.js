
import React,{useState} from "react";

const Tabs = ({tabs,setTabs}) => {
    let [content1,setContent1] = useState("");
    let [content2,setContent2] = useState("");
  return (
    <div>
        {/* Do not remove the main div */}
        <ul>
      {tabs.map((currelement,index,array) => {if(index>=3){return null} return (<li key={index} onClick={(event)=>{console.log(currelement.content); setContent1(currelement.content)}}>{currelement.title}</li>)})}
      {content1 &&  <p>{content1}</p>}
      {tabs.map((currelement,index,array) => {if(index<3){return null} return (<li key={index} onClick={(event)=>{console.log(currelement.content); setContent2(currelement.content)}}>{currelement.title}</li>)})}
      {content2 &&  <p>{content2}</p>}
     
      </ul>
    </div>
  )
}

export default Tabs
