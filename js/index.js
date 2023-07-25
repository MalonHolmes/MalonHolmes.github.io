// when the window loads/reloads the page it will reset the scroll position to the top
window.onbeforeunload = function() {
    // reset the scroll position
    window.scrollTo(0, 0);
};
