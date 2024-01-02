import { Component } from "react";
import React from 'react'
import "./App.css";
export default class AppClass extends Component{
  
  render() {
    let img_Arr = this.props.imageData();
    return (
      <div>
        <h1>Kalvium Gallery</h1>
        {/* <div className='gallery'>
<img src={img_Arr[0].img} className='image'/>
<img src={img_Arr[1].img} className='image'/>
<img src={img_Arr[2].img} className='image'/>
<img src={img_Arr[3].img} className='image'/>
</div> */}
        <div className="parent">
          {img_Arr.map((elem,i) => {
            return <img src={elem.img} className="image" key={i}/>;
          })}
        </div>
      </div>
    );
  }
}


