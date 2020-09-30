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
        this.notes = []
        
    }
    

    /**
     * 
     * @param {note recus} note_1 
     * @param {le coefficient} coef_1 
     * @param {matiere dans laquel la note est reçus } matiere_1 
     */
    ajouterNote(note_1, coef_1, matiere_1) {
        
        let objNote = {
            note: note_1,
            coef: coef_1,
            matiere: matiere_1
        }
        
        this.notes.push(objNote)
        
    }

    /* calcule de la moyenne des notes de l'eleve avec les coefficients */
    moyenneNote( ) {

        let sommeNoteCoef = 0
        let sommeCoef = 0
    
        this.notes.forEach(function(element) {
            sommeNoteCoef += element.note * element.coef
            sommeCoef += element.coef
        });

        if (sommeCoef != 0 && this.notes.length !=0) {
            let moyenneTotal
            moyenneTotal = sommeNoteCoef /sommeCoef
            return 'la moyenne de '+this.prenom+' '+this.nom+' est de '+moyenneTotal
            }
        else {
            return -1
            }


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
        this.matiere.push(new Matiere((nom))
    }


    ajouterStagiaire (nom, prenom, dateNais) { 
        this.stagiaires.push(new Stagiaire((nom, prenom, dateNais))
    }


}

class Note {
    constructor(note, coef, matiere) {
    
        this.note = note
        this.coef = coef
        this.matiere = matiere
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


let john = new Stagiaire("Smith", "John", "10/10/1990")
let massiani = new Formateur("Massiani", "Gregory")
let javaScript = new Matiere("JavaScript")
javaScript.ajouterFormateur(massiani)

console.log(john)
console.log(javaScript)



