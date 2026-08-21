(function ($) {

    $.fn.gameSlideshow = function () {

        return this.each(function () {

            const slideshow = $(this);
            const slides = slideshow.find(".slide");

            let currentSlide = 0;

            slides.hide();
            slides.eq(currentSlide).show();

            function showSlide(index) {

                slides.hide();
                slides.eq(index).fadeIn(400);

            }

            slideshow.find(".next-slide").on("click", function () {

                currentSlide++;

                if (currentSlide >= slides.length) {
                    currentSlide = 0;
                }

                showSlide(currentSlide);

            });

            slideshow.find(".previous-slide").on("click", function () {

                currentSlide--;

                if (currentSlide < 0) {
                    currentSlide = slides.length - 1;
                }

                showSlide(currentSlide);

            });

        });

    };

})(jQuery);