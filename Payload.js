try
{
  var productName="";
  var productCategory="";
  var subProduct1="";
  var subProduct2="";
  var product="";
  
  
  
  s.linkTrackVars = s.linkTrackVars + "," + "products,prop34,eVar34,eVar38,eVar39,events";
  s.linkTrackEvents = "event100"; 
  productName=_satellite.getVar('productName-EDDL');
  productCategory=_satellite.getVar('productCategory-EDDL');
  subProduct1=_satellite.getVar('productSubCategory-EDDL');
  subProduct2="";
  
 
 
  product+= productCategory+";"+productName+";;;;" + "|eVar34="+productName+"|eVar38="+subProduct1+"|eVar39="+subProduct2+',';
  s.products=product;
  s.events='event100';
  s.prop34=productName;
  
     
}
catch(error){
  console.log("form -- start field==>"+error.message);
}

