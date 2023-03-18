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
        arrows: true,
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

export { SLIDER_SETTINGS };
