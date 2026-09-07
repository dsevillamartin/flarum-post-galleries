import Extend from 'flarum/common/extenders';
import app from 'flarum/admin/app';

export default [
  new Extend.Admin().setting(() => ({
    setting: 'datitisev-post-galleries.swiper_zoom',
    type: 'switch',
    label: app.translator.trans('datitisev-post-galleries.admin.settings.swiper_zoom'),
  })),
];
