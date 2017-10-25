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
      console.log(formInputs);
    });
  }

  function addPaceCalculator() {
    const calculatePaceForm = document.getElementById('pace-form');
    calculatePaceForm.addEventListener('submit', function(event) {
      calculatePace(event, formInputs.time, formInputs.distance)
    });
  }
  
  function calculatePace(event, time, distance) {
    const paceMinutes = Math.floor(time / distance.length);
    const paceSecondsNum = Math.round(((time / distance.length) - paceMinutes) * 60);
    const paceSeconds = paceSecondsNum.toString().length === 2 ? paceSecondsNum : `0${paceSecondsNum}`;
    return `${paceMinutes}:${paceSeconds}`;
  }
  
  
})();
