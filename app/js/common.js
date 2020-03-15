// табы
$('ul.tabs').on('click', 'li:not(.active)', function () {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs-wrapper').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});


// слайдер
$('.workers-slider').slick({
    slidesToShow: 5,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 460,
            settings: {
                slidesToShow: 2,
            }
        }

    ]
});

// отправка заявок на почту
$(".form").submit(function () {
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()
    }).done(function () {
        $(this).find("input").val("");
        alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
        $(".form").trigger("reset");
    });
    return false;
});

$("[name='phone']").mask("+7(999) 999-9999");