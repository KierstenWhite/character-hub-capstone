# Welcome to CharacterHub

As a writer, it can be challenging to keep track of all the details you create for a character. CharacterHub makes tracking your characters easier than ever. The CharacterHub application allows users to create an account, add, edit, and delete characters they've specifically created. Users can edit their personal profile that includes a space for a bio and what they are currently working on. Additionally, users can explore writing resources provided by CharacterHub and other users. Writing Resource submissions can be edited and deleted by the user who created them.

# Resources

I sued Semantic UI React and React Boostrap for styling. All images are linked through Imgur.

This project was built with the following:

*  [React](https://www.reactjs.org "React's Homepage")
*  [React Bootstrap](https://react-bootstrap.github.io/ "Bootstrap Homepage")
*  [Semantic UI](https://react.semantic-ui.com/ "Semantic UI React's HomePage")


## Using this App

Fork the directory from https://github.com/KierstenWhite/character-hub-capstone to your own local repository.

You will need to install the following to run the program locally:


```npm install
npm install semantic-ui-react semantic-ui-css
npm install react-select
```
In the project directory, you can run:

```npm start```

Which runs the app in the development mode.
Open http://localhost:3000 to view it in the browser. The page will reload if you make edits.

You must also run the following command in a separate command prompt to initiate the database. These steps will let you run a json server with the database.json from the api directory, and allow all of the fetch calls in modules to interact with that data. 
```cd api
json-server database.json -p 8088 -w
```