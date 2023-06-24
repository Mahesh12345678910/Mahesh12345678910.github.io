      var digitalData = digitalData || {};
        digitalData = {
            page: {
                pageInfo: {
                    pageName: "",
                    pageURL:"",
                    pageType :"",
                    
                    

                },
                categories :{
                    //No Undefined values should be passed
                    primaryCategory:"",
                    subCategory1:"",
                    subCategory2 : "",
                    subCategory3 : ""
                },
                attributes:{
                    country:"in",
                    language : "en",
                    platform :"desktop Website",
                    siteType : "B2C"

                },
            
                },
                user:{
                    
                    userInfo:{


                    userID : "",
                    userStatus : ""
                    }

                    
                },
                

        };
 

        digitalData.page.pageInfo.pageURL=document.URL;
        digitalData.page.pageInfo.referrerURL=document.referrer;

         pageURL=document.URL;
        let urlobj1=new URL(pageURL);
        let categories=urlobj1.pathname.split("/");
        for(let i=0;i<categories.length;i+=1)
        {
            if(i==0)
            {
                digitalData.page.categories.primaryCategory="Geometrixx"
            }
            else if(i==categories.length-1)
            {

                let key="subCategory"+i;
                let val=categories[i].split(".")[0];
                digitalData.page.categories[key]=val;
            }
            else
            {
                let key="subCategory"+i;
                
                digitalData.page.categories[key]=categories[i];   
            }
        }

        

    digitalData.page.pageInfo.pageName=document.title;

    let url=new URL(document.URL);
    let searchParams=new URLSearchParams(url.search)


    if(searchParams.get("cid") && searchParams.get("intcid"))
    {

         digitalData.campaign={
                internal:{
                    campaignName : "intcid",
                    campaignValue : searchParams.get("intcid")
                },
                external:{
                    campaignName : "cid",
                    campaignValue :searchParams.get("cid")
                }

    }
    }
    else if(searchParams.get("intcid"))
    {

            digitalData.campaign={
                    internal:{
                    campaignName : "intcid",
                    campaignValue : searchParams.get("intcid")
                }
            }
            


    }
    else if(searchParams.get("cid")) {
        digitalData.campaign={
                external:{
            campaignName : "cid",
            campaignValue : searchParams.get("cid")
                }
        }
    }

    if(searchParams.get("q"))
    {
        let searchTerm=decodeURI(searchParams.get("q"));
        digitalData.search={
            keyword:searchTerm
        }
    }


    


// window.adobeDataLayer.push(digitalData)
//   +digitalData.page.categories.subCategory1 ? digitalData.page.categories.subCategory2 : "na" + digitalData.page.categories.subCategory3 ? digitalData.page.categories.subCategory3 : "na" ;


          


        
        
    
    