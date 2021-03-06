/* BONUS : transformer la fonction 'ajouterNote' pour créé la class Note 
a la place de:  ajouterNote(12,2,"JS")
faire : let new score = new Note (15,2,"JS")
jonh.ajouterNote(score)
*/

// let matieres =[]
// let formateurs = []
// let stagiaries = []
// let formations = [] 
// let notes = []


class Stagiaire {
    
    constructor(nom, prenom, dateNais) {
    
        this.nom = nom
        this.prenom = prenom
        this.dateNais = dateNais
        this.id = 0
        // this.notes = []
        
    }
    
    generateId(tabStagiaires){ // creation d'auto incrementation sans BDD
        let maxId = 0
        tabStagiaires.forEach(function(stagiaire) {
            if (stagiaire.id > maxId) maxId = stagiaire.id
        })
        return maxId + 1
    }



    /**
     * 
     * @param {note recus} note_1 
     * @param {le coefficient} coef_1 
     * @param {matiere dans laquel la note est reçus } matiere_1 
     */
    ajouterNote(note_1, coef_1, matiere_1) {

        const note = new Note(this.id, note_1, coef_1, matiere_1)
        return note
        
        // let objNote = {
        //     note: note_1,
        //     coef: coef_1,
        //     matiere: matiere_1
        // }
        
        // this.notes.push(objNote)
        
    }


    
}

class Formation {
        
    constructor(nom, dateDebut, dateFin) {
    
        this.nom = nom
        this.dateDebut = dateDebut
        this.dateFin = dateFin
        this.matiere = [] // class: nom formateur [nom prenom]
        this.stagiaires = [] // class
    }


    ajouterMatiere (nom) { 
        this.matiere.push(new Matiere(nom) )
    }


    ajouterStagiaire (nom, prenom, dateNais) { 
        this.stagiaires.push(new Stagiaire(nom, prenom, dateNais) )
    }


}

class Note {

    /**
     * 
     * @param {*} id 
     * @param {*} note 
     * @param {*} coef 
     * @param {*} matiere 
     */
    constructor( id ,note, coef, matiere) {
        this.id = id // ID du stagiaire
        this.note = parseFloat(note)
        this.coef = parseInt(coef)
        this.matiere = matiere
    }

    /* calcule de la moyenne des notes de l'eleve avec les coefficients */
    static moyenneNote(tableauNotes,idStagiaire = -1) {

        // sommes des notes*coef
        // sommes des coef

        let sommeNoteCoef = 0
        let sommeCoef = 0
    
        tableauNotes.forEach(function(element) {
            if (element.id === idStagiaire || idStagiaire === -1) {
                sommeNoteCoef += element.note * element.coef
                sommeCoef += element.coef
            }

        });

        if (sommeCoef != 0 && tableauNotes.length !=0) {
            return sommeNoteCoef /sommeCoef
            }
        else {
            return -1
            }


    }
}

class Matiere {

    constructor(id, nom) {

        this.id = id
        this.nom = nom
        this.formateurs = []
    }

    ajouterFormateur (nom, prenom) { /* ajout d'un formateur */
        // this. = situtation dans la class
        // formateurs. = on choisi le tableau 
        // push = ajouter dans la tableau precedement cité
        // (new Formateur(nom,prenom))  = création d'instance de Formateur avec parametres
        this.formateurs.push(new Formateur(nom,prenom))

        // forme 2 moins condencé 
        //let nouveauFormateur = new Formateur(nom,prenom)
        //let.formateurs.push(nouveauFormateur)

    }


}

class Formateur {

    constructor (nom, prenom) {
        this.nom = nom
        this.prenom = prenom
    }
    
}


// let john = new Stagiaire("Smith", "John", "10/10/1990")
// let massiani = new Formateur("Massiani", "Gregory")
// let javaScript = new Matiere("JavaScript")
// javaScript.ajouterFormateur(massiani)


// jonh.ajouterNote(15,2,"JavaScript")

// console.log(john)
// console.log(javaScript)



