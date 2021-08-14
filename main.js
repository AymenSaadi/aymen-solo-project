
function verify(array){
	var array=[{"temp":'The temperature is ' +' '+ 45 + ' ' +'degre',
	        "Wind" : 'Wind is'+' ' + 6 +  'km/h',
	        "Rain" :'Rain is'+' ' + 0 +  'mm', 
			"picture":"egypt.jpeg",
			"name":"Egypt",
			"alert":"It's sunny"
		    },
			{"temp":'The temperature is '+' ' + 8 + ' ' +'degre',
			"Wind" : 'Wind is'+' ' + 9 +  'km/h',
	        "Rain" : 'Rain is'+ ' ' + 300 +  'mm', 
			"picture":"france.jpeg",
			"name":"France",
			"alert":"It's rainy"
		    },
		    {"temp":'The temperature is'+' ' + 36+ ' ' +'degre',
		    "Wind" : 'Wind is'+ ' '+ 3 + 'km/h',
	        "Rain" : 'Rain is' +' '+ 0 +  'mm',
			"picture":"germany.jpeg", 
			"name":"Germany",
			"alert":"Enjoy your day"
		    },
		     {"temp":'The temperature is '+' ' + 3 + ' ' +'degre',
		    "Wind" :'Wind is' +' '+ 18 +  'km/h',
	        "Rain" : 'Rain is'+' '+ 500 +  'mm',  
			"picture":"italy.jpeg",
			"name":"Italy",
			"alert":"Stay at home"
		    },
		    {"temp":'The temperature  is '+' '+ 9 + ' ' +'degre',
		    "Wind" :'Wind is'+' ' + 7 +  'km/h',
	        "Rain" :'Rain is'+' '+ 350 +  'mm', 
			"picture":"london.jpeg",
			"name":"London",
			"alert":"It's rainy"
		    },
		    {"temp": 'The temperature degre is'+ ' '+ 0+ ' ' +'degre',
		    "Wind" :'Wind is'+' ' + 25 +  'km/h',
	        "Rain" :'Rain is'+' '+ 300 +  'mm',
			"picture":"usa.jpeg",
			"name":"Usa",
			"alert":"Stay at home we are in dangerous situation"
		    },
		     {"temp": 'The temperature degre is'+ ' '+ 45+ ' ' +'degre',
		    "Wind" :'Wind is'+' ' + 4 +  'km/h',
	        "Rain" :'Rain is'+' '+ 0 +  'mm',
			"picture":"tunisia.jpg",
			"name":"Tunisia",
			"alert":"It's sunny"
		    }

		    ];
	var country=$('#input').val()
	for(var i=0;i<array.length;i++){
		if(array[i].name===country){
			$("#con").html('');
			
				var $image=array[i].picture
			$("#con").append(`<img src=${$image} class='img' >`)
			$("#dis").html('');
			var $text =array[i].alert;
			var $temp=array[i].temp;
			var $Wind=array[i].Wind;
			var $name=array[i].name;
			var $Rain=array[i].Rain;
            $("#dis").append(`<ul><li>${$name}</li><li>${$temp}</li><li>${$Wind}</li><li>${$Rain}</li><li>${$text}</li></ul>`)
			return 0;
		}
	
	
		
	}
	alert("sorry your country does not exist in our data");
}
