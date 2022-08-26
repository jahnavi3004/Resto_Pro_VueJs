# resto-project
First download and install NodeJs LTS version https://nodejs.org, npm(Node package Manager) is already installed with NodeJs.
https://nodejs.org/en/download/
## Project setup
### Install vue/cli 
```
npm install -g @vue/cli
```
### Create the project
```
vue create project_name   
```
after creating the project, go to the project folder.

### Compiles and hot-reloads for development
```
npm run serve
```
### Compiles and minifies for production
```
npm run build
```
### Lints and fixes files
```
npm run lint
```
### For routing pages install router
```
npm install vue-router@next
```
## Set up json-server to create API
### install json-server
```
npm install -g json-server
```
Then create folder in project folder, create .json file in created folder, go to the created folder and after then run server by command line.
### Run server
```
json-server --watch file_name(.json) 
```
### Install axios and use to call API
```
npm install axios
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
