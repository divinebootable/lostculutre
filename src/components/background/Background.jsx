/* eslint-disable no-else-return  */
/* eslint-disable consistent-return  */
/* eslint-disable react/prop-types  */
import './Background.css';
import video1 from '../../assets/video1.mp4';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';

const Background = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <video className="background" autoPlay loop muted>
        {' '}
        <source src={video1} type="video/mp4" />{' '}
      </video>
    );
  } else if (heroCount === 0) {
    return <img src={image1} className="background" alt="" />;
  } else if (heroCount === 1) {
    return <img src={image2} className="background" alt="" />;
  } else if (heroCount === 2) {
    return (
      <div>
        <img src={image3} className="background" alt="" />
      </div>
    );
  }
};
export default Background;
