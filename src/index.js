/*import  '../node_modules/slick-carousel/slick/slick';
import  '../node_modules/jquery/dist/jquery'*/
//require('slick-carousel');
//import './scss/style_320.scss'
import './scss/style_768.scss'
//import 'reset-css';
//import '../slick-1.8.1/slick/slick'



import getData from './js/getData';

getData("partners.json","#slayderpart",'#itempart');
getData("bonus.json",'#slayderbon','#item');
getData("coupon.json","#slaydercoup",'#item');











