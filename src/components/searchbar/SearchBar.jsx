import styles from "./Searchbar.module.css"

export default function SearchBar(props) {
   return (
      <div className={styles.sbar}>
         <input type='search' />
         <button className={styles.button} onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
