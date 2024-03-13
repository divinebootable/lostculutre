/* eslint-disable jsx-a11y/anchor-has-content */
// eslint-disable-next-line react/prop-types
const SocialLink = ({ itemClass, href, icon }) => (
    <li>
      <a href={href} target='_blank' rel='noreferrer' className={itemClass}>
        <a className={icon} />
      </a>
    </li>
  )
export default SocialLink
