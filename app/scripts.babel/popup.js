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
  }

  function watchTimeForm() {
    const timeForm = document.getElementById('time-input');
    timeForm.addEventListener('keypress', function (event) {
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
    distanceForm.addEventListener('keypress', function () {
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
    paceForm.addEventListener('keypress', function (event) {
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
  
  
  
})();
