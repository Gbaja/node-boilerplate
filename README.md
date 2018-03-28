# Boilerplate using Node ✨

## Tech-stack

Front end - HTML, CSS, JAVASCRIPT

Back end - Node

## Getting up and running

1. Clone or fork the repo (if you want to repurpose it as your own delete the .git folder and copy the files over to your new repo) and change the repository in the package.json

> git clone https://github.com/Gbaja/node-boilerplate.git

2.  Install all the dependencies by cd-ing into the folder and running:

> npm install

3. Start the server
- To use nodemon - this means you do not have to refresh your server everytime you make a change
> npm run dev
- To run the server with node:
>npm run start

4. Babel

Frontend code is run through Babel which transpiles all the js and bundles it into the index.js file in build/public which meets ES5 standards

Write your es6 code in index.js file in the public folder in the root folder of project. 

To run babel,you can run the command below in another terminal tab(this allows you to still carry on running your server). 
>npm run babel

5. Test

This project uses tape testing framework. Feel free to uninstall tape and use any testing framework you prefer.

Running your tests
>npm run test

Happy coding 🙂

