document.querySelectorAll('.accordion-button').forEach(button => {
  button.addEventListener('click', function() {
    const parent = button.closest('.accordion');
    const allButtons = parent.querySelectorAll('.accordion-button');
    const allCollapses = parent.querySelectorAll('.accordion-collapse');

    allButtons.forEach(btn => {
      if (btn !== button) btn.classList.add('collapsed');
    });
    allCollapses.forEach(collapse => {
      if (collapse !== button.parentElement.nextElementSibling) {
        collapse.classList.remove('show');
      }
    });

    const collapse = button.parentElement.nextElementSibling;
    const isOpen = collapse.classList.contains('show');
    if (isOpen) {
      button.classList.add('collapsed');
      collapse.classList.remove('show');
    } else {
      button.classList.remove('collapsed');
      collapse.classList.add('show');
    }
  });
});
