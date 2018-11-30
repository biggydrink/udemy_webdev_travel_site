import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';

let mobileMenu = new MobileMenu;
let featureScroller = new RevealOnScroll($(".feature-item"), "85%");
let testimonialScroller = new RevealOnScroll($(".testimonial"), "60%");
let stickyHeader = new StickyHeader();