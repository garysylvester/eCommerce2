// $('input[type="checkbox"]').on('change', function() {
//     $('input[name="' + this.name + '"]').not(this).prop('checked', false);
// });
 
 function platformCheck() {
   if (document.getElementById('eadCheck').checked) {
     document.getElementById('ifEAD').style.display = 'block';
   } else document.getElementById('ifEAD').style.display = 'none';

   if (document.getElementById('steamCheck').checked) {
     document.getElementById('ifSteam').style.display = 'block';
   } else document.getElementById('ifSteam').style.display = 'none';

   if (document.getElementById('playstationCheck').checked) {
    document.getElementById('ifPlaystation').style.display = 'block';
  } else document.getElementById('ifPlaystation').style.display = 'none';

 }

 function joinBuy() {
    if (document.getElementById('joinCheck').checked) {
      document.getElementById('ifJoin').style.display = 'block';
    } else document.getElementById('ifJoin').style.display = 'none';
 
    if (document.getElementById('buyCheck').checked) {
      document.getElementById('ifBuy').style.display = 'block';
    } else document.getElementById('ifBuy').style.display = 'none';
 
  }
 