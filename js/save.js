var i, checkboxes = document.querySelectorAll('input[type=checkbox]');

function save() {
    for (i = 0; i < checkboxes.length; i++) {
        localStorage.setItem(checkboxes[i].value, checkboxes[i].checked); 
    }
}

function load_() {
    for (i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = localStorage.getItem(checkboxes[i].value) === 'true' ? true:false;
    }
} 

// rattata checker
$("input[value='rattata'][type='checkbox']").change(function(){	
	$("input[value='rattata'][type='checkbox']").prop("checked", $(this).prop("checked"));
});
