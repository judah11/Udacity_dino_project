// dino object

const dinoData = [
    {
        species: "Triceratops",
        weight: 13000,
        height: 114,
        diet: "herbavor",
        where: "North America",
        when: "Late Cretaceous",
        fact: "First discovered in 1889 by Othniel Charles Marsh."
    },
    {
        species: "Tyrannosaurus Rex",
        weight: 11905,
        height: 144,
        diet: "carnivor",
        where: "North America",
        when: "Late Cretaceous",
        fact: "The largest known skull measures in at 5 feet long."
    },
    {
        species: "Anklyosaurus",
        weight: 10500,
        height: 55,
        diet: "herbavor",
        where: "North America",
        when: "Late Cretaceous",
        fact: "Anklyosaurus survived for approximately 135 million years."
    },
    {
        species: "Brachiosaurus",
        weight: 70000,
        height: "372",
        diet: "herbavor",
        where: "North America",
        when: "Late Jurasic",
        fact: "An asteroid was named 9954 Brachiosaurus in 1991."
    },

    {
        species: "Stegosaurus",
        weight: 11600,
        height: 79,
        diet: "herbavor",
        where: "North America, Europe, Asia",
        when: "Late Jurasic to Early Cretaceous",
        fact: "The Stegosaurus had between 17 and 22 seperate places and flat spines."
    },
    {
        species: "Elasmosaurus",
        weight: 16000,
        height: 59,
        diet: "carnivor",
        where: "North America",
        when: "Late Cretaceous",
        fact: "Elasmosaurus was a marine reptile first discovered in Kansas."
    },
    {
        species: "Pteranodon",
        weight: 44,
        height: 20,
        diet: "carnivor",
        where: "North America",
        when: "Late Cretaceous",
        fact: "Actually a flying reptile, the Pteranodon is not a dinosaur."
    },
    {
        species: "Pigeon",
        weight: 0.5,
        height: 9,
        diet: "herbavor",
        where: "World Wide",
        when: "Holocene",
        fact: "All birds are living dinosaurs."
    }
  ]


// Create Dino Constructor

function dinoTiles(dinoNum){
  this.species = dinoData[dinoNum].species;
  this.weight = dinoData[dinoNum].weight;
  this.height = dinoData[dinoNum].height;
  this.diet = dinoData[dinoNum].diet;
  this.where = dinoData[dinoNum].where;
  this.when = dinoData[dinoNum].when;
  this.fact = function(){
    var randomizer = Math.floor(Math.random() * 100) + 1;

    if (randomizer <= 16) {
      return this.compareOne();
    }
    if (randomizer <= 34) {
      return this.compareTwo();
    }
    if (randomizer <= 51) {
      return this.compareThree();
    }
    if (randomizer <= 68) {
      return "Time to vist your nearest Natural History Museum!";
    }
    if (randomizer <= 85) {
      return "Dinosaurs are estimated to have gone extinct about 66 millions years ago ";
    }
    else {
       return dinoData[dinoNum].fact();
     }
  }

}


// Create Dino Objects


for (var i = 0; i < dinoData.length; i++) {
  dinoData[i] = new dinoTiles(i);
}

/*
const Triceratops = new dinoTiles(0);
const TyrannosaurusRex = new dinoTiles(1);
const Anklyosaurus = new dinoTiles(2);
const Brachiosaurus = new dinoTiles(3);
const Stegosaurus = new dinoTiles(4);
const Elasmosaurus = new dinoTiles(5);
const Pteranodon = new dinoTiles(6);
const Pigeon = new dinoTiles(7);
*/
// Create Human Object

const human = {
  name: function(){
    return humanData.getName();
  },
  height: function(){
    return humanData.getHeight();
  },
  weight: function(){
    return humanData.getWeight();
  },
  diet: function(){
    return humanData.getDiet();
  },
}

// Use IIFE to get human data from form

let humanData = (function(){
  return {
    getName: function(){
        return document.getElementById('name').value;
      },
    getHeight: function(){
      const feet = document.getElementById('feet').value;
      const inches = document.getElementById('inches').value;
      const totalHeight = (parseInt(feet) * 12) + parseInt(inches);
      return totalHeight;
    },
    getWeight: function(){
      const lbs = document.getElementById('weight').value;
      return parseInt(lbs);
    },
    getDiet: function(){
      const diet = document.getElementById('diet').value;
      return diet;
    }
  };
})();

// Create Dino Compare Method 1
// Compare weight

dinoTiles.prototype.compareOne = function(){
  const humanWeight = `${human.weight()}`;
  let weightDiff = parseInt(this.weight) - parseInt(humanWeight);
  if (weightDiff > 200) {
      return "The " + this.species + " weighed " + weightDiff + " lbs more than you!";
  }
  else {
    return this.fact();
  }
};


// Create Dino Compare Method 2
// Compare Height

dinoTiles.prototype.compareTwo = function(){
  const humanHeight = `${human.height()}`;
  let heightDiff = Math.round(parseInt(this.height) / parseInt(humanHeight));
  if (heightDiff > 2) {
      return "The " + this.species + " was " + heightDiff + " times taller than you!";
  }
  else {
    return this.fact()
  }
};

// Create Dino Compare Method 3
// Compare Diet

dinoTiles.prototype.compareThree = function(){
  const humanDiet = `${human.diet()}`;
  let dinoDiet = this.diet;
  if (`${human.diet()}` === dinoDiet.charAt(0).toUpperCase() + dinoDiet.slice(1)) {
    return this.species + " had the same basic diet as you!";
  }
  else {
    return "Dinosaurs are awesome!"();
  }
};

// Remove form from screen
document.getElementById('btn').addEventListener('click', hideForm);

  function hideForm(){
    document.getElementById('dino-compare').style.display="none";
  }


//Generate Tiles for each Dino in Array
// Add tiles to DOM
// On button click, prepare and display infographic
document.getElementById('btn').addEventListener('click', displayDino);

  function displayDino(){
    let humanPresent = false;
    for (var i = 0; i < dinoData.length; i++) {
      const dinoDiv = document.createElement('div');
      dinoDiv.className = 'grid-item';
      if(humanPresent === false && i === 4){
        dinoDiv.innerHTML = `<h3>${human.name()}<h3><img src="images/human.png">`;
        humanPresent = true;
        i--;
      }else{
        dinoDiv.innerHTML = `<h3>${dinoData[i]["species"]}<h3><img src="images/${(dinoData[i]["species"].toLowerCase())}.png"><p>${dinoData[i].fact()}`;
      }
      document.getElementById('grid').appendChild(dinoDiv);
    }}

    function displayDino(){
      let humanPresent = false;
      let pigeonPresent = false;
      for (var i = 0; i < dinoData.length; i++) {
        const dinoDiv = document.createElement('div');
        dinoDiv.className = 'grid-item';
        if(humanPresent === false && i === 4){
          dinoDiv.innerHTML = `<h3>${human.name()}<h3><img src="images/human.png">`;
          humanPresent = true;
          i--;
        }
        else if (i < 7) {
          dinoDiv.innerHTML = `<h3>${dinoData[i]["species"]}<h3><img src="images/${(dinoData[i]["species"].toLowerCase())}.png"><p>${dinoData[i].fact()}`;
        }

        else{
          dinoDiv.innerHTML = `<h3>Pigeon<h3><img src="images/pigeon.png"><p>All birds are considered dinosaurs</p>`;
        }
        document.getElementById('grid').appendChild(dinoDiv);
      }}
