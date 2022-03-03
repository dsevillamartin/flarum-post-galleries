import app from 'flarum/forum/app';

export default () => {
  // return Promise.resolve({ Swiper, Navigation, Pagination });
  __webpack_public_path__ = `${app.forum.attribute('baseUrl')}/assets/extensions/datitisev-post-galleries/`;

  return import(/* webpackChunkName: 'swiper' */ './util/Swiper').then(({ Swiper, ...pkg }) => ({
    Swiper,
    ...pkg,
  }));
};
