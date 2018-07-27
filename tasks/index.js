import audio from './audio';
import clean from './clean';
import html from './html';
import images from './images';
import javascript from './javascript';
import server from './server';
import styles from './styles';
import watch from './watch';
import gulp from 'gulp';

export const dev = gulp.series(clean, gulp.parallel(styles, javascript, images, audio), html, server, watch);
export const build = gulp.series(clean, gulp.parallel(styles, javascript, images, audio), html);

export default dev;
