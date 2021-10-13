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


$(document).ready(function(){
    $('.title_wrap').addClass('on');
    $('.subtitle').addClass('on');
    $('.side_nav li:nth-child(1) a').addClass('active');

// 사업분야 이미지 애니메이션

// slidingBox('.a1',800,'url(../image/test.png)no-repeat',100);
// slidingBox('.a2',500,'url(../image/test.png)no-repeat',700);
// slidingBox('.a3',500,'url(../image/test.png)no-repeat',900);

// function slidingBox(item, speed, color, delay){
// 	$(item).append(
// 		$('<div class="inner">').css({
// 			'width':'100%','height':'100%',
// 			'position':'absolute', 'top':'0px','left':'-100%',
// 			'background':color,
// 			'background-size':'cover'
// 		}).delay(delay).animate({'left':'0%'},speed,'easeOutExpo')
// 			// $(item).css({'color':color})
// 			// $(this).animate({'left':'100%'},speed,'easeInExpo', function(){
// 			// 	$(this).remove();
// 			// })
		
// 	)
// }
})

$(window).on('scroll',function(){
	let sct = $(this).scrollTop();
	let s1 = $('.s1').offset().top;
	let s2 = $('.s2').offset().top;
	let s3 = $('.s3').offset().top - $('header').height();
	let s4 = $('.s4').offset().top - $('header').height();
	let solution = $('.a1').offset().top - $(window).height() + $('header').height();
	let audit = $('.a2').offset().top - $(window).height() + $('header').height();
	let forensic = $('.a3').offset().top - $(window).height() + $('header').height();
	let ftr = $('footer').offset().top - $(window).height() + $('header').height();
	$('.side_nav>ul>li>a').removeClass('active');
	if(sct >= s1 && sct < s2){
		$('.side_nav').removeClass('black');
		$('.side_nav>ul>li').eq(0).children('a').addClass('active');
		$('.title_wrap').addClass('on');
		$('.subtitle').addClass('on');
	}else if(sct >= s2 && sct < s3){
		$('.side_nav').removeClass('black');
		$('.side_nav').addClass('black');
		$('.side_nav>ul>li').eq(1).children('a').addClass('active');
		$('.title_wrap').removeClass('on');
		$('.subtitle').removeClass('on');
	}else if(sct >= s3 && sct < s4){
		$('.side_nav').removeClass('black');
		$('.side_nav').addClass('black');
		$('.side_nav>ul>li').eq(2).children('a').addClass('active');
		$('.title_wrap').removeClass('on');
		$('.subtitle').removeClass('on');
	}else if(sct >= s4){
		$('.side_nav').removeClass('black');
		$('.side_nav').addClass('black');
		$('.side_nav>ul>li').eq(3).children('a').addClass('active');
		$('.title_wrap').removeClass('on');
		$('.subtitle').removeClass('on');
	}

	if(sct >= ftr){
		$('.side_nav').addClass('disable');
	}else{
		$('.side_nav').removeClass('disable');
	}
	if(sct >= solution && $('.a1').children('.business_image_wrap').hasClass('ani-stop')){
		$('.a1').children('.business_image_wrap').removeClass('ani-stop');
		$('.a1').children('.business_image_wrap').addClass('active');
	}else if(sct<solution){
		$('.a1').children('.business_image_wrap').removeClass('active');
		$('.a1').children('.business_image_wrap').addClass('ani-stop');
	}
	
	if(sct >= audit && $('.a2').children('.business_image_wrap').hasClass('ani-stop')){
		$('.a2').children('.business_image_wrap').removeClass('ani-stop');
		$('.a2').children('.business_image_wrap').addClass('active');
	}else if(sct<audit){
		$('.a2').children('.business_image_wrap').removeClass('active');
		$('.a2').children('.business_image_wrap').addClass('ani-stop');
	}
	
	if(sct >= forensic && $('.a3').children('.business_image_wrap').hasClass('ani-stop')){
		$('.a3').children('.business_image_wrap').removeClass('ani-stop');
		$('.a3').children('.business_image_wrap').addClass('active');
	}else if(sct<forensic){
		$('.a3').children('.business_image_wrap').removeClass('active');
		$('.a3').children('.business_image_wrap').addClass('ani-stop');
	}
})


// sideNav 클릭시 이동
$('.side_nav ul li').on('click', function (e) {
	e.preventDefault();

	var target = $(this).children('a').attr('href');
	var target_pos = $(target).offset().top;

	$('html,body').stop().animate({
		scrollTop: target_pos
	}, 700, 'swing');
});

$('.logo').on('click', function (e) {
	e.preventDefault();

	var target = $(this).attr('href');
	var target_pos = $(target).offset().top;

	$('html,body').stop().animate({
		scrollTop: target_pos
	}, 700, 'swing');
});

// 헤더 메뉴 클릭시 이동
$('.header_wrap ul li').on('click', function (e) {
	e.preventDefault();

	var target = $(this).children('a').attr('href');
	if($(this).children('a').hasClass('tab01')){
		var target_pos = $(target).offset().top;	
	}else{
		var target_pos = $(target).offset().top - $(target).height();
	}

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