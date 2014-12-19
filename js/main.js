$(document).ready(function(){
	'use strict';
	setTimeout(function(){
		$.ajax({
			url: 'https://cohesiondata.ec.europa.eu/resource/ujd7-ywyx.json?$offset=0'
		}).done(function(data){
			$('#depressingTable').append('<tbody>');
			$.each(data, function(index, value){
				$('#depressingTable').append('<tr><td>'+index+'</td><td>'+ value.nuts_code +'</td><td>'+ value.nuts_name +'</td><td>'+ value.unemployment_rate_2012 +'</td></tr>');
			});
			$('#depressingTable').append('</tbody>');
			$('#depressingTable tbody').sortable().disableSelection();
		}).fail(function(){
			$('#depressingTable tr').append('<tr><td>Something went wrong!</td><td> :( </td><td> :( </td><td> :( </td></tr>');
		});
	}, 7000);
});