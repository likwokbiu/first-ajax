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
  }).done(function(responseData) {
    console.log("Request suceed: " + responseData)
  }).fail(function() {
    console.log("Request failed, we'll fix it soon!");
  }).always(function() {
    console.log("Hey the request finished!");
    });
  });

  var getStep7Button = document.getElementById('step7');
  getStep7Button.addEventListener('click', function() {
    var request = $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/count',
    method: 'GET'
    }).done(function(responseData) {
      getStep7Button.querySelector('h2').innerText = "Count: " + responseData;
    });
  });

  var getStep8Button = document.getElementById('step8');
  getStep8Button.addEventListener('click', function() {
    var request = $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/time',
    method: 'GET',
    data: {timezone: "Asia/Hong_Kong"}
    }).done(function(responseData) {
      getStep8Button.querySelector('h2').innerText = "Time: " + responseData;
    });
  });

});
