// rattata checker
$("input[value='rattata'][type='checkbox']").change(function(){	
	$("input[value='rattata'][type='checkbox']").prop("checked", $(this).prop("checked"));
});
