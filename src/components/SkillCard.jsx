import React from 'react'
import './SkillCard.css'
const SkillCard = ({imgUrl,title}) => {
  return (
    <div>
<div className="card cr" style={{"width": "18rem"}}>
  <img src={imgUrl} className="card-img-top" alt="..."/>
  <div className="card-body cr">
    <h2 className="card-title">{title}</h2>
  </div>
</div>

    </div>
  )
}

export default SkillCard