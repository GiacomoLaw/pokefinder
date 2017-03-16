// rattata checker
$("input[value='rattata'][type='checkbox']").change(function(){	
	$("input[value='rattata'][type='checkbox']").prop("checked", $(this).prop("checked"));
});

// pikipek checker
$("input[value='pikipek'][type='checkbox']").change(function(){	
	$("input[value='pikipek'][type='checkbox']").prop("checked", $(this).prop("checked"));
});
