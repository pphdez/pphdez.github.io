jQuery(function( $ ){
	if ($.fn.cssOriginal!=undefined)
		$.fn.css = $.fn.cssOriginal;
	$('.fullwidthbanner').revolution(
	{
		delay:3000,
		startwidth:1170,
		startheight:550,
		onHoverStop:"on", 
		navigationType:"none",    
		soloArrowLeftHOffset:0,
		soloArrowLeftVOffset:0,
		soloArrowRightHOffset:0,
		soloArrowRightVOffset:0,
		touchenabled:"on",      
		fullWidth:"on",
		shadow:0          
	});
	$("#posttree").treeview({
		collapsed:true
	});
});
var disqus_shortname = 'pepehernandez'; // required: replace example with your forum shortname

    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function () {
        var s = document.createElement('script'); s.async = true;
        s.type = 'text/javascript';
        s.src = '//' + disqus_shortname + '.disqus.com/count.js';
        (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
    }());
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-44771903-1', 'pphdez.github.io');
  ga('send', 'pageview');