// items lightbox
var items = $('.lightbox-item');.
items.each(function(a, b){
    var item = $(this);

    var title = item.find('h3').text();
    var text = item.attr('data-content');

    item.on(clicked,function(){
        var content = '<div class="lightbox-underlay"></div>';
            content += '<div class="lightbox">';
                content += '<div class="lightbox-content">';
                    content += '<h2>'+title+'</b></h2>';
                    content += '<div class="lightbox-text">';
                        content += text;
                    content += '</div>';
                    content += '<div class="clear"></div>';
                content += '</div>';
                content += '<div class="lightbox-num">';
                    content += '<div class="lightbox-current">'+(a + 1)+'</div>';
                    content += ' / ';
                    content += '<div class="lightbox-length">'+items.length+'</div>'
                content += '</div>';
                content += '<div class="prev waves-effect"></div>';
                content += '<div class="next waves-effect"></div>';
                content += '<div class="close waves-effect"></div>';
            content += '</div>';

        if($('.lightbox').length == 0){
            $('body').append(content);

            var lightboxunder = $('.lightbox-underlay');
            var lightbox = $('.lightbox');

            setTimeout(function(){
                lightboxunder.addClass('active');
                lightbox.addClass('active');

                lightboxunder.on(clicked,function(){
                    lightboxunder.removeClass('active');
                    lightbox.removeClass('active');

                    setTimeout(function(){
                        lightboxunder.remove();
                        lightbox.remove();
                    },310);
                });

                lightbox.find('.close').on(clicked,function(){
                    lightboxunder.removeClass('active');
                    lightbox.removeClass('active');

                    setTimeout(function(){
                        lightboxunder.remove();
                        lightbox.remove();
                    },310);
                });

                lightbox.find('.prev').on(clicked, function(){
                    var prev;
                    if(a < 1){
                        a = items.length - 1;
                    } else {
                        a--;
                    }
                    prev = items.eq(a);

                    var prevtext = prev.attr('data-content');
                    var lighttext = lightbox.find('.lightbox-text');
                    lighttext.stop().animate({
                        'margin-left': '15px',
                        'opacity': '0'
                    },225, function(){
                        lighttext.html(prevtext);

                        lighttext.stop().animate({
                            'margin-left': '0',
                            'opacity': '1'
                        },225);
                    });


                    var prevtitle = prev.find('h3').text();
                    var lighttitle = lightbox.find('h2');
                    lighttitle.stop().animate({
                        'margin-left': '15px',
                        'opacity': '0'
                    },225, function(){
                        lighttitle.html(prevtitle);

                        lighttitle.stop().animate({
                            'margin-left': '0',
                            'opacity': '1'
                        },225);
                    });

                    var lightnum = lightbox.find('.lightbox-num');
                    lightnum.stop().animate({
                        'opacity': '0'
                    },225, function(){
                        lightnum.find('.lightbox-current').html(a + 1);

                        lightnum.stop().animate({
                            'opacity': '1'
                        },225);
                    });
                });

                lightbox.find('.next').on(clicked, function(){
                    var next;
                    if(a + 1 >= items.length){
                        a = 0;
                    } else {
                        a++;
                    }
                    next = items.eq(a);

                    var nexttext = next.attr('data-content');
                    var lighttext = lightbox.find('.lightbox-text');
                    lighttext.stop().animate({
                        'margin-left': '-15px',
                        'opacity': '0'
                    },225, function(){
                        lighttext.html(nexttext);

                        lighttext.stop().animate({
                            'margin-left': '0',
                            'opacity': '1'
                        },225);
                    });


                    var nexttitle = next.find('h3').text();
                    var lighttitle = lightbox.find('h2');
                    lighttitle.stop().animate({
                        'margin-left': '-15px',
                        'opacity': '0'
                    },225, function(){
                        lighttitle.html(nexttitle);

                        lighttitle.stop().animate({
                            'margin-left': '0',
                            'opacity': '1'
                        },225);
                    });

                    var lightnum = lightbox.find('.lightbox-num');
                    lightnum.stop().animate({
                        'opacity': '0'
                    },225, function(){
                        lightnum.find('.lightbox-current').html(a + 1);

                        lightnum.stop().animate({
                            'opacity': '1'
                        },225);
                    });
                });
            },10);
        }
    });
});
