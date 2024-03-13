/* eslint-disable react/prop-types */
import PageLink from './PageLink'
import { pageLinks } from './data'

const PageLinks = ({ parentClass, itemClass }) => (
    <ul className={parentClass} id='nav-links'>
      {pageLinks.map((link) => <PageLink key={link.id} link={link} itemClass={itemClass} />)}
    </ul>
  )
export default PageLinks
