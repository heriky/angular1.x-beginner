import angular from 'angular';
import Navbar from './Navbar';
import ExtraInfo from './ExtraInfo';
import CatNav from './CatNav';
import Vendors from './Vendors';
import FooterInfo from './FooterInfo';

export default angular.module('app.components',
	[Navbar, ExtraInfo, CatNav,Vendors,FooterInfo]
).name