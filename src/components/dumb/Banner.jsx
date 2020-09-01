import React from "react";
import '../../assets/styles/General/hero/banner.css'

export default function Banner(props){
  const {children, title, subtitle} = props

  return(
    <div className="banner">
      <h1>{title}</h1>
      <div />
      <p>{subtitle}</p>
      {children}
    </div>
  )
}