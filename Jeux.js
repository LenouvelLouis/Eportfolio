var resProjet;
var IMG ;
var TYPE;
var Titre ;
var description;
var complement;
var btn6quiprend;
var btnDemineurCPP;
var btnBeauvais;
var btnDemineurVB;
var Nav;
var Git;
function init(){
    resProjet=document.getElementById("ResProject");
    IMG =document.getElementById("IMGJeux");
    TYPE =document.getElementById("Type");
    Titre =document.getElementById("TitreJeux")
    description=document.getElementById("Description");
    complement=document.getElementById("Complement");
    btn6quiprend=document.getElementById("6quiprend");
    btnDemineurCPP=document.getElementById("DemineurCPP");
    btnBeauvais=document.getElementById("Beauvais");
    btnDemineurVB=document.getElementById("DemineurVB");
    btn6quiprend.addEventListener("click",quiprend);
    btnDemineurCPP.addEventListener("click",DemineurCPP);
    btnBeauvais.addEventListener("click",Beauvais);
    btnDemineurVB.addEventListener("click",DemineurVB);
    Nav = document.getElementById('Navbar');
    Git=document.getElementById("Git");
    btn6quiprend.click();

}


window.addEventListener("load",init);
function quiprend (){
    Titre.innerHTML="6 QUI PRENDS JAVA";
    IMG.src="./Img/6quiprend.jpg";
    TYPE.innerHTML="Développement Logiciel";
    description.innerHTML="L’objectif de ce projet était de programmer un jeu intitulé « 6 qui prends »\
    en plus d’utiliser tous types d’algorithmes qui font utiliser un grand nombre de\
   fonctions dans le langage Java ainsi que de découvrire le language Objet.";
     complement.innerHTML="Nous avions pour mission de recréer le jeu 6 qui prends comprenant toutes les règles du jeu.\
     Le joueur rentre la carte qu’il veut jouer et l’application s’occupe de gérer les manches et les victoires ou défaites.";
    Git.href="https://github.com/LenouvelLouis/6-qui-prend-Java";
}

function DemineurCPP (){
    Titre.innerHTML="DEMINEUR C++";
    IMG.src="./Img/demineurCpp.jpg";
    TYPE.innerHTML="Développement Logiciel";
    description.innerHTML="L’objectif de ce projet était de programmer un jeu intitulé « Démineur » ou « Minesweeper »\
    (en Anglais) en plus d’utiliser tous types d’algorithmes qui font utiliser un grand nombre de\
    fonctions dans le langage C++.";

    complement.innerHTML=" Nous avions 5 commandes à\
    réaliser pour ce jeu, que l’utilisateur devait entrer pour pouvoir jouer. Pour chaque\
    commande, il y avait un fichier texte disponible, en entrée « in » qu’on devait rentrer sur\
    l’invite de commande et un fichier de sortie « out » qui devait être le résultat attendu en sortie\
    avec notre programme. ";
    Git.href="https://github.com/LenouvelLouis/Demineur-CPP";
}

function Beauvais (){
    Titre.innerHTML="SITE WEB DU BEAUVAISIS";
    IMG.src="./Img/Beauvais.jpg";
    TYPE.innerHTML="Développement Web";
    description.innerHTML="L’objectif de ce projet était de faire la refonte d’un site parmis une liste de sites à refondre.Nous avons choisi celui du Beauvaisis.\
    Ce projet nous a permis de découvrir le Javascript et l'animation de site.";
    complement.innerHTML="Nous devions refondre le site mais garder 5 pages importantes du site original.\
     Notre mission était de mettre à jour le site en modifiant notamment l'esthétisme et l’ergonomie. \
     De plus, nous avions pour consigne de devoir ajouter une fonctionnalité importante en Javascript.";
    
    Git.href="https://github.com/LenouvelLouis/WebSite-Beauvais";
}

function DemineurVB (){
    Titre.innerHTML="DEMINEUR VB.NET";
    IMG.src="./Img/demineurVB.jpg";
    TYPE.innerHTML="Développement Logiciel";
    description.innerHTML="L’objectif de ce projet était de programmer un jeu intitulé « Démineur » ou « Minesweeper »\
    (en Anglais) en plus d’utiliser tous types d’algorithmes qui font utiliser un grand nombre de\
    fonctions dans le langage VB.NET";
    complement.innerHTML="Nous avions pour mission de créer une application recréant l'environnement du jeu démineur.\
     Le joueur peut notamment modifier l’affichage et les conditions d’une partie.\
      Il peut très bien aussi lancer une partie avec les paramètres par défauts ainsi que d'accéder à un tableau des scores déjà remplis.";
    
    Git.href="https://github.com/LenouvelLouis/Demineur-VB.NET";
}

