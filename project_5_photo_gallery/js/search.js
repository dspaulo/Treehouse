//---Variables---//
const input = document.querySelector('#search');

//---Functions---//
function searchFilter() {
  let userSearch = input.value.toLowerCase();
  let picCaption = document.querySelectorAll('.caption');
  for(let i = 0; i < picCaption.length; i++) {
    let getAnchorTag = document.getElementsByTagName('a');
    for(let i = 0; i < getAnchorTag.length; i++) {
      let getPicText = getAnchorTag[i].getAttribute('data-title');
      if(getPicText.toLowerCase().indexOf(userSearch) > -1) {
        picCaption[i].style.display = 'block';
      } else {
        picCaption[i].style.display = 'none';
      }
    }
  }
}

//---Code---//
input.addEventListener('keyup', searchFilter);