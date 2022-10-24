$(document).ready(function () {
	// HAMBURGER MENU
	$('.menu-wrapper').on('click', function () {
		$('.hamburger-menu').toggleClass('animate');
		$('.mobile-menu').toggleClass('active');
	});
	// SWITCHER
	$(".team__card__btn").on('click', function () {
		if (!$(this).parent().parent().attr("data-disabled")) {
			$(this).parent().children().each(function () {
				$(this).removeClass("chosen");
			});
			$(this).addClass("chosen");
		}
	});
	// POP-UP
	$(".blue_button").on('click', function () {
		$(".popup-main").show(100);
	});
	$(".banner__content__btn-1").on('click', function () {
		$(".popup-main").show(100);
	});
	$(".popup__close-icon").on('click', function () {
		$(".popup-main").hide(100);
	});
	$(document).mouseup(function (e) {
		var container = $(".popup-container");
		if (e.target != container[0] && !container.has(e.target).length) {
			$(".popup-main").hide();
		}
	});
	// OTHER LANGUAGES
	$(".header__lang-changer").on('click', function () {
		$(this).find(".header__lang-changer__other-lang").slideToggle();
	});
	$(".header__lang-changer__lang").on('click', function () {
		var langs = ["Ru", "En", "Fr"];
		var chosenLang = $(this).text();

		$(".header__lang-changer__selected").text(chosenLang);
		index = langs.indexOf(chosenLang);
		if (index > -1) langs.splice(index, 1);
		$(".header__lang-changer__lang:eq(0)").text(langs[0]);
		$(".header__lang-changer__lang:eq(1)").text(langs[1]);
		$(".header__lang-changer__lang:eq(2)").text(langs[0]);
		$(".header__lang-changer__lang:eq(3)").text(langs[1]);
	});
});


[].forEach.call(document.querySelectorAll('img[data-src]'), function (img) {
	img.setAttribute('src', img.getAttribute('data-src'));
	img.onload = function () {
		img.removeAttribute('data-src');
	};
});