function add_launch_script()
    {
        let dataLayer_script=document.getElementById("dataLayer_script");

        let head=document.getElementsByTagName("head")[0];

        let launch_script=document.createElement("script");
        launch_script.src="https://assets.adobedtm.com/4f2e5e0df740/7cca5b6f22d0/launch-a539f945e683-development.min.js";
        launch_script.async=true;

        dataLayer_script.parentElement.insertBefore(launch_script,dataLayer_script.nextElementSibling);

        

    }

    add_launch_script();