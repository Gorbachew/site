$('[id="like"]').click(click_like);

 function click_like(){
  // Находит первый элемент с ид = артикл_ид и берет его текст. Для получения ид поста
  article_id = $(this).prevAll('#article_id').first().text();
  $.ajax(
    {
      type: "GET",
      url: "/news/addlike/"+article_id+"/",
      data:
      {
        'article_id': article_id,

      },
      dataType: "text",
      cache: false,
      success: function(response)
      {
          $('span:contains("'+article_id+'")').nextAll('#like').html(response);
      }
    });

 }
