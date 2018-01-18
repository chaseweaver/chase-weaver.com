/* Change logo name based on screen size */
$(window).resize(function() {
    if ($(window).width() < 800) {
        $("#mHome").html("CHASE WEAVER");
    } 
    else {
        $("#mHome").html("CW");
    }
});

/* Apply function to all children of div */
$(document).ready(function() {
    $('#mNav').on('click', '> *', function() {
        var nav = document.getElementById("mNav");
        var drawer = document.getElementById("mIcon");
    
        if (nav.className === "nav") {
            nav.className += " responsive";
            drawer.innerHTML = drawer.innerHTML.replace('expand_more', 'expand_less');
        } else {
            nav.className = "nav";
            drawer.innerHTML = drawer.innerHTML.replace('expand_less', 'expand_more');
        }
    });
});

function expand(element, ignore) {
    var ele = document.getElementById(element);
    var ig = document.getElementById(ignore);
    var ig_child = document.getElementById(ignore.children);

    $(ele).children().filter(':not(ig_child)').slideToggle();

    if (ig_child.innerHTML === "expand_less") {
        ig_child.innerHTML = ig_child.innerHTML.replace('expand_less', 'expand_more');
    } else {
        ig_child.innerHTML = ig_child.innerHTML.replace('expand_more', 'expand_less');
    }
}
