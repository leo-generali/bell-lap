'use strict';

(function() {
  
  const formInputs = {
    time: 0,
    distance: {
      length: 0,
      unit: 'miles'
    },
    pace: {
      speed: 0,
      unit: 'miles',
      time: 'minutes'
    }
  };

  init();

  function init() {
    watchTimeForm();
    watchDistanceForm();
    watchPaceForm();
    addPaceCalculator();

  }

  function watchTimeForm() {
    const timeForm = document.getElementById('time-input');
    timeForm.addEventListener('keyup', function (event) {
      const keyCode = event.keyCode; 
      if (keyCode >= 48 && keyCode <= 57) {
        formInputs.time = this.value;
      } else if (keyCode === 58 || keyCode == 46) {
        formInputs.time = this.value;        
      } else {
        event.preventDefault();
        return false;
      }
      console.log(formInputs);
    });
  }
  
  function watchDistanceForm() {
    const distanceForm = document.getElementById('distance-input');
    distanceForm.addEventListener('keyup', function () {
      formInputs.distance.length = this.value;
    });

    const distanceUnitForm = document.getElementById('distance-unit-select');
    distanceUnitForm.addEventListener('change', function() {
      formInputs.distance.unit = this.value;
      console.log(formInputs);
    });
  }
  
  function watchPaceForm() {
    const paceForm = document.getElementById('pace-input');
    paceForm.addEventListener('keyup', function (event) {
      const keyCode = event.keyCode; 
      if (keyCode >= 48 && keyCode <= 57) {
        formInputs.pace.speed = this.value;
      } else if (keyCode === 58 || keyCode == 46) {
        formInputs.pace.speed = this.value;        
      } else {
        event.preventDefault();
        return false;
      }
      console.log(formInputs);
    });

    const paceUnitForm = document.getElementById('pace-unit-select');
    paceUnitForm.addEventListener('change', function() {
      formInputs.pace.unit = this.value;
    });
  }

  function addPaceCalculator() {
    const calculatePaceForm = document.getElementById('pace-form');
    const paceForm = document.getElementById('pace-input');
    calculatePaceForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const pace = calculatePace(formInputs.time, formInputs.distance);
      paceForm.value = pace;
    });
  }
  
  function calculatePace(time, distance) {
    const paceSeconds = returnPace(time);
    // const paceMinutes = returnPace(time.toString());
    // console.log(paceMinutes);
    // const paceSecondsNum = Math.round(((time / distance.length) - time) * 6);
    // const paceSeconds = paceSecondsNum.toString().length === 2 ? paceSecondsNum : `0${paceSecondsNum}`;
    // console.log(paceSecondsNum, paceSeconds);
    // return `${paceMinutes}:${paceSeconds}`;
  }
  
  function returnPace(timeStr) {
    const timeObject = {
      hours: 0,
      minutes: 0,
      seconds: 0
    };
    console.log(timeStr);

    const re = /[ ,]+/;
    const timeArrHoursMins = timeStr.split(re);
    // const timeArrHoursMins = timeStr.split(':', 2);


    if( timeArr.length === 1 ) {
      timeObject.minutes = parseInt(timeArr[0]); 
    } else {
      timeObject.hours = parseInt(timeArr[0]);
      timeObject.minutes = parseInt(timeArr[1]); 
    }
    
    console.log(timeArr);
    console.log(timeObject);
    // const totalSeconds = (timeObject.hours * 60) + (timeObject.minutes);
    // console.log(totalSeconds);
    // return totalSeconds;

  }
  
})();
