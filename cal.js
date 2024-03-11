let string="";
let buttons=document.querySelectorAll('.butt')
let input=document.querySelector('#input')
function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 41&& charCode < 58||charCode===37)
    return true;
      else
    return false;
  }
Array.from(buttons).forEach((button,index)=>{
    button.addEventListener('click',(e)=>{
        value=document.querySelector('input').value
        if(e.target.innerHTML==="AC"){
           string=""
            console.log('string: ', string);
            document.querySelector('input').value=string
        }
        else if(e.target.innerHTML===" ←"){
            value=document.querySelector('input').value
            val=value.split("");
            val.pop()
            string=val.join("")
            document.querySelector('input').value=string
        }
        else if(e.target.innerHTML==="="){
            if(document.querySelector('input').value)
            string=eval(string)
            if(string!==undefined)
            document.querySelector('input').value=string
            else{
                val2=document.querySelector('input').value
                console.log("val2",val2);
                document.querySelector('input').value=eval(val2)
            }    
        }
        else{
            if(string===undefined){
            string=""
            }
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string
        }
        
    })
})
input.addEventListener("keypress", function(event) {    
    if (event.key === "Enter") {
        val2=document.querySelector('input').value
        console.log("val2",val2);
        if(val2)
        document.querySelector('input').value=eval(val2)
    
    }
  });
