window.$ = window.jQuery = require('jquery');

$(function(){
    $.ajax({
        url: 'http://192.168.36.106:3000/related-news',
        mode: 'cors',
        type: 'GET',
        // data: {
        //     order_flg: 1
        // }
    })
    .done( (data) => {
        for (key in data) {
            $('.news' + [key] + ' .url').attr("href", data[key].url);
            $('.news' + [key] + ' .image').attr("src", "/images/" + data[key].image);
            $('.news' + [key] + ' .category').text(data[key].category.name);
            $('.news' + [key] + ' .title').text(data[key].title);
            $('.news' + [key] + ' .date').text(data[key].createdAt);
        }
    })
    .fail( (data) => {
        console.log('fail');
    })
    .always( (data) => {
        console.log('always');
    });
});