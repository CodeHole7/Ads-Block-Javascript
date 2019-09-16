			
	var time = 0;
	var interval;
	var step;
	var redirect = getRequest("redirect-to");
	redirect="google.ru";
	var page_cnt=0;
	var loading_time=2;
	// sessionStorage.setItem("current_page_number", page_cnt);
	var myobj = {

		"page":[
				
				{
					"asset":[
						{"img":"./assets/img/gallery1.png", "description":"Build, Settle, Trade. Create a Kingdom!"}, 
					    {"img":"./assets/img/gallery1.png", "description":"Simple Quiz Can Guess Your Education Level"},
					    {"img":"./assets/img/gallery1.png", "description":"Hate Getting Ripped Off by Mechanics? You Must See This New Device"},
					    {"img":"./assets/img/gallery1.png", "description":"New Technology Makes GPS Car Tracking A Piece Of Cake"},
					    {"img":"./assets/img/gallery1.png", "description":"4"},
					    {"img":"./assets/img/gallery1.png", "description":"5"},
					    {"img":"./assets/img/gallery1.png", "description":"6"},
					    {"img":"./assets/img/gallery1.png", "description":"7"}
					]
				},
				{
					"asset":[
						{"img":"./assets/img/gallery2.png", "description":"sdfsDoe"}, 
					    {"img":"./assets/img/gallery2.png", "description":"1"},
					    {"img":"./assets/img/gallery2.png", "description":"2"},
					    {"img":"./assets/img/gallery2.png", "description":"3"},
					    {"img":"./assets/img/gallery2.png", "description":"4"},
					    {"img":"./assets/img/gallery2.png", "description":"5"},
					    {"img":"./assets/img/gallery2.png", "description":"6"},
					    {"img":"./assets/img/gallery2.png", "description":"7"}
					]
				}
		]
	}
	

	function positionExtra(){
		var screen = $(window).width();

		if(screen <= 768){
			$("li.extra").insertAfter('li:first');				
		}else if(screen <= 996){
			$("li.extra").insertAfter('li:eq(1)');				
		}
	}

	function getRequest(name){
	   if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(window.location.search))
	      return decodeURIComponent(name[1]);
	}

	$(function() {
		positionExtra();
		page_cnt=sessionStorage.getItem("current_page_number");
		alert(page_cnt);
		if (page_cnt==3) {
				window.location.replace("//" + redirect);			
		}
		else{

			if (page_cnt) {
				if (page_cnt==1) {
					loading_time=10;
				}
				if (page_cnt==2) {
					loading_time=5;
					$(".next-stage").text("Accept & Connect Now");		
				}
				
				for (var i = 1; i <= 8; i++) {
					var temp= myobj.page[page_cnt-1].asset[i-1].img;
					$("#"+i).attr("src", temp);
				}
			}
			
			$(".next-stage").hide();
			$(".progress-bar-container").show();
			t_progbar_start(loading_time);
			
		}
		$(".next-stage").click(function(){
			page_cnt++;
			console.log(page_cnt);
			if (page_cnt==3) {
				window.location.replace("//" + redirect);			
			}
			else{
				if (page_cnt==1) {
				loading_time=2;
				}
				if (page_cnt==2) {
					loading_time=5;
					$(".next-stage").text("Accept & Connect Now");		
				}
				
				for (var i = 1; i <= 8; i++) {
					var temp= myobj.page[page_cnt-1].asset[i-1].img;
					$("#"+i).attr("src", temp);
				}
				$(".next-stage").hide();
				$(".progress-bar-container").show();
				t_progbar_start(loading_time);
				
			}
			sessionStorage.setItem("current_page_number", page_cnt);		
		}).hide();
		t_progbar_start(loading_time);
	});

	function t_progbar_start(second) {

		var width = $("#progress-bar-container").width();
		step=width/second/100;
		interval = setInterval(increase_progress, 10,step, second);
	}

	var time=0;
	function increase_progress(t_step, t_second){
		time++;
		$(".progress-bar-toplayout").width(step);
		var current_rest_time = t_second-Math.floor(time/100);
		$(".prog-bar-label").text( current_rest_time + "s");
		if (current_rest_time==0) {
			clearInterval(interval);
			$(".next-stage").show();
			$(".progress-bar-container").hide();
			time=0;
		}
		step+=t_step;
	}