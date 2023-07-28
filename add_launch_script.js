function add_launch_script()
    {
        let dataLayer_script=document.getElementById("dataLayer_script");

        let head=document.getElementsByTagName("head")[0];

        let launch_script=document.createElement("script");
        launch_script.src="https://assets.adobedtm.com/4f2e5e0df740/9d18784bf836/launch-46ff047ac3db-development.min.js";
        launch_script.async=true;

        dataLayer_script.parentElement.insertBefore(launch_script,dataLayer_script.nextElementSibling);

        

    }

    add_launch_script();