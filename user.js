
let username=undefined;
let cookies=(document.cookie).split(";");
username = cookies.find((ele)=>{
    ele=ele.trim();

    if(ele.startsWith("userName"))
    {
        
        return ele;
    }
})

if(username)
{
    let auserLogin=document.getElementById("userLogin");
    auserLogin.href="./user.html";
    auserLogin.innerText=username.split("=")[1];   
}