import styles from "./Card.module.css";

function Card(props) {
   return (
      <div className={styles.divCard}>
         <button className={styles.button} onClick={()=> {props.onClose(props.id)}}>X</button>
         <img className={styles.image} src={props.image} alt='' />
         <h2>{props.name}</h2>
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2>
      </div>
   );
}

export default Card  