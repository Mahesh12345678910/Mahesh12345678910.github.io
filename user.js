
let username=undefined;
let cookies=(document.cookie).split(";");
username = cookies.find((ele)=>{
    ele=ele.trim();

    if(ele.startsWith("userName"))
    {
        
        return ele;
    }
}).split("=")[1]

if(username)
{
    let auserLogin=document.getElementById("userLogin");
    auserLogin.href="./user.html";
    auserLogin.innerText=username;   
}