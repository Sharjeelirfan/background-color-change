const button = document.getElementById("btn")
const body = document.querySelector("body")
const code = document.querySelector("#code")
const img = document.querySelector("#img")
const history = []

button.addEventListener("click" ,()=> {

    let bgColor = Math.ceil(100000 + Math.random() * 900000) 
    
    let changeCss = body.style.backgroundColor = `#${bgColor}`
    // console.log(a);
    
    
    code.textContent = changeCss

    img.addEventListener("click" , () => {
        navigator.  clipboard.writeText(changeCss)
        
    })

    
    })
    



button.addEventListener("click" ,()=> {

    let bgColor = Math.ceil(100000 + Math.random() * 900000)   
    button.style.backgroundColor = `#${bgColor}`

})



// let b = Math.ceil(Math.random()) 
// let c = Math.ceil(Math.random()) 
// let d = Math.ceil(Math.random()) 
// let e = Math.ceil(Math.random()) 
// let f = Math.ceil(Math.random()) 


// console.log(a); 