import tour1 from '../../assets/images/tour-1.jpeg';
import tour2 from '../../assets/images/tour-2.jpeg';
import tour3 from '../../assets/images/tour-3.jpeg';
import tour4 from '../../assets/images/tour-4.jpeg';

export const pageLinks = [
  { id: 1, href: '#home', text: 'Home' },
  { id: 2, href: '#about', text: 'About' },
  { id: 3, href: '#tours', text: 'Shows' },
  { id: 4, href: '#about', text: 'Vote Now' },
  { id: 5, href: '#services', text: 'Merchandise' },
  { id: 6, href: '#tours', text: 'Register now' },
];
export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' },
];

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: 'august 26th, 2024',
    title: 'Birthday show',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: 'Bamenda',
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: 'october 1th, 2024',
    title: 'Mountain race concert',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: 'Buea',
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: 'september 15th, 2024',
    title: 'A show for Peace',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: 'Eastern Bamenda',
    duration: 8,
    cost: 5000,
  },
  {
    id: 4,
    image: tour4,
    date: 'december 5th, 2024',
    title: 'Las Vegas Christmas Party',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: 'Douala',
    duration: 20,
    cost: 3300,
  },
];
