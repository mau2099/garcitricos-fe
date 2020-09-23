/**
 *
 * Asynchronously loads the component for Sales
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Sales = lazyLoad(
  () => import('./index'),
  module => module.Sales,
);
