function data(){
    var userinput=document.getElementById("user")
    var passinput=document.getElementById("pass")
   
    
    valid_user="baka"
    valid_pass="chan"
    if(userinput.value===valid_user&&passinput.value===valid_pass)
        {
            console.log("valid user")
        }
        else{
            console.log("invalid")
        }

}
function mogle(){
    var side = document.getElementById("sidebar")
    if(side.style.display==="block")
        {
            side.style.display = "none"
        }
        else
        {
            side.style.display = "block"   
        }
}
function add(){
    var num = [10,20,40,6,38]
    var sum = 0
    for(var x = 0;x<5;x++)
        {
            sum=sum+num[x]
        }
        console.log(sum)
}