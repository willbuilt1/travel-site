import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from'jquery';
import StickyHeader from './modules/StickyHeader';

var mobileMenu = new MobileMenu();
new RevealOnScroll($('.features__grid-item'), '85%');
new RevealOnScroll($('.testimonials__card'), '80%');
var stickyHeader = new StickyHeader();