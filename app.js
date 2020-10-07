let stagiaires = []
let notes = []

document.querySelector("#saveNote").addEventListener('click', function(event){
    event.stopPropagation()
    event.preventDefault()

    let note = document.querySelector('#noteNote')
    let coef = document.querySelector('#noteCoef')
    let matiere = document.querySelector('#noteMatiere')
    let list = document.querySelector('#listStagiaire')


    stagiaires.forEach(function(stagiaire){ // pour chaque stagiaire

        if (stagiaire.id === parseInt(list.value) ) { // si id = id
            notes.push(stagiaire.ajouterNote(note.value, coef.value, matiere.value))
        }
    })

    console.log(notes)
})

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

    // createOption()
    createOption( '#listStagiaire' , stagiaire.id,stagiaire.prenom + " " + stagiaire.nom )

})



function createOption (elementSelect, id, text) {

    const select = document.querySelector(elementSelect)

    // on vide le select avant de le réutiliser
    // select.innerHTML = ""

    // stagiaires.forEach(function(stagiaire) {
        //<option value="id"> Prenom Nom </option>

        //creation de l'élément <option> </option>
        let option = document.createElement('option')

        // on attribue la value=""
        // option.setAttribute('value',stagiaire.id)
        option.setAttribute('value',id)


        // on met du text dans notre balise
        // option.innerText = stagiaire.prenom + " " + stagiaire.nom
        option.innerText = text


        select.appendChild(option)

    // })

}

