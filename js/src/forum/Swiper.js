import app from 'flarum/forum/app';

export default () => {
  __webpack_public_path__ = `${app.forum.attribute('baseUrl')}/assets/extensions/datitisev-post-galleries/`;

  return import(/* webpackChunkName: 'swiper' */ './external/Swiper');
};
