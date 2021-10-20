
var mHtml = $("html");
var page = 1;
var scrollevent = true;


$(document).ready(function(){
    $('.title_wrap').addClass('on');
    $('.subtitle').addClass('on');
    $('.side_nav li:nth-child(1) a').addClass('active');
})

$(window).on('scroll',function(){
	let sct = $(this).scrollTop();
	let s1 = $('.s1').offset().top;
	let s2 = $('.s2').offset().top - $('.con1').height();
	let s3 = $('.s3').offset().top - $('.banner_wrap').height();
	let s4 = $('.a3').offset().top + $('header').height();
	let solution = $('.a1').offset().top - $(window).height() + $('header').height();
	let audit = $('.a2').offset().top - $(window).height() + $('header').height();
	let forensic = $('.a3').offset().top - $(window).height() + $('header').height();

	$('.side_nav>ul>li>a').removeClass('active');
	if(sct >= s1 && sct < s2){
		$('.side_nav>ul>li').eq(0).children('a').addClass('active');
		$('.title_wrap').addClass('on');
		$('.subtitle').addClass('on');
	}else if(sct >= s2 && sct < s3){
		$('.side_nav>ul>li').eq(1).children('a').addClass('active');
		$('.title_wrap').removeClass('on');
		$('.subtitle').removeClass('on');
	}else if(sct >= s3 && sct < s4){
		$('.side_nav>ul>li').eq(2).children('a').addClass('active');
		$('.title_wrap').removeClass('on');
		$('.subtitle').removeClass('on');
	}else if(sct >= s4){
		$('.side_nav>ul>li').eq(3).children('a').addClass('active');
		$('.title_wrap').removeClass('on');
		$('.subtitle').removeClass('on');
	}

	let s1bottom = $('.s2').offset().top;
	let s3top = $('.s3').offset().top;
	let s3banner = s3top + $('.title_box').height();
	let sideNav01 = $('.side_nav01').offset().top;
	let sideNav02 = $('.side_nav02').offset().top;
	let sideNav03 = $('.side_nav03').offset().top;
	let sideNav04 = $('.side_nav04').offset().top;
	if(sideNav01 <= s1bottom){
		$('.side_nav01').removeClass('black');
		$('.side_nav01').addClass('white');
	}else if(sideNav01<s3banner&&sideNav01>=s3top){
		$('.side_nav01').removeClass('black');
		$('.side_nav01').addClass('white');
	}else{
		$('.side_nav01').removeClass('white');
		$('.side_nav01').addClass('black');
	}

	if(sideNav02 <= s1bottom){
		$('.side_nav02').removeClass('black');
		$('.side_nav02').addClass('white');
	}else if(sideNav02<s3banner&&sideNav02>=s3top){
		$('.side_nav02').removeClass('black');
		$('.side_nav02').addClass('white');
	}else{
		$('.side_nav02').removeClass('white');
		$('.side_nav02').addClass('black');
	}

	if(sideNav03 <= s1bottom){
		$('.side_nav03').removeClass('black');
		$('.side_nav03').addClass('white');
	}else if(sideNav03<s3banner&&sideNav03>=s3top){
		$('.side_nav03').removeClass('black');
		$('.side_nav03').addClass('white');
	}else{
		$('.side_nav03').removeClass('white');
		$('.side_nav03').addClass('black');
	}

	if(sideNav04 <= s1bottom){
		$('.side_nav04').removeClass('black');
		$('.side_nav04').addClass('white');
	}else if(sideNav04<s3banner&&sideNav04>=s3top){
		$('.side_nav04').removeClass('black');
		$('.side_nav04').addClass('white');
	}else{
		$('.side_nav04').removeClass('white');
		$('.side_nav04').addClass('black');
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

$('.viewall').on('click', function () {
	if($('header').hasClass('white')){
		$('header').removeClass('white');
		$('header').addClass('black');
		$('.viewall_menu').addClass('active');
	}else{
		$('header').removeClass('black');
		$('header').addClass('white');
		$('.viewall_menu').removeClass('active');
	}
});

// sideNav 클릭시 이동
$('.side_nav ul li').on('click', function (e) {
	e.preventDefault();

	var target = $(this).children('a').attr('href');
	if($(this).hasClass('side_nav04')){
		var target_pos = $('.a3').offset().top + $('.a3').height();
	}else{
		var target_pos = $(target).offset().top;
	}

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
	console.log(this);
	var target = $(this).children('a').attr('href');
	if($(this).children('a').hasClass('tab03')){
		var target_pos = $('.a3').offset().top + $('.a3').height();
	}else{
		var target_pos = $(target).offset().top;
	}

	$('html,body').stop().animate({
		scrollTop: target_pos
	}, 700, 'swing');
});