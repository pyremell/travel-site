// Imports the 'export' from js modules
import MobileMenu from './modules/MobileMenu'; 
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';

// Designates the variable 'mobileMenu' is a new instance of the class 'MobileMenu'
var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
var stickyHeader = new StickyHeader();
var modal = new Modal();