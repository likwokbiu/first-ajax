document.addEventListener("DOMContentLoaded", function() {

  /* Your code goes here */
  var request = $.ajax({
  url: 'http://first-ajax-api.herokuapp.com/',
  method: 'GET'
  });

  var getStep12Button = document.getElementById('step12');
  getStep12Button.addEventListener('click', function() {
    var request = $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/',
    method: 'GET'
    });
  });

  var getStep3456Button = document.getElementById('step3456');
  getStep3456Button.addEventListener('click', function() {
    var request = $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/ping',
    method: 'GET',
    dataType: 'text'
    }).done(function (responseData) {
    console.log(responseData);
    getStep3456Button.innerText += responseData;
    console.log(getStep3456Button.innerText);
    });
  });

});
