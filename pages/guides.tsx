import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../stores/AuthContext'
import styles from '../styles/Guides.module.css'

const Guides: React.FC = () => {
  const { user, authReady } = useContext(AuthContext)
  const [guides, setGuides] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (authReady) {
      fetch('/.netlify/functions/guides', user && {
        headers: {
          Authorization: 'Bearer ' + user.token.access_token
        }
      })
        .then(res => {
          if (!res.ok) {
            throw Error("You must be logged in to view this content")
          }
          return res.json()
        })
        .then(data => {
          setGuides(data)
          setError(null)
        })
        .catch(err => {
          setError(err.message)
          setGuides(null)
        })
    }

  }, [user, authReady])

  return (
    <div className={styles.guides}>
      {!authReady && <div>Loading...</div>}
      {error && <div className={styles.error}>{error}</div>}
      {guides && guides.map(guide => (
        <div key={guide.title} className={styles.card}>
          <h1>{guide.title}</h1>
          <h2>Written by {guide.author}</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, eum facere, sunt architecto dicta harum nulla tempora perferendis illum officiis adipisci iste consequuntur non autem amet blanditiis est accusantium quod.</p>
        </div>
      ))}
    </div>
  )
}
export default Guides