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
    url: 'http://first-ajax-api.herokuapp.com/pong',
    method: 'GET',
    dataType: 'text'
  }).always(function (responseData) {
    console.log("Hey the request finished!");
    // getStep3456Button.innerText += "Request failed, we will try to fix it";
    // console.log(getStep3456Button.innerText);
    });
  });

});
