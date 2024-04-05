
let cities=["Faisalabad","Karachi","Kashmir","Multan","Lahore"]
// Lower Case
document.getElementById("lowerCase").onclick=function(){
    let lower=document.getElementById("string").innerText.toLowerCase()
    document.getElementById("output").innerText=lower
   }
//    Uppre Case
   document.getElementById("upperCase").onclick=function(){
    let lower=document.getElementById("string").innerText.toUpperCase()
    document.getElementById("output").innerText=lower
   }
//    Cpitalize
document.getElementById("capital").onclick=function(){
    let capital=document.getElementById("string").innerHTML
    let cap='<span style="text-transform:capitalize;">'+capital+'</span>'
   document.getElementById("output").innerHTML=cap
   }
//    Better Formating
document.getElementById("better").onclick=function(){
    if(!document.getElementById("inp").value){
alert("Please Enter a Text in Input Field")
return
    }
    let low =document.getElementById("inp").value.toLowerCase()
    let better='<span style="text-transform:capitalize;">'+low+'</span>'
    document.getElementById("output").innerHTML=better
}
// Print All Cities
document.getElementById("cities").onclick=function(){
    document.getElementById("output").innerHTML=""
    for(let i=0;i<cities.length;i++){
        document.getElementById("output").innerHTML+=cities[i]+"<br>"
    }
   
   }
//    Add a City
document.getElementById("addCity").onclick=function(){
    
    let newCity =document.getElementById("inp").value
    if(document.getElementById("inp").value.length<3){
        alert("Please Enter Your City Correctly in Input Field")
        return
            }
            let cityFirstLetter=newCity.slice(0,1).toUpperCase()
            let cityRemainingLetters=newCity.slice(1).toLowerCase()
            let completeCity=cityFirstLetter+cityRemainingLetters
            // document.getElementById("output").innerHTML=completeCity
            let isCityPresent=false
            for(let i=0; i<cities.length;i++){
if(cities[i]===completeCity){
    isCityPresent=true
    document.getElementById("output").innerHTML='<span style="color:red;font-size:18px;">'+completeCity+'</span>'+'&nbsp; is already present in list'
}
            }
            if(isCityPresent===false){
                cities.push(completeCity)
                let added='<span style="color:green;font-size:18px;">'+completeCity+ "</span>"+"&nbsp; is successfully added"
                document.getElementById("output").innerHTML=added
               }
        
        }
    // Check City
    document.getElementById("checkCity").onclick=function(){
    
        let city =document.getElementById("inp").value
        if(document.getElementById("inp").value.length<3){
            alert("Please Enter Your City Correctly in Input Field")
            return
                }
                let cityFirstLetter=city.slice(0,1).toUpperCase()
                let cityRemainingLetters=city.slice(1).toLowerCase()
                let completeCity=cityFirstLetter+cityRemainingLetters
                // document.getElementById("output").innerHTML=completeCity
                let isCityPresent=false
                for(let i=0; i<cities.length;i++){
    if(cities[i]===completeCity){
        isCityPresent=true
        document.getElementById("output").innerHTML='<span style="color:green;font-size:18px;">'+completeCity+'</span>'+'&nbsp; is present in cities list ❤️'
    }
                }
                if(isCityPresent===false){
                    let added=" 😥&nbsp;"+'<span style="color:red;font-size:18px;">'+completeCity+ "</span>" +" &nbsp;is not found in list;"
                    document.getElementById("output").innerHTML=added
                   }
            
            }
 // Find a word
 document.getElementById("findWord").onclick=function(){
    let inpValue=document.getElementById("inp").value.toLowerCase()
    let string=document.getElementById("string").innerHTML.toLowerCase()
    let find=string.indexOf(inpValue)
    if(find>=0){
    document.getElementById("output").innerHTML='Your word is present at index &nbsp; <span style="color:green;font-size:18px; font-weight:bold">'+find+'</span>'}else{
        document.getElementById("output").innerHTML="Your word &nbsp;"+'<span style="color:red;font-size:18px; font-weight:bold">'+inpValue+"</span>"+"&nbsp; does'nt exist in Original String"
    }
}

// Replace a word
document.getElementById("replaceWord").onclick=function(){
    let string=document.getElementById("string").innerHTML.toLowerCase()
    let word=document.getElementById("inp").value.toLowerCase()
    if(!word){
        alert("Enter a word you wanted to replace")
        return
    }
    let replacing=prompt("enter new word")
    let replaced=string.replaceAll(word,replacing)
    document.getElementById("output").innerHTML=replaced}

// Clear Input
document.getElementById("clearInput").onclick=function(){
    document.getElementById("inp").value=""
   }
// Clear Output
document.getElementById("clearOutput").onclick=function(){
    document.getElementById("output").innerText=""
   }
   