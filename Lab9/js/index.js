jQuery(document).ready(function ($) {     //пока страница не прогрузилась скрипт не заработает
	var slideCount = $('#slider ul li').length;   //счетчик
	var slideWidth = $('#slider ul li').width(); 
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;  
	
	$('#slider').css({ width: slideWidth, height: slideHeight });     //ссылка на цсс
	
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });  //ссылка на след пред изображение
	
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul'); //контейнер, в который вставляется содержимое
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');//перемещает все элементы набора jQuery в конец содержимого каждого элемента
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {    //стрелочка назад
        moveLeft();
    });

    $('a.control_next').click(function () {  //вперед
        moveRight();
    });

});