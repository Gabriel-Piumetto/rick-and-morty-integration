import Card from "../card/Card"
import styles from "./Cards.module.css"
function Cards(props) {
   const {characters} = props
   
   return(
         
         <div className={styles.divCards}>
         {
            characters.map((char)=>{
               return <Card
                 key={char.id}
                 name={char.name}
                 status={char.status}
                 species={char.species}
                 gender={char.gender}
                 origin={char.origin.name}
                 image={char.image}
                 onClose={() => window.alert('Emulamos que se cierra la card')}
               />
            })
         }       
         </div>
         
         )
}

export default Cards
