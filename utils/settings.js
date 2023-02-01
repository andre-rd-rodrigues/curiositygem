const DOMAIN_URL = "https://www.andrerodrigo.com";

const READ_MORE_LABEL = "read more";

const ARTICLES_VISIBLE_LIMIT = 6;

const SLIDER_SETTINGS = {
  speed: 1000,
  autoplaySpeed: 4000,
  autoplay: true,
  infinite: true,
  draggable: true,
  dots: false,
  slidesToShow: 3,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 2,
        arrows: false,
        autoplaySpeed: 9000
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        arrows: false,
        autoplaySpeed: 9000
      }
    }
  ]
};

export { DOMAIN_URL, READ_MORE_LABEL, ARTICLES_VISIBLE_LIMIT, SLIDER_SETTINGS };
