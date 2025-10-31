let btnajouter = document.getElementById('ajouterBtn');
let formulaire = document.getElementById('formulaire');
let btnclose = document.getElementById('btnclose');
let cards = document.getElementById("cards");

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
          formulaire.classList.add('d-none');
     }

     if (type === "Revenu") {
          sommerv = sommerv + montant;
          

if (desc != "" || montant != "" || montant != 0){
 let newcard = document.createElement('div');
       newcard.innerHTML = ' <div class="card shadow-sm border-success"><div class="card-body">'+
    '<h5 class="card-title">' + type + '</h5><p class="card-text">' + desc + '</p><p class="fw-bold">' + montant + "DH"+'</p> <div class="d-flex justify-content-between"><button rounded-5 class="btn btn-sm btn-outline-primary edit-btn">Modifier</button><button rounded-5 class="btn btn-sm btn-outline-danger delete-btn">Supprimer</button></div></div></div>';
          cards.appendChild(newcard);
}
         


     }
     else if (type === "Depense") {
          sommedep = sommedep + montant;
          if (desc != "" || montant != "" || montant != 0){
          let newcard = document.createElement('div');
          newcard.innerHTML = '<strong class= "card bg-danger text-white bg-opacity-50 mb-3" > ' + '<i class="bi bi-dash-circle-dotted"></i>' + 'Description   :    ' + desc + '| Type :  ' + type + '<br>' + '| montant : ' + " " + montant + "dh" + '</strong>'
          cards.appendChild(newcard);
          }
     }


     sommesolde = sommerv - sommedep;
     revenus.innerText = sommerv + "DH";
     depenses.innerText = sommedep + "DH";
     solde.innerText = sommesolde + "DH";
      document.getElementById('montants').value = "";
      document.getElementById('desc').value = "";


});
