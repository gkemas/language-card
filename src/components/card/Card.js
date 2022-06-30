
import {languages} from '../../helpers/data'
import "./Card.css";
import Item from '../item/Item';

const Card = () => {
    return(
        <div className="cards-area-container">
     <div className="bars"></div>
       <div className="language"> <h1 className="language-title">Languages</h1>
        </div>
      <div className="cards-container">

            {languages.map((item,index) =>{
             return(
     
               <Item card={item} key={index} /> )}
             )
            }
      </div>
        </div>
         )
}


export default Card;