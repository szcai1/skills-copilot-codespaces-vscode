// Create Web Server
// Create an API which will return all comments of a particular post
// Use the following URL pattern
// /comments?postId=1
// If postId is not passed in the query parameter, then the API should return all comments

const express = require('express');
const app = express();

const comments = [
    {
        postId: 1,
        id: 1,
        name: "id labore ex et quam laborum",
        email: ""
    }
]