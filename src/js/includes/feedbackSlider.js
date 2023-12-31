import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const feedbackSlider = () => {
    new Swiper('.feedback-slider', {
        modules: [Navigation, Pagination],
        spaceBetween: 30,
        slidesPerView: 4,
        loop: false,
        // centeredSlides: false,
        observer: true,
        speed: 700,
        observeParents: true,
        watchOverflow: true,
        navigation: {
            nextEl: '.feedback-slider__next',
            prevEl: '.feedback-slider__prev',
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });
}

export default feedbackSlider;