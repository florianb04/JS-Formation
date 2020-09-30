let stagiaires = []

document.querySelector("#saveStagiaire").addEventListener('click',

function (event) {

    event.stopPropagation()
    event.preventDefault()

    console.log(event)

    let nomStagiaire = document.querySelector("#stagiaireNom").value
    let prenomStagiaire = document.querySelector("#stagiairePrenom").value
    let dateNaisStagiaire = document.querySelector("#stagiaireDateNais").value

    let stagiaire1= new Stagiaire(nomStagiaire,prenomStagiaire,dateNaisStagiaire)

    stagiaire1.id = stagiaire.generateId(stagiaires)
    
    console.log(stagiaire1)


})

