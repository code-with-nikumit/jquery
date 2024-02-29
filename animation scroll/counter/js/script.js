// $(document).ready(function() {
//     // $('.counter').counterUp({
//     //     delay: 10,
//     //     time: 1000
//     // });
var flag = 0;
$(window).scroll(function() {
    if ($(window).scrollTop() >= $(".section-blog").offset().top - 100) {
        if (flag == 0) {
            flag = 1;
            const counters = document.querySelectorAll(".counter");

            counters.forEach((counter) => {
                counter.innerText = "0";
                const updateCounter = () => {
                    const target = +counter.getAttribute("data-target");
                    const count = +counter.innerText;
                    const increment = target / 200;
                    if (count < target) {
                        counter.innerText = `${Math.ceil(count + increment)}`;
                        setTimeout(updateCounter, 1);
                    } else counter.innerText = target;
                };
                updateCounter();
            });
        }
    }
});



// var counted = 0;
// $(window).scroll(function() {

//     var oTop = $('#scorllhash').offset().top - window.innerHeight;
//     if (counted == 0 && $(window).scrollTop() > oTop) {
//         alert(1)
//         $('.counter').each(function() {
//             var $this = $(this),
//                 countTo = $this.attr('data-count');
//             $({
//                 countNum: $this.text()
//             }).animate({
//                     countNum: countTo
//                 },

//                 {

//                     duration: 2000,
//                     easing: 'swing',
//                     step: function() {
//                         $this.text(Math.floor(this.countNum));
//                     },
//                     complete: function() {
//                         $this.text(this.countNum);
//                         //alert('finished');
//                     }

//                 });
//         });
//         counted = 1;
//     }

// });