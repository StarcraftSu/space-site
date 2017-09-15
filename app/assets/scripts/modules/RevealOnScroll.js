import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll{
	constructor(ele,offset){
		this.itemsToReaveal = ele;
		this.offsetPercentage = offset;
		this.hideInit();
		this.createWaypoints();
	}

	hideInit(){
		this.itemsToReaveal.addClass('reveal-item');
	}

	createWaypoints(){
		var that = this;
		this.itemsToReaveal.each(function(){
			var currentItem = this;
			new Waypoint({          //创建锚点
				element:currentItem,
				handler:function(){
					$(currentItem).addClass('reveal-item--is-visible');
				},
				offset: that.offsetPercentage   //延迟触发
			}); 
		});
	}
}

export default RevealOnScroll;