import { useContext, useEffect } from 'react'
import { AuthContext } from '../stores/AuthContext'
import styles from '../styles/Guides.module.css'

const Guides: React.FC = () => {
  const { user } = useContext(AuthContext)

  useEffect(() => {
    fetch("/.netlify/functions/guides")
      .then(res => res.json())
      .then(data => console.log(data))
  }, [user])

  return (
    <div className={styles.guides}>
      <h2>All Guides</h2>
    </div>
  )
}
export default Guides