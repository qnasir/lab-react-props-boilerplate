import './App.css';
import React from "react"
function App(props) {
  let img_Arr = props.imageData();
return (<div>
<h1>
 Kalvium Gallery
</h1>
{/* <div className='gallery'>
<img src={img_Arr[0].img} className='image'/>
<img src={img_Arr[1].img} className='image'/>
<img src={img_Arr[2].img} className='image'/>
<img src={img_Arr[3].img} className='image'/>
</div> */}
<div className='parent'>
{
  img_Arr.map(elem=>{
    return(
    <img src={elem.img} className='image' />
    )
  })
}
</div>
</div>
);
}

export default App;
