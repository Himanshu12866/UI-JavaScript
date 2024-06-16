const getHoverDirection = function (event) {
    var directions = ["top", "right", "bottom", "left"];
    var item = event.currentTarget;

    // Width and height of current item
    var w = item.offsetWidth;
    var h = item.offsetHeight;

    // Calculate the x/y value of the pointer entering/exiting, relative to the center of the item.
    // Scale (sort of normalize) the coordinate on smallest side to the scale of the longest.
    var x =
      (event.clientX - item.getBoundingClientRect().left - w / 2) *
      (w > h ? h / w : 1);
    var y =
      (event.clientY - item.getBoundingClientRect().top - h / 2) *
      (h > w ? w / h : 1);

    // Calculate the angle to the center the pointer entered/exited
    // and convert to clockwise format (top/right/bottom/left = 0/1/2/3).
    var d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;

    return directions[d];
  };

  document.addEventListener("DOMContentLoaded", function (event) {
    // Loop over items (in a IE11 compatible way).
    var items = document.getElementsByClassName("hover");
    for (var i = 0; i < items.length; i++) {
      // Loop over the registered event types.
      ["mouseenter", "mouseleave"].forEach(function (eventname) {
        items[i].addEventListener(
          eventname,
          function (event) {
            // Retrieve the direction of the enter/leave event.
            var dir = getHoverDirection(event);

            // Reset classes.
            // event.currentTarget.className = 'item hover';
            // > If support for IE11 is not needed.
            // event.currentTarget.classList.remove('mouseenter', 'mouseleave', 'top', 'right', 'bottom', 'left');
            // > If support for IE11 is needed.
            event.currentTarget.classList.remove("mouseenter");
            event.currentTarget.classList.remove("mouseleave");
            event.currentTarget.classList.remove("top");
            event.currentTarget.classList.remove("right");
            event.currentTarget.classList.remove("bottom");
            event.currentTarget.classList.remove("left");

            // Add the event and direction classes.
            // > If support for IE11 is not needed.
            // event.currentTarget.classList.add(event.type, dir);
            // > If support for IE11 is needed.
            event.currentTarget.className += " " + event.type + " " + dir;
          },
          false
        );
      });
    }
  });