import { useEffect } from 'react'
import styles from '../styles/Guides.module.css'

const Guides: React.FC = () => {
  useEffect(() => {
    fetch("/.netlify/functions/guides")
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])
  return (
    <div className={styles.guides}>
      <h2>All Guides</h2>
    </div>
  )
}
export default Guides