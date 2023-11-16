
let envs={
 "AEP VANGALA-GDC DEV ENABLEMENT" : "https://assets.adobedtm.com/01296dd00565/885ffeb5e57f/launch-e1386bb73e46-development.min.js",
 "MV_PRACTICE_APPMEASUREMENT-SELF" : "https://assets.adobedtm.com/4f2e5e0df740/9d18784bf836/launch-46ff047ac3db-development.min.js",
 "Mahesh Enablement Web Property-SELF" : "https://assets.adobedtm.com/4f2e5e0df740/7cca5b6f22d0/launch-a539f945e683-development.min.js"

}


let dataLayer_script=document.createElement("script");
dataLayer_script.id="dataLayer_script";
dataLayer_script.innerHTML="window.adobeDataLayer = window.adobeDataLayer || [];"
let headTag=document.getElementsByTagName("head")[0];

let launch_script_tag=document.createElement("script");
launch_script_tag.src= envs["AEP VANGALA-GDC DEV ENABLEMENT"];
launch_script_tag.async=true;


headTag.append(dataLayer_script)
headTag.append(launch_script_tag)




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
