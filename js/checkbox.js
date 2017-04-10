//Keep all checkboxes for the same Pokemon species synchronized:
$("input[type='checkbox']").change(function(){	
	var pkmn = $(this).val();
	$("input[value='" + pkmn + "'][type='checkbox']").prop("checked", $(this).prop("checked"));
});