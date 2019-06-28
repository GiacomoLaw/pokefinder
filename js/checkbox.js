// Keep all checkboxes for the same Pokemon species synchronized:
// Boxes with the same value are ticked when one box with that value is ticked

$("input[type='checkbox']").change(function () {
	var pkmn = $(this).val();
	$("input[value='" + pkmn + "'][type='checkbox']").prop("checked", $(this).prop("checked"));
});
