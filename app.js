let stagiaires = []

document.querySelector("#saveStagiaire").addEventListener('click',

function (event) {

    event.stopPropagation()
    event.preventDefault()

    //affiche les événement tel que les click
    console.log(event)

    // assigner les valeurs de nos champs HTML dans des variables
    let nomStagiaire = document.querySelector("#stagiaireNom").value
    let prenomStagiaire = document.querySelector("#stagiairePrenom").value
    let dateNaisStagiaire = document.querySelector("#stagiaireDateNais").value

    // creation d'un stagiaire a chaque click
    let stagiaire= new Stagiaire(nomStagiaire,prenomStagiaire,dateNaisStagiaire)

    // incrementation d'ID pour chaque stagiaire
    stagiaire.id = stagiaire.generateId(stagiaires)
    
    // ajouter la nouvelle itération de stagiaire cenant d'etre créé dans le tableau de stagiaires
    stagiaires.push(stagiaire) 

    // afficher le tableau complet de stagiares
    console.log(stagiaires)

    createOption()

})



function createOption () {

    const select = document.querySelector('#listStagiaire')

    stagiaires.forEach(function(stagiaire) {
        //<option value="id"> Prenom Nom </option>

        //creation de l'élément <option> </option>
        let option = document.createElement('option')

        // on attribue la value=""
        option.setAttribute('value',stagiaire.id)

        // on met du text dans notre balise
        option.innerText = stagiaire.prenom + " " + stagiaire.nom

        select.appendChild(option)

    })


}

