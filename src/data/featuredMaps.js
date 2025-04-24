// src/data/featuredMaps.js

import AllMapsImg        from '../assets/images/Featured/allMaps.jpg'
import OriginsImg        from '../assets/images/Featured/Origins.webp'
import RevelationsImg    from '../assets/images/Featured/Rev.jpg'
import MobOfTheDeadImg   from '../assets/images/Featured/MOTD.jpg'
import DerEisendracheImg from '../assets/images/Featured/DE.webp'
import GorodKroviImg     from '../assets/images/Featured/GK.jpg'
import SideEEImg         from '../assets/images/Featured/sideEE.jpg'

const featuredMaps = [
  {
    name: 'All Maps',
    renderLink: '/map-list',
    image: AllMapsImg,
  },
  {
    name: 'Origins',
    renderLink: '/maps/origins',
    image: OriginsImg,
  },
  {
    name: 'Revelations',
    renderLink: '/maps/revelations',
    image: RevelationsImg,
  },
  {
    name: 'Mob of the Dead',
    renderLink: '/maps/mob-of-the-dead',
    image: MobOfTheDeadImg,
  },
  {
    name: 'Der Eisendrache',
    renderLink: '/maps/der-eisendrache',
    image: DerEisendracheImg,
  },
  {
    name: 'Gorod Krovi',
    renderLink: '/maps/gorod-krovi',
    image: GorodKroviImg,
  },
  {
    name: 'Side Easter Eggs',
    renderLink: '/ee-maps',
    image: SideEEImg,
  },
]

export default featuredMaps
