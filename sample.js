let k=adobeDataLayer.length-1;
let formfield="";

if(typeof adobeDataLayer[k].products!=undefined)
{
console.log(adobeDataLayer[k].products);
let prodlen=adobeDataLayer[k].products.length;

for(let i=0;i<prodlen;i++)
{
    let product=adobeDataLayer[k].products[i];
    
    let prodfields=product.productFields;
    if(prodfields.length>0)
    {
        for(let j=0;j<prodfields.length;j++)
        {
            formfield+=prodfields[j].formFieldName+":"+prodfields[j].formFieldValue+"_";
        }
    }

}
console.log(formfield)
}


if(typeof adobeDataLayer[k].products[0].productFields!=undefined && adobeDataLayer[k].products[0].productFields.length!=0)
{
    console.log(adobeDataLayer[k].products[0].productFields);
  for( let  j=0;j<adobeDataLayer[k].products[0].productFields.length;j+=1)
    {
  formField+=adobeDataLayer[k].products[0].productFields[j].formFieldName+":"+adobeDataLayer[k].products[0].productFields[j].formFieldValue+"_";
    }
  console.log('***Final value of formFields is*  '+formField);
}
  

/*Evar 21 and Lis1"//*/

var trackVars=s.linkTrackVars.split(",");

if(trackVars.includes("eVar21"))
{
   _satellite.logger.log("eVar21 Added Already",s.eVar21);
   if(s.eVar21 !=_satellite.getVar('Lily ID-EDDL'))
     {
       s.eVar21=_satellite.getVar('Lily ID-EDDL');
     }
}
else
  {
    trackVars.push("eVar21");
    s.linkTrackVars=trackVars.join(",");
    s.eVar21=_satellite.getVar('Lily ID-EDDL');
  }

_satellite.logger.log("eVar21 Added New",s.eVar21);
