// const API_URL="https://api.imgflip.com/get_memes"
const API_URL="https://api.adviceslip.com/advice"
// const API_URL="https://picsum.photos/v2/list"

 //Creating the content
function create(){
   
    let root=document.getElementById("root");
    root.innerHTML=`<h1 class="head"> A Peice of Advice for a Day </h1>
    <br><br>
    <button type="button" class="btn button1" onclick="getAdvice()">Get an Advice</button>
    <div id="msg"class="col"></div>
    `
}

//function to display the random advice
async function getAdvice() {
    try {
        let res=await fetch(API_URL);
        let data = await res.json();
        if(res.status){
           let message=document.getElementById("msg")
            message.innerHTML=" ";
            message.innerHTML=`<p class="msg">${data.slip.advice}</p>`
            root.append(message);
        }
        
    } catch (error) {
        console.log(error);
    }

}

create();