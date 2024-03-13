/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const PageLink = ({ link, itemClass }) => (
    <li key={link.id}>
      <a href={link.href} className={itemClass}>
        {link.text}
      </a>
    </li>
  )
export default PageLink
