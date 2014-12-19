$(document).ready(function(e){
	$("#loadBtn").click(function(e){
		$.getJSON('http://10.0.2.2/dimsumapp/dimsums/index.json', function(data){
			console.log(data);
			var dimsums = data.dimsums;
			var types = data.types;

			$.each(dimsums, function(i, dimsum){
				console.log(dimsum);
				$(".table tbody").append('<tr>'
					+'	<td>'+dimsum.Dimsum.id+'</td>'
					+'	<td>'+dimsum.Dimsum.name+'</td>'
					+'	<td>'+dimsum.Dimsum.stock+'</td>'
					+'	<td>'+types[dimsum.Dimsum.type_id]+'</td>'			
					+'<tr>');
			});
		});
	
	});
	
	//
});