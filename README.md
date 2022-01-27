# ACA-Py FrontEnd
    Pre-requisite
        You need to get the BPA, ACA-Py, ACA-Py Controller running, Please read through the readme of below repo. 
        https://github.com/MakTom/ACA_Py_Controller#readme

    Steps for Spining Frontend
        ⦁	Create Virtual machine for BPA (an Ubuntu server, using AWS), add a port 3000.
        ⦁	Use the downloaded .pen key and run PuttyGen that will generate the private key.
        ⦁	Copy the public IP from the Azure VM and use it along with the private key to load the install using Putty.
        ⦁	Open the VM using putty (Username - ubuntu)
        ⦁	Commands on the VM 
            git clone your Frontend repo from Github. Below is my repo.
                https://github.com/MakTom/ACA_Py_FrontEnd
            cd to your code folder.
            sudo apt update
            sudo apt upgrade
            sudo apt install npm
            sudo npm install -g n
            sudo n latest
            node -v
            sudo npm install npm@latest -g
            npm install
            npm start
        ⦁	Navigate to IP Address:3000 to visit the react UI.

    How to test the whole system?

    Make sure to have BPA, ACA-Py, ACA-Py controller and the front end are up.
    Visit the Swagger UI
        Scroll down and click at 'POST /connections/create-invitation'
        Click on Try it out
        Remove the patameters inside the body tag
        Click Execute.
        Go to Server Response and copy the invitation link. 

    Open BPA UI 
        Click on 'Secure Connections'
        Click on + button.
        Select 'By Invitation' 
        Paste the Inivitation URL.
        Click on 'Check Inivitation'
        Give a name to Connection and click 'Accept Invitation'

    Visit the Frontend and you will see the ID of the recently created connection and an Accept button along with it. 
    Click on the Accept button and the state of the invitation will change. 
    You can visit BPA again to check, the connection will be established.
