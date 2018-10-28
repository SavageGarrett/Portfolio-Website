# Portfolio-Website
Website powered by and written in node.js, in order to display my personal portfolio.

## Github
Version Controlled and Backed up on https://github.com/SavageGarrett/Portfolio-Website

## Setup
A list of required packages for Java Script are listed as package.json
Packages can be installed by running the following command in a Linux Terminal:
```console
user@webserver:~$ npm install <package-name>
```
Packages can also be installed on Windows PowerShell:
```powershell
PS C:\User\Web-Server> npm install <package-name>
```

## Run
Run the web server by running 

### On Linux Terminal: 
```console
user@webserver:~$ node ./bin/www
```
### On Power Shell: 
```powershell
PS C:\User\Web-Server> node .\bin\www
```

## Limitations and Suggestions
Current Functionality allows only for the server to be ran with the aforementioned commands, the html page files are stored in the location.
```powershell
.\views\
```
In order for ports to be changed and other start parameters to be evaluated, you will need to access this file.
```powershell
.\bin\www
```

## TODO
Project will implement startup flags, and further update the index page from the starting template

#### Later to be implemented
TBD
