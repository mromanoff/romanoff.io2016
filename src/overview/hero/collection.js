/**
 * Hero Collection
 * @type {exports}
 */

import {Collection} from 'backbone';

let data = [
  {
    small: '/img/hero/main-1-768x720.jpg',
    medium: '/img/hero/main-1-1280x600.jpg',
    large: '/img/hero/main-1-1920x700.jpg',
    extraLarge: '/img/hero/main-1-1920x700.jpg',
    title: 'Think before you code',
    alt: 'romanoff.io'
  },
  {
    small: '/img/hero/main-3-768x720.jpg',
    medium: '/img/hero/main-3-1280x600.jpg',
    large: '/img/hero/main-3-1920x700.jpg',
    extraLarge: '/img/hero/main-3-1920x700.jpg',
    title: 'Test before you deploy',
    alt: 'romanoff.io'
  },
  {
    small: '/img/hero/main-2-768x720.jpg',
    medium: '/img/hero/main-2-1280x600.jpg',
    large: '/img/hero/main-2-1920x700.jpg',
    extraLarge: '/img/hero/main-2-1920x700.jpg',
    title: 'The way to get started is to quit talking and begin doing.',
    subTitle: '~Walt Disney~',
    alt: 'romanoff.io'
  },
  {
    small: '/img/hero/main-4-768x720.jpg',
    medium: '/img/hero/main-4-1280x600.jpg',
    large: '/img/hero/main-4-1920x700.jpg',
    extraLarge: '/img/hero/main-4-1920x700.jpg',
    title: 'Attitude is a little thing that makes a big difference.',
    subTitle: '~Winston Churchill~',
    alt: 'romanoff.io'
  }
];

export default Collection.extend(data);
