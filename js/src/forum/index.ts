import app from 'flarum/forum/app';
import { extend, override } from 'flarum/common/extend';
import CommentPost from 'flarum/forum/components/CommentPost';

import type Swiper from 'swiper';
// import Swiper, { Navigation, Pagination } from 'swiper';
import DiscussionListItem from 'flarum/forum/components/DiscussionListItem';
import ComposerPostPreview from 'flarum/forum/components/ComposerPostPreview';

import getSwiper from './Swiper';
import ReplyPlaceholder from 'flarum/forum/components/ReplyPlaceholder';

document.head.innerHTML += '<link\n' + '  rel="stylesheet"\n' + '  href="https://unpkg.com/swiper@8/swiper-bundle.min.css"\n' + '/>';

const swiperOptions = {
  centeredSlides: true,
  centeredSlidesBounds: true,
  spaceBetween: 30,

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
};

const createGalleries = async ($container: JQuery<HTMLElement>, galleries: Swiper[]) => {
  const $elements = $container.find('img + br + img:last-of-type, a:has(img) + br + a:has(img):last-of-type');

  if (!$elements.length) return;

  const { Swiper, Navigation, Pagination }: any = await getSwiper();

  const opts = {
    ...swiperOptions,
    modules: [Navigation, Pagination],
  };

  $elements.each(function (this: HTMLElement) {
    if (this.hasAttribute('data-flarum-post-gallery')) return;

    this.setAttribute('data-flarum-post-gallery', '');

    const images = $(this).siblings('img, a:has(img)').add(this);

    $(images).siblings('br').remove();

    images.wrapAll($('<div/>').addClass('swiper-wrapper')).wrap($('<div/>').addClass('swiper-slide'));

    const swiperWrapper = this.parentElement?.parentElement!;

    $(swiperWrapper).wrap($('<div/>').addClass('swiper'));

    const swiperEl = swiperWrapper.parentElement!;

    $(swiperEl)
      .append($('<div/>').addClass('swiper-pagination'))
      .append($('<div/>').addClass('swiper-button-prev'))
      .append($('<div/>').addClass('swiper-button-next'));

    galleries.push(new Swiper(swiperEl, opts));
  });
};

const destroyGalleries = (galleries: Swiper[]) => {
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

  extend(ComposerPostPreview.prototype, 'oncreate', function () {
    override(this.attrs, 'surround', (orig, ...args) => {
      orig(...args);

      this.galleries = destroyGalleries(this.galleries);

      createGalleries(this.$(), this.galleries);
    });
  });

  extend(ComposerPostPreview.prototype, 'onremove', function () {
    this.galleries = destroyGalleries(this.galleries);
  });

  extend(ReplyPlaceholder.prototype, 'anchorPreview', function () {
    this.galleries = destroyGalleries(this.galleries);

    createGalleries(this.$('.Post-body'), this.galleries);
  });

  registerDestroy(ComposerPostPreview.prototype);
  registerDestroy(ReplyPlaceholder.prototype);
});
