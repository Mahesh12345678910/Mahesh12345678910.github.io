
let envs={
 "AEP VANGALA-GDC DEV ENABLEMENT" : "https://assets.adobedtm.com/01296dd00565/885ffeb5e57f/launch-e1386bb73e46-development.min.js",
 "MV_PRACTICE_APPMEASUREMENT-SELF" : "https://assets.adobedtm.com/4f2e5e0df740/9d18784bf836/launch-46ff047ac3db-development.min.js",
 "Mahesh Enablement Web Property-SELF" : "https://assets.adobedtm.com/4f2e5e0df740/7cca5b6f22d0/launch-a539f945e683-development.min.js",
"AEP EVENT_Forwarding_MVANGALA_Edge_early_access":"https://assets.adobedtm.com/22bf1a13013f/c5cc82af3b95/launch-a756d3742676-development.min.js",
"AA WEB MVANGALA" : "https://assets.adobedtm.com/01296dd00565/441fbc5ab156/launch-030e63faf28e-development.min.js"
}


// <!-- Google Tag Manager -->
/* <script>
//</script> */

// <!-- End Google Tag Manager -->


// let gscripthead=document.createElement("script");
// gscripthead.innerHTML="(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-T6RF2LF');"


// let gscriptbody=document.createElement("noscript");
// gscriptbody.innerHTML="<iframe src='https://www.googletagmanager.com/ns.html?id=GTM-T6RF2LF' height='0' width='0' style='display:none;visibility:hidden'></iframe>"








// <!-- Google Tag Manager (noscript) -->
// <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T6RF2LF"
// height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
// <!-- End Google Tag Manager (noscript) -->




let dataLayer_script=document.createElement("script");
dataLayer_script.id="dataLayer_script";
dataLayer_script.innerHTML="window.adobeDataLayer = window.adobeDataLayer || [];"
let headTag=document.getElementsByTagName("head")[0];




let launch_script_tag=document.createElement("script");

// launch_script_tag.src= envs["Mahesh Enablement Web Property-SELF"]

launch_script_tag.src= envs["AEP VANGALA-GDC DEV ENABLEMENT"]
launch_script_tag.async=true;


headTag.append(dataLayer_script)
headTag.append(launch_script_tag)
// headTag.append(gscripthead)

// window.onload=function(e)
// {
//     let bodyTag=document.getElementsByTagName("body")[0];
//     bodyTag.append(gscriptbody)

// }




// let launch_script="https://assets.adobedtm.com/4f2e5e0df740/9d18784bf836/launch-46ff047ac3db-development.min.js"

// let launchScript=document.getElementById("launchScript");
// launchScript.src=launch_script;
// launch_script.async=true;
// let dataLayer_script = document.getElementById("dataLayer_script");

//   let head = document.getElementsByTagName("head")[0];

//   let launch_script = document.createElement("script");
//   // https://assets.adobedtm.com/01296dd00565/885ffeb5e57f/launch-e1386bb73e46-development.min.js
//   launch_script.src = "https://assets.adobedtm.com/4f2e5e0df740/9d18784bf836/launch-46ff047ac3db-development.min.js";
//   launch_script.async = true;
//   dataLayer_script.parentElement.insertBefore(launch_script, dataLayer_script.nextElementSibling);

// /*AEP GDC DEV ENABLEMENT 2 SANDBOX> Analytics Team Enablement(VA7)>AEP MVANGALA
//   https://assets.adobedtm.com/01296dd00565/885ffeb5e57f/launch-e1386bb73e46-development.min.js


// AGS1871>MV_PRACTICE_APPMEASUREMENT
//   
  
  
//   AGS1871>Mahesh Enablement Web Property

//     https://assets.adobedtm.com/4f2e5e0df740/7cca5b6f22d0/launch-a539f945e683-development.min.js

//   */
