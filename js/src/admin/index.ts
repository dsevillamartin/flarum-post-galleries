import app from 'flarum/admin/app';

app.initializers.add('datitisev/flarum-post-galleries', () => {
  app.extensionData.for('datitisev-post-galleries').registerSetting({
    setting: 'datitisev-post-galleries.swiper_zoom',
    type: 'switch',
    label: app.translator.trans('datitisev-post-galleries.admin.settings.swiper_zoom'),
  });
});
