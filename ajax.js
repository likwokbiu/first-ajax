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

});
