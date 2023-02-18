function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');

	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
        c=c.trim();
		if (c.indexOf(nameEQ) === 0) 
        {
            return c.substring(nameEQ.length,c.length);
        }
	}
	return null;
}


let product_IDs=decodeURI(readCookie("product_IDs"));

if(product_IDs && product_IDs!=null)
{
    let prodString=decodeURI(readCookie("simpleCart"));

    let prods=prodString.split("++");
    console.log(prodString);

    for(let i=0;i<prods.length;i++)
    {
    
        let prodParams=prods[i].split("||");
        let sku=prodParams[0].split("=")[1]
        
    }

}
else
{

}



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

