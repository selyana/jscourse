"use strict";

class Post {

    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit() {
        let newText = prompt("Введите текст поста");
        this.text = newText;
    }

}

class AttachedPost extends Post {

    constructor(author, text, date, highlighted) {
        super(author, text, date);
        this.highlighted = highlighted
    }

    highlight() {
        this.highlighted = true;
    }

}

const postCompilation = new Post("Jane", null, "18.12.2020");
postCompilation.edit();
console.log(postCompilation);

const postCompilationAttached = new AttachedPost("Jane", null, "18.12.2020", false);
postCompilationAttached.edit();
postCompilationAttached.highlight();
console.log(postCompilationAttached);