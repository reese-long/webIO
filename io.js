var a = true;

$(document).ready(function(){
	$('ledButton').on('click', function(){
		for(var i = 0 ; i<5; i++){
		rpio.write(3,rpio.HIGH)
		rpio.sleep(1);
		rpio.write(3,rpio.LOW)
		rpio.sleep(1);
		}

	})
})