 (function($) {
  "use strict"; 
	
		$("input").focus(function(){
			$(this).css({"background-color":"black",
			   
			});
		})
		$("#mail").blur(function(){
  // regMail='^([a-z\.]+)@([a-z\.]+[\.][a-z]{2,3})$';
		 var checkMail=$("#mail").val();
		 if(checkMail.length < 3 )
		 {
				$("#alert3").show(800);
				$(this).css("border","1px solid red");
		 }
		 else{

				$("#alert3").hide(800);
				$("#uname").focus();
				$(this).css({"border":"0","border-bottom":"1px solid gray"});
		 }})
		$("#uname").blur(function(){
		 var check=$("#uname").val();
		 if(check.length < 3)
		 {
				$("#alert").show(800);
				$(this).css("border","1px solid red");
		 }
		 else{

				$("#alert").hide(800);
				$("#pass").focus();
				$(this).css({"border":"0","border-bottom":"1px solid gray"});

		 }
		 $("#pass").blur(function(){
      var comPass=$(this).val();
			if(comPass.length<5){
				$("#alert2").show(800);
				$(this).css("border","1px solid red");
			}
			else{

$("#alert2").hide(800);
$("#rePass").focus();
$(this).css({"border":"0","border-bottom":"1px solid gray"});

}

		 })

		})
		$("#rePass").blur(function(){
      var confPass=$("#pass").val();
			var reaPass=$("#rePass").val();
			
			if(confPass === reaPass ){
				$("#alert4").hide(800);
        $("#phone").focus();
         $(this).css({"border":"0","border-bottom":"1px solid gray"});

			}
			else{
				$("#alert4").show(800);
				$(this).css("border","1px solid red");


}})

$('a').click(function() {
			$('html, body').animate({
				scrollTop: (target.offset().top - 54)
			}, 1000, "easeInOutExpo");
			return false;

	})


  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top < 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  navbarCollapse();
  

})(jQuery); 
