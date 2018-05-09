$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var email = $("input#email").val();
            var phone = $("input#phone").val();
            var message = $("textarea#message").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            
            $.ajax({
                url: "/email_sender",
                type: "POST",
                data: {
                    name: name,
                    phone: phone,
                    email: email,
                    message: message
                },
                dataType:"text",
                cache: false,
                success: function(data) {
	                var data = JSON.parse(data);
					
					if(data.result){
						alert_message('TRUE', "<strong>硫붿씪�꾩넚�� �깃났�섏��듬땲��. �뺤씤 �� �곕씫�쒕━寃좎뒿�덈떎!</strong>");
					}
					else {
						alert_message('FALSE', "<strong>二꾩넚�⑸땲��. " + firstName + "��</strong>, 硫붿씪�꾩넚�� �ㅽ뙣�섏��듬땲��!");
					}
                },
                error: function() {
	                alert_message('FALSE', "<strong>二꾩넚�⑸땲��. " + firstName + "��</strong>, 硫붿씪�꾩넚�� �ㅽ뙣�섏��듬땲��!");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});

function alert_message(result, text){
	if(result == 'TRUE'){
		// Success message
		$('#success').html("<div class='alert alert-success'>");
	    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
	        .append("</button>");
	    $('#success > .alert-success')
	        .append("<strong>" + text + "</strong>");
	    $('#success > .alert-success')
	        .append('</div>');
	
	    //clear all fields
	    $('#contactForm').trigger("reset");
	}
	else if(result == 'FALSE'){
		// Fail message
		$('#success').html("<div class='alert alert-danger'>");
        $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
        $('#success > .alert-danger').append(text);
        $('#success > .alert-danger').append('</div>');
        //clear all fields
        $('#contactForm').trigger("reset");
	}
}