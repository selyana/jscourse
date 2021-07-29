"use strict";

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

function AttachedPost(author, text, date, highlighted) {
    Post.call(this, author, text, date);
    this.highlighted = highlighted
}

Post.prototype.edit = function () {
    let newText = prompt("Введите текст поста")
    this.text = newText
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.highlight = function () {
    this.highlighted = true;
}

const postCompilation = new Post("Jane", null, "18.12.2020");
postCompilation.edit();
console.log(postCompilation);

const postCompilationAttached = new AttachedPost("Jane", null, "18.12.2020", false);
postCompilationAttached.edit();
postCompilationAttached.highlight();
console.log(postCompilationAttached);