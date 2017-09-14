import $ from 'jquery';

class MobileMenu {

	constructor(){
	//获取DOM对象
		this.menuIcon = $('.site-header__menu-icon');
		this.menuContent = $('.site-header__menu-content');
		this.events();
	}

	//监听动作
	events(){
		this.menuIcon.click(this.toggleTheMenu.bind(this));	
		
	}

	//具体方法
	toggleTheMenu(){
		
		this.menuContent.toggleClass('site-header__menu-content--is-visible');

	}

}

export default MobileMenu;