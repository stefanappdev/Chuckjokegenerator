



function getRandomJoke(){


try {
    let response=fetch('https://api.chucknorris.io/jokes/random')
    .then(res=>{
        if (!res.ok){

           throw Error(response.StatusText);
            }
        return res.json()

    })
    
    .then(jsonData=>{
       let joke=jsonData.value;
       //console.log(joke)
       let jokeparagraph=document.getElementById('joke');
       jokeparagraph.innerText=joke;
    })

    
   

}
catch(err){
    console.log("Something went wrong...");
    okeparagraph.innerText="Something went wrong..."
}



}





