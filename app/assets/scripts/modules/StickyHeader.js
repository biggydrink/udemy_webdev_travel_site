import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
    constructor() {
        this.siteHeader = $(".site-header");
        this.targetElement = $(".large-hero__title");

        this.createHeaderWaypoint();
    }

    createHeaderWaypoint() {
        let mainCls = this;
        new Waypoint({
            element: mainCls.targetElement[0],
            handler: function(direction) {
                if (direction == "down") {
                    mainCls.siteHeader.addClass("site-header--dark");
                } else {
                    mainCls.siteHeader.removeClass("site-header--dark");
                }
            }
        }) 
    }
}

export default StickyHeader;