function timer(deadLine, timerSelector) {
  // TIMER

  function getTimeRemaining(endTime) {
    const __t = Date.parse(endTime) - Date.parse(new Date());
    const days = Math.floor(__t / (1000 * 60 * 60 * 24));
    const hours = Math.floor((__t / (1000 * 60 * 60) % 24));
    const minutes = Math.floor((__t / (1000 * 60) % 60));
    const seconds = Math.floor((__t / 1000) % 60);

    return {
      'total': __t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    }
  }

  function addZero(time) {
    if (time >= 0 && time < 10) {
      return `0${time}`;
    } else {
      return time;
    }
  }

  function setClock(selector, endTime) {
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timerInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const __t = getTimeRemaining(endTime);

      days.innerHTML = addZero(__t.days);
      hours.innerHTML = addZero(__t.hours);
      minutes.innerHTML = addZero(__t.minutes);
      seconds.innerHTML = addZero(__t.seconds);

      if (__t.total <= 0) {
        clearInterval(timerInterval);

        days.innerHTML = '00';
        hours.innerHTML = '00';
        minutes.innerHTML = '00';
        seconds.innerHTML = '00';
      }
    }
  }

  setClock(timerSelector, deadLine);
}

export default timer;