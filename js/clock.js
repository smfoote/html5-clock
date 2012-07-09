(function() {
  var hours, minutes, seconds;
  function updateHours () {
    var hourHand = document.getElementById('hour-hand');
    var clockHour = (hours) % 12 + (minutes/60);
    rotateHand(hourHand, (clockHour*5));
  }

  function updateMinutes () {
    var minuteHand = document.getElementById('minute-hand');
    rotateHand(minuteHand, minutes);
  }

  function updateSeconds () {
    var secondHand = document.getElementById('second-hand');
    rotateHand(secondHand, seconds);
  }

  function syncTime () {
    var d = new Date();
    seconds = d.getSeconds();
    minutes = d.getMinutes();
    hours = d.getHours();
  }

  function rotateHand(hand, unit) {
    deg = (unit * 6) + 'deg';
    hand.style.webkitTransform = 'rotate('+deg+')';
  }

  function setTime () {
    seconds += 1;
    
    // Sync time and update the minute hand every minute
    if (seconds % 60 == 0) {
      syncTime();
      updateMinutes();
      // Make the hour hand move every minute;
      updateHours();
    }

    // Update the second hand every second.
    updateSeconds();
    setTimeout(setTime, 1000);
  }

  function init () {
    syncTime();
    updateHours();
    updateMinutes();
    updateSeconds();
    setTime();
  }
  init();
})();
