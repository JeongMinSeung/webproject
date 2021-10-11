const button=()=>{
	const viewall = document.querySelector('.viewall');
	viewall.addEventListener('click',()=>{
		viewall.classList.toggle('toggle');
	});
}
button();

var mHtml = $("html");
var page = 1;
var scrollevent = true;

// mHtml.animate({scrollTop : 0},10);
// window.addEventListener("wheel", function(e){
// 	if(test) e.preventDefault();
// 		},{passive : false})
		
// $(window).on("wheel", function(e) {
// 	//마우스 스크롤시 값이 +1(휠다운) / -1(휠업)
// 	var scroll = e.originalEvent.deltaY;
//     if(mHtml.is(":animated")) return;
// 	//스크롤Down
//     if(scroll > 0 && $(window).scrollTop()<$(window).height()) {
// 		scrollevent=true;
// 		mHtml.animate({scrollTop : $(window).height()});
// 		$('.title_wrap').removeClass('on');
// 		$('.subtitle').removeClass('on');
		
// 	//스크롤Up
// 	}else if(scroll < 0 && $(window).scrollTop()<=$(window).height()) {
// 		scrollevent=true;
//      	mHtml.animate({scrollTop : 0});
// 		$('.title_wrap').addClass('on');
// 		$('.subtitle').addClass('on');
// 	//이후 나머지 스크롤 허용
//     }else{
// 		scrollevent = false;
// 	}
	
// });

$(document).ready(function(){
    $('.title_wrap').addClass('on');
    $('.subtitle').addClass('on');
    $('.side_nav li:nth-child(1) a').addClass('active');

// 사업분야 이미지 애니메이션

slidingBox('.a1',800,'url(../image/test.png)no-repeat',100);
slidingBox('.a2',500,'url(../image/test.png)no-repeat',700);
slidingBox('.a3',500,'url(../image/test.png)no-repeat',900);

function slidingBox(item, speed, color, delay){
	$(item).append(
		$('<div class="inner">').css({
			'width':'100%','height':'100%',
			'position':'absolute', 'top':'0px','left':'-100%',
			'background':color,
			'background-size':'cover'
		}).delay(delay).animate({'left':'0%'},speed,'easeOutExpo')
			// $(item).css({'color':color})
			// $(this).animate({'left':'100%'},speed,'easeInExpo', function(){
			// 	$(this).remove();
			// })
		
	)
}
})

$(window).on('scroll',function(){
	let sct = $(this).scrollTop();
	console.log(sct);
	let s1 = $('.s1').offset().top;
	let s2 = $('.s2').offset().top;
	let s3 = $('.s3').offset().top - $('header').height();
	let s4 = $('.s4').offset().top - $('header').height();
	
	// console.log($('.s3').outerHeight(true));
	$('.side_nav>ul>li>a').removeClass('active');

	if(sct >= s1 && sct < s2){
		$('.side_nav').removeClass('black');
		$('.side_nav>ul>li').eq(0).children('a').addClass('active');
	}else if(sct >= s2 && sct < s3){
		$('.side_nav').removeClass('black');
		$('.side_nav').addClass('black');
		$('.side_nav>ul>li').eq(1).children('a').addClass('active');
		// $('.side_nav').removeClass('black');
	}else if(sct >= s3 && sct < s4){
		$('.side_nav').removeClass('black');
		$('.side_nav').addClass('black');
		$('.side_nav>ul>li').eq(2).children('a').addClass('active');
	}else if(sct >= s4){
		$('.side_nav').removeClass('black');
		$('.side_nav').addClass('black');
		$('.side_nav>ul>li').eq(3).children('a').addClass('active');
	}
})


// 네비 클릭시 이동

$('.side_nav ul li').on('click', function (e) {
	e.preventDefault();

	var target = $(this).children('a').attr('href');
	var target_pos = $(target).offset().top;

	$('html,body').stop().animate({
		scrollTop: target_pos
	}, 700, 'swing');
});

//var posTop =(page-1) * $(window).height();
//    mHtml.animate({scrollTop : posTop});
/*
		window.addEventListener("wheel", function(e){
	    e.preventDefault();
		},{passive : true}); 
 */