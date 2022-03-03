<?php

/*
 * This file is part of datitisev/flarum-post-galleries.
 *
 * Copyright (c) 2022 David Sevilla Martin.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Datitisev\PostGalleries;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),
];
