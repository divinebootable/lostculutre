/* eslint-disable react/prop-types */
const Title = ({ title, subTitle }) => (
    <div className='section-title'>
      <h2>
        {title} <span>{subTitle}</span>
      </h2>
    </div>
  );
export default Title;
