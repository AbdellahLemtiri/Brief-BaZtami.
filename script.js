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
      return;
     } else {
          formulaire.classList.add('d-none');
     }

     if (type === "Revenu") {
          sommerv = sommerv + montant;


          if (desc !== "" && montant !== "" && montant !== "") {
               let newcard = document.createElement('div');
               newcard.innerHTML = '<div> <div class="card shadow-sm bg-success bg-opacity-75"><div class="card-body d-flex justify-content-between">' +
                    '<h5 class="card-title">' + type + '</h5><p class="card-text">' + desc + '</p><p class="fw-bold">' + montant + "DH" + '</p> <div class=""><button rounded-5 class="btn btn-sm btn-outline-primary btn-edit"><i class="bi bi-pencil-square"></i></button><button rounded-5 class="btn btn-sm btn-outline-danger btn-delet"><i class="bi bi-trash"></i></button></div></div></div></div>';
               cards.appendChild(newcard);
          }



     }
     else if (type === "Depense") {
          sommedep = sommedep + montant;
          if (desc !== "" && montant !== "" && montant !== "") {
               let newcard = document.createElement('div');
               newcard.innerHTML = ' <div> <div class="card shadow-sm bg-danger bg-opacity-75" ><div class="card-body d-flex justify-content-between">' +
                    '<h5 class="card-title">' + type + '</h5><p class="card-text">' + desc + '</p><p class="fw-bold">' + montant + "DH" + '</p> <div class=""><button rounded-5 class="btn btn-sm btn-outline-primary btn-edit"><i class="bi bi-pencil-square"></i></button><button rounded-5 class="btn btn-sm btn-outline-danger btn-delet"><i class="bi bi-trash"></i></button></div></div></div></div>';
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



