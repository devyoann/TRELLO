$(document).ready(function() {

	$('.fa-bookmark').click(function() {
		$(this).toggleClass('fa-bookmark-o');
	});
	$(function() {
		$('.container-tableau').sortable({
			revert: true,
			cursor: 'move',
			placeholder: "ui-state-highlight"
		});
		$('.container-tableau').disableSelection();

		$('.draganddrop').sortable({
			revert: true,
			cursor: 'move',
			placeholder: "ui-state-highlight_2",
			change: function() {
				// alert('ok');
			}
		});
	});
});