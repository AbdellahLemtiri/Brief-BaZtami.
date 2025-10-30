let btnajouter = document.getElementById('ajouterBtn');
let formulaire = document.getElementById('formulaire');
let btnclose = document.getElementById('btnclose');
let cards = document.getElementById('les_cards');

let ajouter = document.getElementById('ajouter');


let sommerv = 0;
let sommedep = 0;
let sommesolde = 0;

btnajouter.addEventListener('click', function () {
     formulaire.classList.remove('d-none');
});

btnclose.addEventListener('click', function () {
     formulaire.classList.add('d-none');
});

ajouter.addEventListener('click', function () {
     let montant = Number(document.getElementById('montants').value);
     let type = document.getElementById('type').value;
     let desc = document.getElementById('desc').value;
     let message = document.getElementById('message');
     let revenus = document.getElementById('revenus');
     let depenses = document.getElementById('depenses');
     let solde = document.getElementById('solde');


     if (desc === "" || montant === "" || montant <= 0) {
          message.innerHTML = "Veuillez entrer les donnees completes du formulaire !";
          
     } else {
          message.innerHTML = "";
     }


     if (type === "Revenu") {
          sommerv += montant;
     }
     else if (type === "Depense") {
          sommedep += montant;
     }


     sommesolde = sommerv - sommedep;


     revenus.innerText = sommerv + " DH";
     depenses.innerText = sommedep + " DH";
     solde.innerText = sommesolde + " DH";


     formulaire.classList.add('d-none');


     document.getElementById('montants').value = "";
     document.getElementById('desc').value = "";

    
});
