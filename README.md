# GIAIC TypeScript Node JS Assignments Repository

## Node must be install prior to these steps. Check online for installation steps for your choice of OS

## If you want to run TypeScript `tsc` command in Windows Powershell

- Open Powershell in Administrator mode

- Run command:

```bash
Set-ExecutionPolicy RemoteSigned
```

## Install TypeScript

```bash
npm install -g typescript
```

## Create a new TypeScript Project

1. `mkdir <project_folder_name>`.
1. `cd <project_folder_name>`.
1. `mkdir src` for main application code.
1. `npm init -y` for initilizing `package.json`.
1. `tsc --init` for initilizing `tsconfig.json`.

## Update the configurations for your newly created typescript project

1. Open `package.json` and add:

```json
"type": "module",
"bin": {
    "<package_name>": "./bin/<main_output_js_file>.js"
 } // executable path for js file for NPX
```

2. Open `tsconfig.json` and update/add the following parameters:

```json
"target": "ES2022",
"module": "NodeNext",
"moduleResolution": "NodeNext",
"outDir": "./bin", // this will output all the transpiled JS files in outdir folder.
```

## Setup main file

1. Create a new `.ts` file under `src` folder.
1. Add the following line at tha start of your main ts file, if you are intended to use the package as a self executable npm package.

```bash
#! /usr/bin/env node
```

1. Start coding your application.

## Add `inquirer` to your project for user prompt and input

1. `npm i inquirer`
2. `npm i @types/inquirer`

## Add `chalk` to your project for console colored outputs

1. `npm i chalk`
2. `npm i @types/chalk`

## Publish your project to npm registry

1. Create a new account on <https://www.npmjs.com/>
1. Compile the code using `tsc` command.
1. Install the generated module in npm global directory using command:

```bash
npm link
```

4. Test the project using command:

```bash
<package-name>
```

5. After successful execution, prepare it to move it to npm registry to be available to everyone using npx command.
   1. Login to npm remotely using `npm login`.
   1. After a successful login, run `npm publish`. This will upload the newly built package to npm registry using your provided credentials.
   1. Try testing is using command using `npx <module_name>`.
