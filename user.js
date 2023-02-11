var username=undefined;
var cookies=(document.cookie).split(";");
username = cookies.find((ele)=>{
    ele=ele.trim();

    if(ele.startsWith("userName"))
    {
        
        return ele;
    }
})

console.log("User "+username)


if(username)
{
    username=username.split("=")[1];
    let auserLogin=document.getElementById("userLogin");
    auserLogin.href="./user.html";
 
    auserLogin.innerText=username;
}
