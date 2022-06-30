import React, { useState } from 'react';
import "./Item.css"
const Item =  ({card}) =>{
 const{name,img,options} =card
 const [logo,setlogo]=useState(true)
    return(
        <div className="card" onClick={()=>setlogo(!logo)}>
       {logo ? (

    <div>
       <img className="card-logo" src={img} alt="logo"  />
          <h3 className='card-title'>{name}</h3>
            </div>
       ) : (

        <ul className='list'>
            {options.map((el,index)=>{
                return(
                    <li>{el}</li>
                )
            })}
        </ul>


       )}
       
        </div>
    )

}


export default Item;