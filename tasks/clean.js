/**
 * Clean
 */

import gulp from 'gulp';
import del from 'del';

import config from './config/general';


export const clean = () => {

	return del(config.root.dist, {
		force: true
	});
};


export default clean;
