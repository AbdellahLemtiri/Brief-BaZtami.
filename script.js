

















let btnajouter = document.getElementById('ajouterBtn');
let formulaire = document.getElementById('formulaire');
let btnclose = document.getElementById('btnclose');
let cards = document.getElementById("cards");
let ajouter = document.getElementById('ajouter');
let revenus = document.getElementById('revenus');
let depenses = document.getElementById('depenses');
let solde = document.getElementById('solde');
let message = document.getElementById('message');


let tab = JSON.parse(localStorage.getItem('tab')) || [];

function afficher() {
    cards.innerHTML = "";
    let sommerv = 0;
    let sommedep = 0;

    for (let i = 0; i < tab.length; i++) {
        let t = tab[i];
        let color ;
        
        if(t.type === "Revenu"){
            color =  "bg-success text-light p-0";
        }
        else{
            color = "bg-danger text-light bg-opacity-75"; 
        }

        let newcard = document.createElement('div');
        newcard.classList.add('col-6');
        newcard.innerHTML =
            '<div class="card shadow-sm ' + color + '">' +
            '<div class="card-body d-flex justify-content-between align-items-center">' +
            '<div>' +
            '<h5 class="card-title"> Taype :' + t.type + '</h5>' +
            '<p class="card-text"> Description' + t.desc + '</p>' +
            '<p class="fw-bold"> Montant ' + t.montant + ' DH</p>' +
            '</div>' +
            '<div>' +
            '<button class="btn btn-sm btn-outline-light btn-modif" data-index="' + i + '"><i class="bi bi-pencil-square"></i></button> ' +
            '<button class="btn btn-sm btn-outline-light btn-supp" data-index="' + i + '"><i class="bi bi-trash"></i></button>' +
            '</div>' +
            '</div>' +
            '</div>'; 
            console.log(i);
        cards.appendChild(newcard);

        if (t.type === "Revenu") {
            sommerv = sommerv +t.montant;
        } else {
            sommedep = sommedep+ t.montant;
        }
    }

    revenus.innerText = sommerv + " DH";
    depenses.innerText = sommedep + " DH";
    solde.innerText = (sommerv - sommedep) + " DH";

    localStorage.setItem('tab', JSON.stringify(tab));
}

     function ajouterTransaction() {
    let montant = Number(document.getElementById('montants').value);
    let type = document.getElementById('type').value;
    let desc = document.getElementById('desc').value;

    if (desc === "" || montant <= 0) {
        message.innerHTML = " Veuillez remplir tous les champs correctement !";
        return;
    }
   message.innerHTML= "";
    let t = {
        type: type,
        desc: desc,
        montant: montant
    };

    tab.push(t);
    localStorage.setItem('tab', JSON.stringify(tab));

    document.getElementById('montants').value = ""
    document.getElementById('desc').value = "";
    message.innerHTML = "";
    formulaire.classList.add('d-none');
    afficher();
}


btnajouter.addEventListener('click', function () {
    formulaire.classList.remove('d-none');
});

btnclose.addEventListener('click', function () {
    formulaire.classList.add('d-none');
});

ajouter.addEventListener('click', ajouterTransaction);

cards.addEventListener('click', function (e) {
    if (e.target.closest('.btn-supp')) {
        let index = e.target.closest('.btn-supp').getAttribute('data-index');
        supprimerTransaction(index);
    } else if (e.target.closest('.btn-modif')) {
        let index = e.target.closest('.btn-modif').getAttribute('data-index');
        modifierTransaction(index);
    }
});

afficher();
