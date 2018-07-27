import gulp from 'gulp';

import clean from './clean';
import styles from './styles';
import javascript from './javascript';
import images from './images';
import video from './video';
import html from './html';

import server from './server';
import watch from './watch';


export const dev = gulp.series(clean, gulp.parallel(styles, javascript, images, video), html, server, watch);
export const build = gulp.series(clean, gulp.parallel(styles, javascript, images, video), html);


export default dev;
