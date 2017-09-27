import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';//平滑滑动到选中区域
class StickyHeader{
	constructor(){
		this.lazyImages = $('.lazyload');
		this.siteHeader = $('.site-header');
		this.headerTrigger = $('.large-hero__title');
		this.createHeaderWaypoint();
		this.pageSections = $('.page-section'); //grab elements has page-section class
		this.headerLinks = $('.primary-nav a');
		this.createPageSectionWaypoints();
		this.addSmoothScrolling();
		this.refreshWaypoints();
	}


	refreshWaypoints(){
		this.lazyImages.on('load',function(){
			Waypoint.refreshAll();
		});
	}


	addSmoothScrolling(){
		this.headerLinks.smoothScroll();
	}

	createHeaderWaypoint(){
		var that = this;
		new Waypoint({
			element: that.headerTrigger[0],
			handler: function(direction){
				if(direction == 'down'){
					that.siteHeader.addClass('site-header--dark');
				}else{
					that.siteHeader.removeClass('site-header--dark')
				}

			}
		});
	}

	createPageSectionWaypoints(){
		var that = this;
		this.pageSections.each(function(){
			var currentPageSection = this;
			new Waypoint({
				element:currentPageSection,
				handler:function(direction){
					if(direction == "down"){
					var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");   //Create Js DOM
					that.headerLinks.removeClass('is-current-link');
					$(matchingHeaderLink).addClass('is-current-link');                                //Convert Js element to jQuery 
					}
				},
				offset:"18%"
			});

			new Waypoint({
				element:currentPageSection,
				handler:function(direction){
					if(direction == "up"){
					var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");   //Create Js DOM
					that.headerLinks.removeClass('is-current-link');
					$(matchingHeaderLink).addClass('is-current-link');                                //Convert Js element to jQuery 
					}
				},
				offset:"-40%"
			});
		});
	}
}

export default StickyHeader;