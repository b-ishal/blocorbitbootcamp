import styles from "../../styles/Home.module.css"
import Link from "next/link"

export default function NNav(){
    
    return(
   
<nav className={styles.nav}>
        <ul>
          <li>
            home
          
          </li>
          <li>
            contact
          </li>
          <li>
            blog
          </li>
          <Link href="/about">
            <a>
          
          <li>
            
            About us
          
          </li></a></Link>
        </ul>
      </nav>
    );
}
