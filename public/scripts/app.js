document.querySelectorAll('.tab').forEach((el) => {
	el.addEventListener('click', (ev) => {
		document.querySelectorAll('.tab--active').forEach(el => el.classList.remove('tab--active'));
		document.getElementById(ev.target.getAttribute('data-tab')).classList.add('tab--active');
		ev.target.classList.add('tab--active');
	});
});

/**
 * Handling of the expand/collapse for hotel details.
 */
document.querySelectorAll('.toggle-details').forEach(el => {
	el.addEventListener('click', (ev) => {
		const row = el.parentElement;
		const isExpanded = row.classList.contains('expanded');
		if (isExpanded) {
			row.classList.remove('expanded');
		} else {
			row.classList.add('expanded');
		}
	});
});

/**
 * Handling of the confirmation dialog
 */

function closeModal() {
	document.getElementById('confirm-modal').classList.remove('open');
}

document.querySelector('.confirm-dialog').addEventListener('keydown', (ev) => {
	if (ev.keyCode === 27 /* ESCAPE */) {
		// Should close the dialog on Escape, that doesn't seem to work, any idea why?
		closeModal();
	}
});

// Whenever a booking button is pressed, show the confirmation modal.
document.querySelectorAll('.booking-button').forEach(el => {
	el.addEventListener('click', ev => {
		// Set the `open` class on the dialog, which will cause it to show up.
		document.getElementById('confirm-modal').classList.add('open');
	});
});

// Whenever the ok or cancel button inside the dialog are clicked, close it.
document.querySelectorAll('#confirm-modal button').forEach(el => {
	el.addEventListener('click', ev => {
		// Remove the open class of the dialog.
		closeModal();
	});
});
