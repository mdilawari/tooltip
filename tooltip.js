(function( $ ){
  $(function(){
	var htmlStr = '<div id="tooltip"><div id="namebox"></div><img id="blackarrowimg" src="blackarrow.gif"/></div>';
	var $tooltip=$(htmlStr);
	$tooltip.hide();
	$('body').append($tooltip);
	var toolTipHeight=23;// Height of the tooltip
	$.fn.tooltip = function() {
		this.mouseover(function(){
			var $this = $(this);
			var offset = $this.offset();
			if ($(window).scrollTop()> offset.top-toolTipHeight){
				var t = offset.top - toolTipHeight;
				$tooltip.css({'top' : t, 'left': offset.left});  
			}else{
				var t = offset.top - toolTipHeight;
				$tooltip.css({'top' : t, 'left': offset.left});  
			}
			$('#namebox').text($this.attr('tooltip'));
			$tooltip.show();
		});
		
		this.mouseout(function(){
			$tooltip.hide();
		});
		return this;
  	};
  })
})( jQuery );
