const fs = require("fs");

// let circles = []
// let squares = []
// let triangles = []

function preload() {
  fs.readdir(`./data/`, (err, files) => {
    files.forEach((file) => {
      console.log(file);
    });
  });
}

function setup() {
  createCanvas(400, 400);
  preload()
}

function draw() {}
