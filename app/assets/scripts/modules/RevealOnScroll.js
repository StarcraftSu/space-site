import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll{
	constructor(){
		this.itemsToReaveal = $('.feature-item ');
		this.hideInit();
		this.createWaypoints();
	}

	hideInit(){
		this.itemsToReaveal.addClass('reveal-item');
	}

	createWaypoints(){
		this.itemsToReaveal.each(function(){
			var currentItem = this;
			new Waypoint({          //创建锚点
				element:currentItem,
				handler:function(){
					$(currentItem).addClass('reveal-item--is-visible');
				},
				offset: '80%'   //延迟触发
			}); 
		});
	}
}

export default RevealOnScroll;