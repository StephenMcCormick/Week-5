			//this adds the contentBox class to all the divs with the text
			$(window).on("load",
				function(){
					$("#nav2,#nav3,#nav4").hide();
					$("#nav1,#nav2,#nav3,#nav4").addClass("contentBox");
				}  
			);
		
			//this makes the navigation buttons jump when hovered over
			$("#btn1,#btn2,#btn3,#btn4").hover(
				function(){
					$(this).animate({marginTop:"-=1em"});//makes the button go up
				},
				function(){
					$(this).animate({marginTop:"+=1em"});//makes the button go down
				} 
			);
			
			
			//this is for clikcing the nave buttons and changing what content box is shown
			$("#btn1").click(
				function(){
					$("#nav1").show();
					$("#nav2,#nav3,#nav4").hide();
				}  
			);
			
			$("#btn2").click(
				function(){
					$("#nav2").show();
					$("#nav1,#nav3,#nav4").hide();
				}  
			);
			
			$("#btn3").click(
				function(){
					$("#nav3").show();
					$("#nav2,#nav1,#nav4").hide();
				}  
			);
			
			$("#btn4").click(
				function(){
					$("#nav4").show();
					$("#nav2,#nav3,#nav1").hide();
				}  
			);
