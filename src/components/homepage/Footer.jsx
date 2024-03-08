import PageLinks from './PageLinks'
import { socialLinks } from './data'
import SocialLink from './SocialLink'

const Footer = () => (
    <footer className='section footer'>
      <PageLinks parentClass='footer-links' itemClass='footer-link' />
      <ul className='footer-icons'>
        {socialLinks.map((link) => <SocialLink key={link.id} {...link} itemClass='footer-icon' />)}
      </ul>
      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'>{new Date().getFullYear()}</span>. all rights reserved
      </p>
    </footer>
  )
export default Footer
