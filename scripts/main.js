/*jslint browser:true */

//
// Function to look for items visible within a certain parent
//
var isVisible = function (elements, parent) {
    "use strict";

    var parentPosition;
    var visibleElements = [];
    var slidePosition;
    var slideMinPosition;
    var slideIsVisible;

    if (elements.length === 0) {
        return false;
    }

    // Map out the parent container to compare the child elements to
    parentPosition = parent.getBoundingClientRect();

    // Add contingency to the left location as in certain viewports the value returned is not quite correct
    slideMinPosition = parentPosition.left - 1;

    // Loop through each element to see if it is within the visible range
    elements.forEach(function (el) {
        slidePosition = el.getBoundingClientRect();

        // If the position left is between the parent's left & right boundries it's within it's visible area
        slideIsVisible = (slidePosition.left >= slideMinPosition && slidePosition.left < parentPosition.right);

        if (slideIsVisible) {
            visibleElements.push(el);
        }
    });

    return visibleElements;
};

// Select the elements within a particular instance that we want to look for
var container = document.getElementById("1468511901461");
var elements = container.querySelectorAll(".slide");

var result = isVisible(slides, slides[0].parentNode.parentNode);
