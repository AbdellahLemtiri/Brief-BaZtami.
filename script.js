


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
            color =  "bg-success text-light ";
        }
        else{
            color = "bg-danger text-light bg-opacity-75 "; 
        }

        let newcard = document.createElement('div');
        newcard.classList.add('col-6');
      newcard.innerHTML =
    '<div class="card shadow-sm ' + color + ' mx-auto " style="max-width: 29rem;">' +
        '<div class="card-body d-flex justify-content-between align-items-center">' +
            '<div>' +
                '<h5 class="card-title">Type : ' + t.type + '</h5>' +
                '<p class="card-text">Description : ' + t.desc + '</p>' +
                '<p class="fw-bold">Montant ' + t.type + ' est : ' + t.montant + ' DH</p>' +
            '</div>' +
            '<div class="d-flex align-items-end">' +
                '<button class="btn btn-sm btn-outline-light btnmodif me-2" id="' + i + '">' +
                    '<i class="bi bi-pencil-square"></i>' +
                '</button>' +
                '<button class="btn btn-sm btn-outline-light btnsupp" id="' + i + '">' +
                    '<i class="bi bi-trash"></i>' +
                '</button>' +
            '</div>' +
        '</div>' +
    '</div>';

            console.log(i);
        cards.appendChild(newcard);

        if (t.type === "Revenu") {
            sommerv = sommerv + t.montant;
        } else {
            sommedep = sommedep+ t.montant;
        }
    }

    revenus.innerText = sommerv + " DH";
    depenses.innerText = sommedep + " DH";
    solde.innerText = (sommerv - sommedep) + " DH";

    localStorage.setItem('tab', JSON.stringify(tab));
}

     function  ajoutecrt() {
    let montant = Number(document.getElementById('montants').value);
    let type = document.getElementById('type').value;
    let desc = document.getElementById('desc').value;

    if (desc === "" || montant <= 0) {
        message.innerHTML = " Veuillez remplir tous les champs correctement !";
        return;
    }
   message.innerHTML= "";
    let frm = {
        type: type,
        desc: desc,
        montant: montant
    };

    tab.push(frm);
    localStorage.setItem('tab', JSON.stringify(tab));

    document.getElementById('montants').value = ""
    document.getElementById('desc').value = "";
    message.innerHTML = "";
    formulaire.classList.add('d-none');
    afficher();
}






function supprimercrd(id) {
    tab.splice(id, 1);
    localStorage.setItem('tab', JSON.stringify(tab));
    afficher();
}


function modifiecrd(id) {
    let t = tab[id];
    formulaire.classList.remove('d-none');
    document.getElementById('desc').value = t.desc;
    document.getElementById('montants').value = t.montant;
    document.getElementById('type').value = t.type;

    ajouter.onclick = function () {
        tab[id].desc = document.getElementById('desc').value;
        tab[id].montant = Number(document.getElementById('montants').value);
        tab[id].type = document.getElementById('type').value;
        localStorage.setItem('tab', JSON.stringify(tab));
        formulaire.classList.add('d-none');
        afficher();
        ajouter.onclick = ajoutecrd();
    };
}

btnajouter.addEventListener('click', function () {
    formulaire.classList.remove('d-none');
});

btnclose.addEventListener('click', function () {
    formulaire.classList.add('d-none');
});

ajouter.addEventListener('click', ajoutecrt);


cards.addEventListener('click', function (e) {
    if (e.target.closest('.btnsupp')) {
        let id = e.target.closest('.btnsupp').getAttribute('id');
       
        supprimercrd(id);
    } else if (e.target.closest('.btnmodif')) {
        let id = e.target.closest('.btnmodif').getAttribute('id');
        modifiecrd(id);
    }
});

afficher();
