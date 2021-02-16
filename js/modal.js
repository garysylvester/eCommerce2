let openButton = document.getElementById('open-modal');
let select = document.getElementById('event_select');

openButton.addEventListener('click', function() {
  MicroModal.show('modal-1');
});

select.addEventListener('change', function() {
  let nextModalId = this.value;
  MicroModal.close('modal-1');
  MicroModal.show('event-modal-' + nextModalId);
});