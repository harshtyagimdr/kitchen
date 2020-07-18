
jQuery(document).ready(function($) {
"use strict"; 
$('.uphs-hotspot-wrapper').each(function() {
    var $self = $(this),
        hotspotClass = $self.data('hotspot-class') ? $self.data('hotspot-class') : 'HotspotPlugin_Hotspot',
        hotspotContent = $self.data('hotspot-content') ? $self.data('hotspot-content') : '',
        action = $self.data('action') ? $self.data('action') : 'hover';
    
    if(hotspotContent != '' && !$self.find('.uphs-hotspot-image-cover').hasClass('uphs-hotspot-initialized')) {
        $self.find('.uphs-hotspot-image-cover').addClass('uphs-hotspot-initialized').hotspot({
            hotspotClass: hotspotClass,
            interactivity: action,
            data: decodeURIComponent(hotspotContent)
        });
    }
});

                
                
});



