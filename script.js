var touchstartX = 0;
var touchendX = 0;

var slideshow = document.querySelector('.bb');

slideshow.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
}, false);

slideshow.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    handleGesture();
}, false);

function handleGesture() {
    if (touchendX < touchstartX) {
        // swiped left
        nextSlide();
    }

    if (touchendX > touchstartX) {
        // swiped right
        previousSlide();
    }
}

function nextSlide() {
    // Code to display the next slide
}

function previousSlide() {
    // Code to display the previous slide
}
