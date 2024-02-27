# GIAIC TypeScript Node JS Assignments Repository
## Node must be install prior to these steps. Check online for installation steps for your choice of OS.

## If you want to run TypeScript tsc command in Windows Powershell:
> Open Powershell in Adminstrator mode
+ > Run command:
	+ > Set-ExecutionPolicy RemoteSigned

## Install TypeScript
> npm install -g typescript

## Create a new TypeScript Project
> 1. mkdir <project_folder_name>
> 2. cd <project_folder_name>
> 3. mkdir src //for source ts files
> 4. npm init -y //for initilizing package.json
> 6. tsc -init //for initilizing typescript configuration

# Update the configurations for your newly created typescript project.
1. Open package.json and add
+ > "type": "module",
+ >  "bin": {
    "<package_name>": "./bin/<output_js_file>.js" 
 }//executable path for js file for NPX
2. Open tsconfig.json and update the following parameters
> + "target": "ES2022",
> + "module": "NodeNext",
> + "moduleResolution": "NodeNext",
> +  "outDir": "./bin",//this will output all the transpiled JS files in outdir folder.
3. Create a new TS file under src folder.
4. Add the following line at tha start of your TS file, if you are intended to use the packege as a self executed NPX application.
> + #! /usr/bin/env node
5. Start coding your application

# Add inquirer to your module for user prompt and input
1. npm i inquirer
2. npm i @types/inquirer

# Creating a working TS Application and NPX package
1.	Install npx “npm install -g npx”
2.	Create a new account on https://www.npmjs.com/
3.	Create your application using “npm init -y”.
4.	Configure TSC Config using “tsc –init”
5.	Open package.json and change the following parameters
	> + name:<Your Package Name>.
	> + Add a new parameter "type" and set its value to "module".
	> + Add a new parameter "bin": {"module_name":"bin"}. //<executable js file genreated by ts compiler>.js
	> + Add required Node dependencies in Dependency and DevDependency sections.
	+	Create a new folder named bin in project root directory.
	+	Open TSConfig:
	+	>	set "target": "ES2022".
	+	>	set "module": "NodeNext".
	+	>	set "moduleResolution": "NodeNext".
	+	>	set "outDir": "./bin",//This will automatically create all the js filed in bin folder.
6.	Create the required TS files and wrote the code. Besure to add the following line in the start of every ts file “#! /usr/bin/env node”.
7.	Compile the code using tsc command.
8.	Install the generated module in npm global directory using command "npm i -g"
9.	Test the project using command "npx <PackageName>".
10.	After successfull execution prepare it to move it to NPMJS environment to be available to everyone using npx command.
	+ >	Login to NPMJS remotely using "npm login".
	+ >	After a successful login , execute "npm publish". This will upload the newly built Node Module to NPMJS environment using your provided credentials.
	+ >	Try testing is using command using "npx <module_name>".
