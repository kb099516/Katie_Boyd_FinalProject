const key = 'pk.eyJ1Ijoia2IwOTk1MTYiLCJhIjoiY2ttMmQ5dTU1MHJtYzJybTlnMWk1MDB6aiJ9.-CZmnJ9dS0y4WJKbL7GYAA';

const options = {
  lat: 39.329239,
  lng: -82.101257,
  zoom: 7,
  style: 'mapbox://styles/kb099516/ckmjghcf80svz18js2bvpvq4q',
  pitch: 0
};

const mappa = new Mappa('MapboxGL', key);
let myMap;
let canvas;

let info = [];
let img;
function preload() {
  img = loadImage('images/JAXlabel.png');
  img1 = loadImage('images/ItalyLabel.png');
  img2 = loadImage('images/OPlabel.png');
  img3 = loadImage('images/BaseLabel.png');
  img4 = loadImage('images/DaisyLabel.png');
  img5 = loadImage('images/HomeLabel.png');
}


//info[0]



function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
  // Load the data
  homes = loadTable('BoydHomes.csv', 'csv', 'header');
  //myMap.onChange(redraw);
  loop();
  
  // Top-left corner of the img is at (0, 0)
  // Width and height are the img's original width and height
  //image(img, 0, 0);
 
  
  
  //let img;
  // here we use a callback to display the image after loading
 // loadImage('images/JAXlabel.png', img => {
    //image(img, 0, 0);
 // });
  //let img1;
  // here we use a callback to display the image after loading
  //loadImage('images/ItalyLabel.png', img => {
    //image(img1, 0, 0);
  //});
  //let img2;
  // here we use a callback to display the image after loading
  //loadImage('images/OPlabel.png', img => {
    //image(img2, 0, 0);
 // });
  //let img3;
  // here we use a callback to display the image after loading
  //loadImage('images/BaseLabel.png', img => {
    //image(img3, 0, 0);
  //});
  //let img4;
  // here we use a callback to display the image after loading
  //loadImage('images/DaisyLabel.png', img => {
    //image(img4, 0, 0);
 // });
  //let img5;
  // here we use a callback to display the image after loading
  //loadImage('images/HomeLabel.png', img => {
    //image(img5, 0, 0);
  //});
  
  
  
  
  
  
  
}


function draw() {



  clear();
  //noFill();
  stroke(255);
  strokeWeight(3);
  
  const zoom = myMap.zoom();

 
  const home = myMap.latLngToPixel(39.956350322210675, -82.1932197159255);
  ellipse(home.x, home.y, 10 * zoom, 10 * zoom);

  if (dist(home.x, home.y, mouseX, mouseY) < (zoom * 10) / 2) {
    
    image(img5,0,0)
   
    textSize(25);
    noFill();
    text("Home", home.x, home.y);

    fill(0, 100);
  } else {
    fill(255, 100);
  }



  
  //noFill();
  stroke('orange');
  strokeWeight(3);
 
  const jax = myMap.latLngToPixel(30.313392734488673, -81.7453686957211);
  ellipse(jax.x, jax.y, 4 * zoom, 4 * zoom);

  if (dist(jax.x, jax.y, mouseX, mouseY) < (zoom * 4) / 2) {
    
  image(img,0,0)
    
    textSize(25);
    noFill();
    text("JAX", jax.x, jax.y);

    fill(0,100);
  } else {
    fill(255,100);
  }
  


  //noFill();
  stroke('red');
  strokeWeight(3);
  const italy = myMap.latLngToPixel(37.46468206745895, 14.961638469699672);
  ellipse(italy.x, italy.y, 6 * zoom, 6 * zoom);

  if (dist(italy.x, italy.y, mouseX, mouseY) < (zoom * 6) / 2) {
    
    image(img1,0,0)
    
    textSize(25);
    noFill();
    text("Sigonella", italy.x, italy.y);

    fill(0,100);
  } else {
    fill(255,100);
  }
  
 



  //noFill();
  stroke('orange');
  strokeWeight(3);
  const house1 = myMap.latLngToPixel(30.227698717309792, -81.77505073554028);
  ellipse(house1.x, house1.y, 8 * zoom, 8 * zoom);

  if (dist(house1.x, house1.y, mouseX, mouseY) < (zoom * 8) / 2) {
    
    image(img2,0,0)
    
    textSize(25);
    noFill();
    text("Orange Park", house1.x, house1.y);

    fill(0,100);
  } else {
    fill(255,100);
  }
  
 


  
 
  //noFill();
  stroke('orange');
  strokeWeight(3);
  const base = myMap.latLngToPixel(30.19999786209957, -81.68570255951242);
  ellipse(base.x, base.y, 10 * zoom, 10 * zoom);

  if (dist(base.x, base.y, mouseX, mouseY) < (zoom * 10) / 2) {
    
    image(img3,0,0,)
    
    textSize(25);
    noFill();
    text("Base", base.x, base.y);

    fill(0,100);
  } else {
    fill(255,100);
  }

  


  
  //noFill();
  stroke('orange');
  strokeWeight(3);
  const daisy = myMap.latLngToPixel(39.956268401195075, -82.1887055759385);
  ellipse(daisy.x, daisy.y, 10 * zoom, 10 * zoom);

  if (dist(daisy.x, daisy.y, mouseX, mouseY) < (zoom * 10) / 2) {
    
    image(img4,0,0)
    
    textSize(25);
    noFill();
    text("Daisy", daisy.x, daisy.y);

    fill(0,100);
  } else {
    fill(255,100);
  }

 }







$(window).bind('resize', function(e) {
  if (window.RT) clearTimeout(window.RT);
  window.RT = setTimeout(function() {
    this.location.reload(false); /* false to get page from cache */
  }, 200);
 });
  
//}
  
  
