$( document ).ready(function() {

	var button = $('button[type="submit"]');  
	var inpName = $('input[type="text"]');
	var inpPass = $('input[type="password"]');
	var nameError = inpName.siblings('span');
	var passError = inpPass.siblings('span');

	button.on('click', function(e) { 

		var minNumberofChars = 8;
		var reg = /(?=.*[0-9]){3,}(?=.*[!@#$%^&*])/i;
		var password = inpPass.val();

    	if (inpName.val().length < 1){ 
    		e.preventDefault() 
    		nameError.show();
    	} else{
    		nameError.hide();
    	}

    	if( inpPass.val().length < minNumberofChars){
    		e.preventDefault(); 
    		passError.show();
    	} else if(!reg.test(password)) {
	        e.preventDefault(); 
	        passError.show();
	    } else{
			passError.hide();  
    	}
	});
 
});
