window.onload = getJoke;
document.getElementById('button').addEventListener('click',getJoke);

function getJoke(){
  const xhr = new XMLHttpRequest();
  xhr.open('GET','http://api.icndb.com/jokes/random',true);
  xhr.onload = function() {
    if(this.status === 200){
      let response = JSON.parse(this.responseText);
      if(response.type === 'success'){
        document.querySelector("#joke").innerHTML = response.value.joke;
      }
    }
  }
  xhr.send();
}
