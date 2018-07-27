/**
 * WATCHER
 */
import { watch as html } from './html';
import { watch as images } from './images';
import { watch as styles } from './styles';

export const watch = () => {
  styles();
  images();
  html();
};

export default watch;
