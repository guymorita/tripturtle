(function(){
  function register() {
    console.log('sending');
    $.ajax({
        type: 'POST',
        url: 'https://us9.api.mailchimp.com/2.0/lists/subscribe',
        data: {
          email: {
            email: $('form .input-email').val()
          },
          apikey: '4fe42013c37fdc6606e3069d080cacc5-us9',
          id: 'bca808313d',
          merge_vars: {
            address: $('form .input-destination').val()
          }
        },
        cache       : false,
        crossDomain: true,
        dataType: 'jsonp',
        contentType: "application/json; charset=utf-8",
        error       : function(err) { console.log('sucking it'); },
        success     : function(data) {
            if (data.result != "success") {
                // Something went wrong, do something to notify the user. maybe alert(data.msg);
            } else {
                console.log('worked');
            }
        }
    });
  }
  $('form button').click(function(e){
    e.preventDefault();
    register();
  });
}())