import Link from 'next/link'
import Image from 'next/image'
import { useContext } from 'react'
import { AuthContext } from '../stores/AuthContext'

const Navbar: React.FC = () => {
  const val = useContext(AuthContext)
  console.log(val)
  return (
    <div>
      <nav>
        <Image src="/rupee.png" width={50} height={48} alt='logo' draggable="false" />
        <h1>Gaming Vibes</h1>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/guides"><a>Guides</a></Link></li>
        </ul>
      </nav>
      <div className="banner">
        <Image src="/banner.png" width={966} height={276} alt='banner' draggable="false" />
      </div>
    </div >
  )
}
export default Navbar