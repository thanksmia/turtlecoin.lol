$(document)
  .ready(() => {
    $.get({
      url: 'https://jsonp.afeld.me/?url=https://feed2json.org/convert?url=https://blog.turtlecoin.com/feed.xml',
      json: true,
      success: function(data) {
        $('#blog-feed')
          .html('');

        if (!data.items) return;

        for (var i = 0; i < 3; i++) {
          var article = data.items[i];
          var emText = $($.parseHTML(article.content_html))
            .find('em:first')
            .eq(0)
            .text();

          if (emText.length !== 0) {
            $('#blog-feed').append(`<h5><a href="${article.url}">${article.title}</a></h5><blockquote>${emText}</blockquote>`);
          } else {
            $('#blog-feed').append(`<h5><a href="${article.url}">${article.title}</a></h5>`);
          }
        }
      }
    })
  })