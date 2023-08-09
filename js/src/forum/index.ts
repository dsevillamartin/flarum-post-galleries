import app from 'flarum/forum/app';
import { extend, override } from 'flarum/common/extend';
import CommentPost from 'flarum/forum/components/CommentPost';

import type SwiperType from 'swiper';
import { SwiperModule, SwiperOptions } from 'swiper/types';

import DiscussionListItem from 'flarum/forum/components/DiscussionListItem';
import ComposerPostPreview from 'flarum/forum/components/ComposerPostPreview';
import ReplyPlaceholder from 'flarum/forum/components/ReplyPlaceholder';

import getSwiper from './Swiper';

const swiperOptions: SwiperOptions = {
  centeredSlides: true,
  centeredSlidesBounds: true,
  spaceBetween: 30,
  zoom: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
};
let loadedSwiperCSS = false;

const obtainSwiper = async () => {
  if (!loadedSwiperCSS) {
    document.head.innerHTML += '<link\n' + '  rel="stylesheet"\n' + '  href="https://unpkg.com/swiper@10/swiper-bundle.min.css"\n' + '/>';
    loadedSwiperCSS = true;
  }

  try {
    return await getSwiper();
  } catch (err) {
    console.error('Failed to load Swiper.', err);
  }

  return null;
};

const createGalleries = async ($container: JQuery<HTMLElement>, galleries: SwiperType[]) => {
  const $elements = $container.find('img:not(.emoji) + br + img:last-of-type, a:has(img:not(.emoji)) + br + a:has(img:not(.emoji)):last-of-type');

  if (!$elements.length) return;

  const useZoom = app.forum.attribute('useSwiperZoom');

  const { Swiper, Navigation, Pagination, Zoom } = (await obtainSwiper()) || {};

  if (!Swiper) return;

  const opts = {
    modules: [Navigation, Pagination, useZoom && Zoom].filter(Boolean) as SwiperModule[],
    ...swiperOptions,
  };

  $elements.each(function (this: HTMLElement) {
    if (this.hasAttribute('data-flarum-post-gallery')) return;

    this.setAttribute('data-flarum-post-gallery', '');

    const images = $(this).siblings('img:not(.emoji), a:has(img:not(.emoji))').add(this);

    $(images).siblings('br').remove();

    images.wrapAll($('<div/>').addClass('swiper-wrapper')).wrap($('<div/>').addClass('swiper-slide'));

    if (useZoom) {
      images.wrap($('<div/>').addClass('swiper-zoom-container'));
    }

    const swiperWrapper = $(this).closest('.swiper-wrapper')[0]!;

    $(swiperWrapper).wrap($('<div/>').addClass('swiper'));

    const swiperEl = swiperWrapper.parentElement!;

    $(swiperEl)
      .append($('<div/>').addClass('swiper-pagination'))
      .append($('<div/>').addClass('swiper-button-prev'))
      .append($('<div/>').addClass('swiper-button-next'));

    galleries.push(new Swiper(swiperEl, opts));
  });
};

const destroyGalleries = (galleries: SwiperType[]) => {
  galleries?.forEach((gallery) => gallery.destroy());
  return [];
};

const registerDestroy = (prototype: any) => {
  extend(prototype, 'onremove', function () {
    this.galleries = destroyGalleries(this.galleries);
  });
};

const register = (prototype: any, selector?: string) => {
  extend(prototype, ['oncreate', 'onupdate'], function () {
    const $container = this.$(selector);

    if ($container.length) {
      this.galleries = destroyGalleries(this.imageGallery);

      createGalleries($container, this.galleries);
    }
  });

  registerDestroy(prototype);
};

app.initializers.add('datitisev/flarum-post-galleries', () => {
  register(CommentPost.prototype, '.Post-body');
  register(DiscussionListItem.prototype, '.DiscussionListItem-info');

  extend(ComposerPostPreview.prototype, 'oncreate', function (this: any) {
    override(this.attrs, 'surround', (orig, ...args) => {
      orig(...args);

      this.galleries = destroyGalleries(this.galleries);

      createGalleries(this.$(), this.galleries);
    });
  });

  extend(ComposerPostPreview.prototype, 'onremove', function (this: any) {
    this.galleries = destroyGalleries(this.galleries);
  });

  extend(ReplyPlaceholder.prototype, 'anchorPreview', function (this: any) {
    this.galleries = destroyGalleries(this.galleries);

    createGalleries(this.$('.Post-body'), this.galleries);
  });

  registerDestroy(ComposerPostPreview.prototype);
  registerDestroy(ReplyPlaceholder.prototype);
});
