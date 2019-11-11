window.sr =  ScrollReveal({reset: false});
sr.reveal('.homeText', { duration: 1000,
                         origin: 'bottom',
                         distance: '45px'}, 70);
sr.reveal('.nextText', { duration: 500,
                         origin: 'bottom',
                         distance: '45px',
                         viewFactor: 0.6}, 40);
sr.reveal('.skillText', {duration: 500,
                        origin: 'bottom',
                        distance: '45px',
                        viewFactor: 0.7}, 40);
sr.reveal('.myWork', {duration: 500,
                      origin: 'right',
                      viewFactor: 0.5}, 100);
sr.reveal('.myProjects', {duration: 500,
                         origin: 'right',
                         viewFactor: 0.5}, 100);
sr.reveal('.myWeb', {duration: 500,
                    origin: 'right',
                    viewFactor: 0.5}, 100);

$(document).ready(function() {
    // Transition effect for navbar
    $(window).scroll(function() {
      // checks if window is scrolled more than 175px, adds/removes solid class
      if($(this).scrollTop() > 175) {
          $('#myNavbar').addClass('solid');
      } else {
          $('#myNavbar').removeClass('solid');
      }
    });
});
