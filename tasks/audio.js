/**
 * VIDEO
 */
import config from './config/general';
import gulp from 'gulp';
import path from 'path';

const sourceFiles = path.join(config.root.dev, config.audio.dev) + config.audio.extensions;
const distPath = path.join(config.root.dist, config.audio.dist);

export const audio = () => {
  return (
    gulp
      .src(sourceFiles)

      // Set desitination
      .pipe(gulp.dest(distPath))
  );
};

export const watch = () => {
  gulp.watch(sourceFiles, gulp.series(video));
};

export default audio;
