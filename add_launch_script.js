function add_launch_script()
    {
        let dataLayer_script=document.getElementById("dataLayer_script");

        let head=document.getElementsByTagName("head")[0];

        let launch_script=document.createElement("script");
        // https://assets.adobedtm.com/01296dd00565/885ffeb5e57f/launch-e1386bb73e46-development.min.js
        launch_script.src="https://assets.adobedtm.com/4f2e5e0df740/9d18784bf836/launch-46ff047ac3db-development.min.js";
        launch_script.async=true;

        dataLayer_script.parentElement.insertBefore(launch_script,dataLayer_script.nextElementSibling);

        

    }

    add_launch_script();


/*AEP GDC DEV ENABLEMENT 2 SANDBOX> Analytics Team Enablement(VA7)>AEP MVANGALA
  https://assets.adobedtm.com/01296dd00565/885ffeb5e57f/launch-e1386bb73e46-development.min.js


AGS1871>MV_PRACTICE_APPMEASUREMENT
  https://assets.adobedtm.com/4f2e5e0df740/9d18784bf836/launch-46ff047ac3db-development.min.js 
  
  
  AGS1871>Mahesh Enablement Web Property

    https://assets.adobedtm.com/4f2e5e0df740/7cca5b6f22d0/launch-a539f945e683-development.min.js
    
  */
