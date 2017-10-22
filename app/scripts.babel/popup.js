'use strict';

(function() {
  init();

  const formInputs = {
    time: '',
    distance: {
      length: null,
      type: 'miles'
    },
    pace: null
  };

  function init() {
    watchForms();
  }

  function watchForms() {
    const timeForm = document.getElementById('time-form');
    timeForm.addEventListener('keypress', function (event) {
      if (event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode === 186 || event.keyCode === 190) {
        formInputs.time = this.value;
      } else {
        event.preventDefault();
        return false;
      }
    });
  }
})();