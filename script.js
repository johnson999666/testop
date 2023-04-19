let touchstartX = 0;
let touchendX = 0;
const slider = document.querySelector('.bb');

slider.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
}, false);

slider.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    if (touchendX < touchstartX) {
        // swiped left
        slider.scrollLeft += slider.offsetWidth;
    }
    
    if (touchendX > touchstartX) {
        // swiped right
        slider.scrollLeft -= slider.offsetWidth;
    }
}
