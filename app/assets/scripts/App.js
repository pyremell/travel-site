// Imports in the 'export' from MobileMenu.js
import MobileMenu from './modules/MobileMenu'; 
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';

// Designates the variable 'mobileMenu' is a new instance of the class 'MobileMenu'
var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
var stickyHeader = new StickyHeader();