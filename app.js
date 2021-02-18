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
       return dinoData[dinoNum].fact;
     }
  }

}


// Create Dino Objects

const Tri = new dinoTiles(0);
const Tyr = new dinoTiles(1);
const Ank = new dinoTiles(2);
const Bra = new dinoTiles(3);
const Ste = new dinoTiles(4);
const Ela = new dinoTiles(5);
const Pte = new dinoTiles(6);
const Pig = new dinoTiles(7);

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
  var humanWeight = `${human.weight()}`;
  var weightDiff = parseInt(this.weight) - parseInt(humanWeight);
  return "The " + this.species + " weighed " + weightDiff + " lbs more than you!";
};


// Create Dino Compare Method 2
// Compare Height

dinoTiles.prototype.compareTwo = function(){
  var humanHeight = `${human.height()}`;
  var heightDiff = Math.round(parseInt(this.height) / parseInt(humanHeight));
  return "The " + this.species + " was " + heightDiff + " times taller than you!";
};

// Create Dino Compare Method 3
// Compare Diet

dinoTiles.prototype.compareThree = function(){
  var humanDiet = `${human.diet()}`;
  var dinoDiet = this.diet;
  if (`${human.diet()}` === dinoDiet.charAt(0).toUpperCase() + dinoDiet.slice(1)) {
    return this.species + " had the same basic diet as you!";
  }
};


// Prevent form submittal if data isn't entered
document.getElementById('btn').addEventListener('click', function(event){
  const name = humanData.getName();
  if(name === ""){
    event.preventDefault();
  }
});

// Remove form from screen
document.getElementById('btn').addEventListener('click', hideForm);

  function hideForm(){
    document.getElementById('dino-compare').style.display="none";
  }


//Generate Tiles for each Dino in Array
// Add tiles to DOM
// On button click, prepare and display infographic
document.getElementById('btn').addEventListener('click', displayDino);
document.getElementById('btn').addEventListener('click', displayDino1);
document.getElementById('btn').addEventListener('click', displayDino2);
document.getElementById('btn').addEventListener('click', displayDino3);
document.getElementById('btn').addEventListener('click', displayDino4);
document.getElementById('btn').addEventListener('click', displayDino5);
document.getElementById('btn').addEventListener('click', displayDino6);
document.getElementById('btn').addEventListener('click', displayDino7);
document.getElementById('btn').addEventListener('click', displayDino8);
document.getElementById('btn').addEventListener('click', displayDino9);

function displayDino(){
    const dinoDiv = document.createElement('div');
    dinoDiv.className = 'grid-item';
    dinoDiv.innerHTML = `<h3>${dinoData[0]["species"]}<h3><img src="images/${(dinoData[0]["species"].toLowerCase())}.png"><p>${Tri.fact()}</p>`
    document.getElementById('grid').appendChild(dinoDiv);
}

function displayDino1(){
    const dinoDiv1 = document.createElement('div');
    dinoDiv1.className = 'grid-item';
    dinoDiv1.innerHTML = `<h3>${dinoData[1]["species"]}<h3><img src="images/${(dinoData[1]["species"].toLowerCase())}.png"><p>${Tyr.fact()}</p>`
    document.getElementById('grid').appendChild(dinoDiv1);
}

function displayDino2(){
    const dinoDiv2 = document.createElement('div');
    dinoDiv2.className = 'grid-item';
    dinoDiv2.innerHTML = `<h3>${dinoData[2]["species"]}<h3><img src="images/${(dinoData[2]["species"].toLowerCase())}.png"><p>${Ank.fact()}</p>`
    document.getElementById('grid').appendChild(dinoDiv2);
}

function displayDino3(){
    const dinoDiv3 = document.createElement('div');
    dinoDiv3.className = 'grid-item';
    dinoDiv3.innerHTML = `<h3>${dinoData[3]["species"]}<h3><img src="images/${(dinoData[3]["species"].toLowerCase())}.png"><p>${Bra.fact()}</p>`
    document.getElementById('grid').appendChild(dinoDiv3);
}

function displayDino4(){
    const dinoDiv4 = document.createElement('div');
    dinoDiv4.className = 'grid-item';
    dinoDiv4.innerHTML = `<h3>${human.name()}<h3><img src="images/human.png">`;
    document.getElementById('grid').appendChild(dinoDiv4);
}
function displayDino5(){
    const dinoDiv5 = document.createElement('div');
    dinoDiv5.className = 'grid-item';
    dinoDiv5.innerHTML = `<h3>${dinoData[4]["species"]}<h3><img src="images/${(dinoData[4]["species"].toLowerCase())}.png"><p>${Ste.fact()}</p>`
    document.getElementById('grid').appendChild(dinoDiv5);
}

function displayDino6(){
    const dinoDiv6 = document.createElement('div');
    dinoDiv6.className = 'grid-item';
    dinoDiv6.innerHTML = `<h3>${dinoData[5]["species"]}<h3><img src="images/${(dinoData[5]["species"].toLowerCase())}.png"><p>${Ela.fact()}</p>`
    document.getElementById('grid').appendChild(dinoDiv6);
}

function displayDino7(){
    const dinoDiv7 = document.createElement('div');
    dinoDiv7.className = 'grid-item';
    dinoDiv7.innerHTML = `<h3>${dinoData[6]["species"]}<h3><img src="images/${(dinoData[6]["species"].toLowerCase())}.png"><p>${Pte.fact()}</p>`
    document.getElementById('grid').appendChild(dinoDiv7);
}

function displayDino8(){
    const dinoDiv8 = document.createElement('div');
    dinoDiv8.className = 'grid-item';
    dinoDiv8.innerHTML = `<h3>${dinoData[7]["species"]}<h3><img src="images/${(dinoData[7]["species"].toLowerCase())}.png"><p>All birds are considered dinosaurs.</p>`
    document.getElementById('grid').appendChild(dinoDiv8);
}


//Failed attempt at executing the above within a loop.
/*
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
        dinoDiv.innerHTML = `<h3>${dinoData[i]["species"]}<h3><img src="images/${(dinoData[i]["species"].toLowerCase())}.png"><p>${Tyr.fact()}</p>`;
      }
      document.getElementById('grid').appendChild(dinoDiv);
    }}
    */
