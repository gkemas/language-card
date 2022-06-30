
import {languages} from '../../helpers/data'


const Card = () => {
    return(
        <div className="cards-area-container">
     <div className="bars"></div>
      <h1 className="language-title">Languages</h1>
      
            {languages.map((item,index) =>{
             return(
     
               <Item card={item} key={index} /> )}
             )
            }
         )
        </div>
}


export default Card;