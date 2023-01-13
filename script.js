$(function () {
    $(window).on('scroll', function () {

        if ($(window).scrollTop() > 50) {
            $('.navbar1').addClass('hover1');
            $('.navbar1').animate({ height: "90px" }, 500);
            $('.navbar1').stop()

        } else {

            $('.navbar1').removeClass('hover1');
            $('.navbar1').animate({ height: "150px" }, 500);

        }
    });

});

$(function () {
    num = 1
    $("button").click(function () {
        num = num + 1
        if (num == 2) {
            $(".navbar1").addClass('button-animate');
            $('.navbar1').animate({ height: "300px" }, 500);
        }
        else {
            $(".navbar1").removeClass('button-animate');
            num = num - 2;
        }
        $(window).on('scroll', function () {
            if (num == 2) {
                jQuery('button').click();
                $(".navbar1").removeClass('button-animate');
                num = num - 1
            }
        });
        /*if($('.nav-link').click()===true)
        {
            jQuery('button').click();
        }*/

    });

});




