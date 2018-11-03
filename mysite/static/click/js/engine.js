speed_click_cats = 1000;
currency = parseInt($('#currency').html());
cats = parseInt($('#cats').html());

// + 1 рубль
$('#plus_button').click(pushbtn);
// Покупка кота
$('#plus_cats_button').click(pushcat);
//Функция добавления котами монет
$('#plus_cats_button').click(counter_cats);
//Улучшение рубля
$('#upgrade_plus').click(push_upgrade_plus);


// Выравнивание цены для котов после перезагрузки стр
if (cats == 0){
  $('#price_cats').html(10);
}
else{
  for(i = 1;i <= parseInt(cats);i++){
    price_cats = parseInt($('#price_cats').html());
    multiply = price_cats + 5 * 1.5;
    $('#price_cats').html(Math.round(multiply));
  }
  cats = parseInt($('#cats').html());

  if(cats >= 10){
    $('#cats_gif').removeClass('d-none').addClass('d-flex');
    $('#left_cat').removeClass('d-none');
  }
  if(cats >= 20){
    $('#center_cat').removeClass('d-none');
  }
  if(cats >= 30){
    $('#right_cat').removeClass('d-none');
  }
}
// Выравнивание upgrade rub
for(j = 1;j <= parseInt(currency);j++){
  price_upgrade_plus = parseInt($('#price_upgrade_plus').html());
  multiply = (price_upgrade_plus + 100) * 3;
  $('#price_upgrade_plus').html(Math.round(multiply));
}
if($('#currency').html() == 2){
  $("#plus_button").attr("src","/static/click/img/tworub.png");
}



$('#cats').bind('select',
  function(){
    alert('Eshe');
  }
);
function pushbtn()
{
  $('#plus_button').css({
    'width': "98%",
    'box-shadow': '0px 0px 4px 0px blue'
  });
  setTimeout("$('#plus_button').css({width: '100%','box-shadow':'0px 0px 0px 0px white'})", 100);
  currency = parseInt($('#currency').html());
  score = parseInt($('#score').html());
  $('#score').html(score + currency);
}
function pushcat()
{
  $('#plus_cats_button').css({'width': "78%"});
  setTimeout("$('#plus_cats_button').css({width: '80%'})", 100);
  score = parseInt($('#score').html());
  price_cats = parseInt($('#price_cats').html());
  if (price_cats <= score)
  {
    $('#score').html(score -= price_cats);
    cats = parseInt($('#cats').html());
    $('#cats').html(cats + 1);
    price_cats = parseInt($('#price_cats').html());
    multiply = (price_cats + 2) * 1.2;
    $('#price_cats').html(Math.round(multiply));
    if(cats+1 == 10){
      $('#cats_gif').removeClass('d-none').addClass('d-flex');
      $('#left_cat').removeClass('d-none');
    }
    if(cats+1 == 20){
      $('#center_cat').removeClass('d-none');
    }
    if(cats+1 == 30){
      $('#right_cat').removeClass('d-none');
    }
  }
  else
  {
    $('#score').css({'color': "red"});
    setTimeout("$('#score').css({'color': 'black'})", 100);
  }
}
function counter_cats()
{
  cats = parseInt($('#cats').html());
  if (cats >= 1)
  {
    // удаляет предыдущие таймеры если они есть, чтобы не работали несколько таймеров одновременно
    try{
      clearInterval(var_counter_cats);
    }
    catch(e){}
    return var_counter_cats = setInterval(catspush,speed_click_cats);
    function catspush(){
      score = parseInt($('#score').html());
      $('#score').html(score + cats);
    }
  }
}
function push_upgrade_plus(){
  $('#upgrade_plus').css({'width': "78%"});
  setTimeout("$('#upgrade_plus').css({width: '80%'})", 100);
  score = parseInt($('#score').html());
  price_upgrade_plus = parseInt($('#price_upgrade_plus').html());
  currency = parseInt($("#currency").html());
  if (price_upgrade_plus <= score)
  {
    $('#score').html(score -= price_upgrade_plus);
    $("#plus_button").attr("src","/static/click/img/tworub.png");
    $("#currency").html(currency + 1);
    multiply = (price_upgrade_plus + 100) * 3;
    $('#price_upgrade_plus').html(Math.round(multiply));
  }
  else
  {
    $('#score').css({'color': "red"});
    setTimeout("$('#score').css({'color': 'black'})", 100);
  }
}
// Сохранение прогресса
function Save()
{
	$.ajax(
		{
			type: "GET",
			url: "/click/save/",
			data:
			{
				'score': $('#score').html(),
        'cats': $('#cats').html(),
				'user_id': $('#user_id').html(),
        'currency': $('#currency').html(),
			},
			dataType: "text",
			cache: false,
				success: function(data)
			{
				score = $('#score').html();
			}
		});
}
// setInterval(Save,3000);
