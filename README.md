# On package.json, modified or add:
{
  "name": "mg-vite-storybook-component",
  "private": false,
  "license": "MIT",
  "typings": "dist/index.d.ts",
  "main": "dist/index.js",
  "homepage": "https://marci-garcia.com",
  "peerDependencies": {
    "react": ">=18.2.0",
    "typescript": ">=4.9.3"
  },
  "repository": {
    "url": "https://github.com/InfoMarcy/react-storybook-exaample",
    "type": "git"
  },
  "release": {
    "branches": [
      "main"
    ]
  },
  "files": [
    "dist",
    "src"
  ],
  "version": "0.0.1",
# On tsconfig.json, modified or add:
{
  "compilerOptions": {
    "outDir": "dist",
    "target": "ESNext",
    "declaration": true,
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "CommonJS",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": false,
    "jsx": "react-jsx"
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}


# Method to build the code. First install the next devDependencies
1. npm i -D rimraf
2. npm i -D  copyfiles
# on Package.json on the   "scripts": add :
 "scripts": {
    "start": "storybook dev -p 6006",
    "build": "npm run clean && tsc && npm run copy-files", ##this one
    "preview": "vite preview",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build",
    "clean": "rimraf dist/", ##this one
    "copy-files": "copyfiles -u 1 src/**/*.css dist/" ##this one
  },

## add Smeantic Versioning to the project install: https://www.npmjs.com/package/semantic-release
1.  npm i -D semantic-release
## then on the package.json add the next plugins:
"plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/github",
    "@semantic-release/npm",
    "@semantic-release/git"
],

## Version 1.0.0
## git commit -m "feat: agregamos semantic versioning"   => feat:  for Minor Feature Release => 1.0.1
## git commit -m "fix: agregamos semantic versioning"   => fix:  for Patch Fix Release => 1.1.0
## git commit -m "perf: agregamos semantic versioning"   => perf:  for Major Breaking Release => 2.0.0

#Configuracion de token de acceso:
got to: https://github.com/settings/tokens 
## then select generate new token => Select scopes => repo
# Then click on Generate token

## Go to NPM and login to your account then select under your user the option: Access Tokens => Generate new Token => Classic Token => Publish 
https://www.npmjs.com/ 

## Crear variables de entorno de nuestros tokens para github actions
## go to your github repo=> select settings => Secrets and variables => 
1. New Repository Secret => Name: GH_TOKEN, value: <your token> 
## Add Secret
2. New Repository Secret => Name: NPM_TOKEN, value: <your token> 
## Add Secret



### GITHUB ACTIONS
1. go to your github repo
2. Select `Actions` tab
3. Select `New Workflow` => set up a workflow yourself 
4. Start Commit that will create the `main.yml` file
## Content of the main.yml on: 
https://gitlab.com/f3125/reactnotes/-/blob/main/typescript/DesplegarToNPM/DesplegarToGithubActions/main.yml


