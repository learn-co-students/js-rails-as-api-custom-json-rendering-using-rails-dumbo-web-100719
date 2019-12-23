let bodyDiv = document.getElementsByTagName('div')[0]

fetch('http://localhost:3000/birds')
.then(resp =>resp.json())
.then(birdArray=>{
    birdArray.forEach(bird => {
        createBirdList(bird)
    });
})

let birdUl = document.createElement('ul')
function createBirdList(bird){
    let birdLI = document.createElement('li')
    let birdSpecies = document.createElement('p')
    birdLI.innerText = bird.name

    birdSpecies.innerText = bird.species

    birdUl.append(birdLI,birdSpecies)
}

bodyDiv.append(birdUl)
