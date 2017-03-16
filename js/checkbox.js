// these checkers check the checkbox value, and then check all the checkboxs with the same value

// rattata checker
$("input[value='rattata'][type='checkbox']").change(function(){	
	$("input[value='rattata'][type='checkbox']").prop("checked", $(this).prop("checked"));
});

// pikipek checker
$("input[value='pikipek'][type='checkbox']").change(function(){	
	$("input[value='pikipek'][type='checkbox']").prop("checked", $(this).prop("checked"));
});

// yungoos checker
$("input[value='yungoos'][type='checkbox']").change(function(){	
	$("input[value='yungoos'][type='checkbox']").prop("checked", $(this).prop("checked"));
});
