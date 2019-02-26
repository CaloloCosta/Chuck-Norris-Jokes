window.onload = getJoke;
document.getElementById('button').addEventListener('click',getJoke);
/*
function getJoke(){
  const xhr = new XMLHttpRequest();
  xhr.open('GET','https://api.icndb.com/jokes/random',true);
  xhr.onload = function() {
    if(this.status === 200){
      let response = JSON.parse(this.responseText);
      if(response.type === 'success'){
        document.querySelector("#joke").innerHTML = response.value.joke;
      }
    }
  }
  xhr.send();
}*/

// get the data using async function
class Request{
  async getData(url){
    const response = await response();
    const data = response.json();
    if(data.type === 'success')
      return data;
    return null;
  }
}
function getJoke(){
  const r = new Request;
r.getData('https://api.icndb.com/jokes/random')
.then(data =>{
   document.querySelector("#joke").innerHTML = data.value.joke;
})
.catch(e => console.log(e));

console.log("async working");
}

