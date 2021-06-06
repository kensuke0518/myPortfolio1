'use strict';

import { scrollLoadFunc } from './scroll-load.js';
import { smoothScrollFunc } from './smooth-scroll.js';
import { gnavMenuFunc } from './gnav-menu.js';
import { scrollSectionFunc } from './scroll-section.js';
import { darkFunc } from './dark.js';
import { gaugeFunc,delayGaugeFunc } from './gauge.js';

scrollLoadFunc();
gnavMenuFunc();
//scrollSectionFunc();
smoothScrollFunc();
darkFunc();
delayGaugeFunc();
