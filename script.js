const accessKey = "n1XTeq2BY_hc0ThlABcgHObbpxNidETPd37B1QNsYVc"

const secretKey = "x115u-kVbQG7DKfwbyCk-D7fNQZ6cQuVeX6wYuNrZLE"
const form = document.querySelector("form")
const input = document.getElementById("searchinp")
const out = document.querySelector(".output")
const load = document.getElementById("load")

let page = 1
let inputData = ""
async function search() {
    inputData = input.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
    
    try {
      const res = await fetch(url);
      const data = await res.json();
  
      if (data.results && data.results.length > 0) {
        const results = data.results;
  
        if (page === 1) {
          out.innerHTML = "";
        }
  
        results.forEach((result) => {
          const box = document.createElement("div");
          box.classList.add("imgbox");
          
          const img = document.createElement("img");
          img.src = result.urls.small;
          img.alt = result.alt_description;
          
          const imgtxt = document.createElement("div");
          imgtxt.classList.add("imgtxt");
          imgtxt.innerHTML = result.alt_description;
  
          box.appendChild(img);
       
          
          out.appendChild(box);
        });
  
        page++;
  
        if (page > 1) {
          load.style.display = "block";
        }
      } else {
        console.log("No results found");
      }
    } catch (error) {
      console.log("An error occurred:", error);
    }
  }
  
form.addEventListener("submit",(event)=>{
    event.preventDefault()
    page=1
    search()
})

load.addEventListener("click",()=>{
    search()
})

function darkmode(f){
  let dark = document.getElementById("dark")
  let body = document.getElementById("body")

  if(f === 0){
    dark.setAttribute("onclick","darkmode(1)")
    body.style.backgroundColor="black"
    dark.style.backgroundColor ="white"
    dark.style.color = "black"
  }
  if(f === 1){
    dark.setAttribute("onclick","darkmode(0)")
    body.style.backgroundColor="white"
    dark.style.backgroundColor="black"
    dark.style.color = "white"
  }

}