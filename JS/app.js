/*partie page d'accueil*/
const home = {
    template: `
    <div class="container-fluid p-0">
        <div class="row">
            <div class="col-md mx-auto">
                <div class="container p-0">
                    <div id="demo" class="carousel slide carousel-fade" data-ride="carousel">
                        <!-- Indicateurs -->
                        <ul class="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" class="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                        </ul>
                        <!-- Carrousel -->
                            <div class="carousel-inner fed-car">
                                <div class="carousel-item active" data-interval="4000">
                                    <img src="assets/carroussel/lex.jpg" height="350px" alt="Carrousel slide 1" class="d-block w-100">
                                    <div class="carousel-caption text-right">
                                        <p><i>La lumière est dans le livre. Ouvrez le livre tout grand. Laissez-le rayonner, laissez-le faire.</i></p>
                                        <p><br><b> Victor Hugo</b></p>
                                    </div>
                                </div>
                                <div class="carousel-item" data-interval="2000">
                                    <img src="assets/carroussel/livre2.jpg" height="350px" alt="Carrousel slide 2" class="d-block w-100">
                                    <div class="carousel-caption text-right">
                                        <p><i>On aime toujours un peu à sortir de soi, à voyager quand on lit.</i></p>
                                        <p><br><b> Marcel Proust</b></p>
                                    </div>
                                </div>
                                <div class="carousel-item" data-interval="1000">
                                    <img src="assets/carroussel/images2.jpg" height="350px" alt="Carrousel slide 3" class="d-block w-100">
                                    <div class="carousel-caption text-right">
                                        <p style="color:black"><i>Moi j'ai appris à lire, et ben je souhaite ça à personne.</i></p>
                                        <p style="color:black"><br><b> Léodagan</b></p>
                                    </div>
                                </div>
                            </div>
                        <!-- Contrôles -->
                        <a class="carousel-control-prev" href="#demo" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Précédent</span>
                        </a>
                        <a class="carousel-control-next" href="#demo" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Suivant</span>
                        </a>
                    </div>
                </div> 
                <h2>La librairie <span>qui vous redonne </span>le gout de lire.</h2>
            </div>
        </div>
    </div>`,
};
/* fin partie page d'accueil*/

/* partie boutique*/
const boutique = {

    template:
        ` <div class="container">
    <div class="row" v-if="isshow">
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" id="inlineCheckbox1" value="all" v-model="filtre">
            <label class="form-check-label" for="inlineCheckbox1">Tous</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" id="inlineCheckbox2" value="manga" v-model="filtre">
            <label class="form-check-label" for="inlineCheckbox2">Manga</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" id="inlineCheckbox1" value="bande dessinée" v-model="filtre">
            <label class="form-check-label" for="inlineCheckbox3">Bande Dessinée</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" id="inlineCheckbox2" value="roman" v-model="filtre">
            <label class="form-check-label" for="inlineCheckbox4">Roman</label>
        </div>
    </div>
    <div class="row text-center">
<!-----formulaire a la validation du panier-->
        <div class="col-sm-8" v-if="!isshow" >
            <form class="lex-contact" v-if="!confirmation">
                    <div v-if="majeur==1">
                        <p class="stx-red">tu dois être majeur, vas chercher ton papa pour pouvoir commander en ligne !</p>
                    </div>
                    <div v-if="majeur==2">
                        <p class="stx-red">l'âge s'écrit en nombre, tu crois c'est rigolo ?</p>
                    </div>
                    <div v-if="passage">
                        <p>avant de pouvoir continuer, vous devez être majeur, quel est votre age ? <input v-model="age"/></p><button v-on:click="ageok()">ok</button>
                    </div>
                    <transition name="fondu">
                <div v-if="!passage">
                    <div class="row justify-content-center">
                        <div class="col-5">
                            <label><b><i>Nom :</i></b></label>
                            <input type="text" class="form-control" placeholder="nom" v-model="nom">
                        </div>
                        <div class="col-5">
                            <label><b><i>Prénom</i></b></label>
                            <input type="text" class="form-control" placeholder="prénom" v-model="prenom"/>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-10 mb-3">
                            <label><b><i>adresse</i></b></label>
                            <textarea class="form-control"  placeholder="N° voie et nom de rue" v-model="nomvoie"></textarea>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-5">
                            <label><b><i>Code postal</i></b></label>
                            <input type="text" class="form-control" placeholder="63150" v-model="codepost" />
                        </div>
                        <div class="col-5">
                            <label for="validation"><b><i>Ville</i></b></label>
                            <input type="text" class="form-control" placeholder="La Bourboule" v-model="ville"/>
                        </div>
                    </div>
                    <div class="button-contact">
                        <button  v-on:click="paiement()" class="btn btn-warning">Envoyer</button>
                    </div>
 <!--message erreur-->                   
                    <div>
                    <p class="stx-red">{{verif}}</p>
                    </div>
<!--fin message erreur-->                      
                </div>
                </transition>
                <div class="button-contact">
                <button  v-on:click="isshow=!isshow" class="btn btn-warning">revenir à la boutique</button>
            </div>
            </form>
        </div>
<!--fin de formulaire validation panier-->
<!--début recap de l'envoi-->
<transition name="fondu">
        <div class="col-sm-8" v-if="confirmation">
            <div class="stx-envoicmd">
                <p> {{date}}</p>
                <p>votre commande a bien été prise en compte</p>
                <p>elle sera préparée dans les plus brefs délais</p>
                <p> vous serez livré d'ici 4j, soit le {{datelivr}}.</p>
                <hr>
                <p> adresse de livraison :</p>
                <p> {{prenom}} {{nom}}</p>
                <p> {{nomvoie}} </p>
                <p>{{codepost}} {{ville}}</p>
                <hr> <p>prix total de la commande : {{total}}€</p>
                <p> on prends le liquide et les tickets resto !!! </p>
                <button v-on:click="final()" class="btn btn-warning">confirmer</button>
                <button v-on:click="isshow=!isshow,confirmation=!confirmation" class="btn btn-warning">annuler</button>
            </div>
        </div>
        </transition>
<!--fin recap de l'envoi-->
<!-- librairie-->
        <div class="col-sm-8" v-if="isshow">
            <div class="row">
                <div class="col-sm-4 stx-justify" v-for="(livre) in librairie" v-show="filtre==livre.categorie ||filtre==livre.all">
                    <div class="stx-cards" >
                        <img :src="livre.couverture" alt="couverture de livre">
                        <img style="position:absolute; right:0" src="assets/outofstock.png" v-if="livre.quantite==0">
                        <div class="stx-cards-entieres">
                            <div class="stx-titre-card">
                                <h3 >{{livre.titre}}</h3>
                            </div>
                            <div class="stx-cards-cat">
                                <p>catégorie: {{livre.categorie}}<br>quantité: {{livre.quantite}} <br> date de parution: {{livre.datesortie}} <br>  prix: {{livre.prix}}€</p>
                            </div>
                            <div class="button-contact">
                            <button class="btn btn-warning" v-on:click="ajoutpanier(livre)" v-if="livre.quantite">acheter</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<!--fin librairie-->
<!--partie panier-->
        <div class="col-sm-4">
            <div class="stx-panier" v-if="total>0">
                <div class= stx-htpanier>
                    <svg width="5em" height="3em" viewBox="0 0 16 16" class="bi bi-basket" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z" />
                    </svg>  
                </div>  
                <div class="stx-pan-contenu">
                    <div v-for="(livre,index) in panier">
                        <div class="stx-flex stx-marg">
                            <img :src="livre.couverture" width="30px">
                            <p class="stx-txtw">{{livre.titre}} {{livre.prix}}€</p>
                            <img src="assets/supp.png" v-if="isshow=isshow" v-on:click="del(index)" width="25px">
                        </div>
                    </div>
                </div>
                <hr>
                <p> prix HT : {{sstotal}}€</p>
                <p> TVA 20% :{{tva}}€</p> 
                <hr>
                <div class="stx-flex">
                    <p> total panier: {{total}}€</p>
                    <div class="button-contact">
                    <button class="btn btn-warning" v-if="isshow" v-on:click="isshow=!isshow">payer</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`,

    data: function () {
        return ({
            librairie: [
                { id: 1, titre: "Naruto", quantite: 5, categorie: "manga", couverture: "./assets/manga/naruto1.jpg", datesortie: "12/01/2010", prix: "14.99", all: "all" },
                { id: 2, titre: "Food wars", quantite: 3, categorie: "manga", couverture: "./assets/manga/naruto2.jpg", datesortie: "17/01/2012", prix: "9.99", all: "all" },
                { id: 3, titre: "One piece", quantite: 5, categorie: "manga", couverture: "./assets/manga/naruto3.jpg", datesortie: "12/01/2020", prix: "14.99", all: "all" },
                { id: 4, titre: "One piece", quantite: 1, categorie: "manga", couverture: "./assets/manga/naruto4.jpg", datesortie: "18/11/2007", prix: "15.99", all: "all" },
                { titre: "Demon Slayer", id: 5, quantite: 5, categorie: "manga", couverture: "./assets/manga/naruto5.jpg", datesortie: "13/01/1938", prix: "8.99", all: "all" },
                { titre: "Mecka Z", id: 6, quantite: 5, categorie: "manga", couverture: "./assets/manga/naruto6.jpg", datesortie: "11/01/1983", prix: "10.99", all: "all" },
                { titre: "Dragon Ball", id: 7, quantite: 2, categorie: "manga", couverture: "./assets/manga/naruto7.jpg", datesortie: "19/01/1984", prix: "14.80", all: "all" },
                { titre: "two piece", id: 8, quantite: 5, categorie: "manga", couverture: "./assets/manga/naruto8.jpg", datesortie: "10/01/1965", prix: "5.90", all: "all" },
                { titre: "Naruto", id: 9, quantite: 4, categorie: "manga", couverture: "./assets/manga/naruto9.jpg", datesortie: "13/01/1944", prix: "6.49", all: "all" },
                { titre: "Naruto", id: 10, quantite: 5, categorie: "manga", couverture: "./assets/manga/naruto10.jpeg", datesortie: "16/01/1975", prix: "4.49", all: "all" },
                /*10*/
                { titre: "Stephen king", id: 11, quantite: 3, categorie: "roman", couverture: "./assets/roman/roman1.jpg", datesortie: "11/04/1996", prix: "14.99", all: "all" },
                { titre: "Hannelore Cayre", id: 12, quantite: 5, categorie: "roman", couverture: "./assets/roman/roman2.jpg", datesortie: "22/11/1996", prix: "10.90", all: "all" },
                { titre: "La tribu libre", id: 13, quantite: 2, categorie: "roman", couverture: "./assets/roman/roman3.jpg", datesortie: "13/11/2004", prix: "7.99", all: "all" },
                { titre: "Stephen King", id: 14, quantite: 5, categorie: "roman", couverture: "./assets/roman/roman4.jpg", datesortie: "19/10/2002", prix: "8.90", all: "all" },
                { titre: "l'étincelle", id: 15, quantite: 4, categorie: "roman", couverture: "./assets/roman/roman5.jpg", datesortie: "26/11/1996", prix: "17.99", all: "all" },
                { titre: "Mes vrais enfants", id: 16, quantite: 5, categorie: "roman", couverture: "./assets/roman/roman6.jpg", datesortie: "14/12/1985", prix: "10.90", all: "all" },
                { titre: "Orient express", id: 17, quantite: 4, categorie: "roman", couverture: "./assets/roman/roman7.jpg", datesortie: "16/11/1974", prix: "18.90", all: "all" },
                { titre: "La Mer", id: 18, quantite: 5, categorie: "roman", couverture: "./assets/roman/roman8.jpeg", datesortie: "16/01/1985", prix: "12.99", all: "all" },
                { titre: "1000 meufs", id: 19, quantite: 5, categorie: "roman", couverture: "./assets/roman/roman9.jpg", datesortie: "22/01/1994", prix: "14.99", all: "all" },
                { titre: "une femme", id: 20, quantite: 4, categorie: "roman", couverture: "./assets/roman/roman10.jpeg", datesortie: "20/09/1985", prix: "12.99", all: "all" },
                /*10*/
                { titre: "Asterix", id: 21, quantite: 5, categorie: "bande dessinée", couverture: "./assets/bd/bd1.jpg", datesortie: "13/01/2014", prix: "14.99", all: "all" },
                { titre: "Asterix", id: 22, quantite: 2, categorie: "bande dessinée", couverture: "./assets/bd/bd2.jpg", datesortie: "12/08/1999", prix: "12.99", all: "all" },
                { titre: "Garfield", id: 23, quantite: 5, categorie: "bande dessinée", couverture: "./assets/bd/bd3.jpg", datesortie: "16/01/1985", prix: "8.99", all: "all" },
                { titre: "Les Rhinocéros", id: 24, quantite: 5, categorie: "bande dessinée", couverture: "./assets/bd/bd4.jpg", datesortie: "16/07/1984", prix: "7.49", all: "all" },
                { titre: "Les Minions", id: 25, quantite: 4, categorie: "bande dessinée", couverture: "./assets/bd/bd5.jpg", datesortie: "16/01/1985", prix: "9.99", all: "all" },
                { titre: "Avengers", id: 26, quantite: 5, categorie: "bande dessinée", couverture: "./assets/bd/bd6.jpg", datesortie: "16/01/1984", prix: "3.59", all: "all" },
                { titre: "Titeuf", id: 27, quantite: 2, categorie: "bande dessinée", couverture: "./assets/bd/bd7.jpg", datesortie: "16/01/2000", prix: "8.69", all: "all" },
                { titre: "Journal papa", id: 28, quantite: 3, categorie: "bande dessinée", couverture: "./assets/bd/bd8.jpg", datesortie: "16/05/2015", prix: "19.90", all: "all" },
                { titre: "Paris sous Seine", id: 29, quantite: 5, categorie: "bande dessinée", couverture: "./assets/bd/bd9.jpg", datesortie: "16/03/2020", prix: "13.79", all: "all" },
                { titre: "Titeuf", id: 30, quantite: 3, categorie: "bande dessinée", couverture: "./assets/bd/bd10.jpg", datesortie: "16/01/1985", prix: "6.49", all: "all" },
            ],
            panier: [],
            sstotal: 0,
            tva: 0,
            total: 0,
            filtre: ["all"],
            isshow: true,
            nom: null,
            prenom: null,
            nomvoie: null,
            codepost: null,
            ville: null,
            age: null,
            confirmation: false,
            formulaire: [],
            date: null,
            datelivr: null,
            majeur: 0,
            passage: true,
            verif: null,
        })
    },

    methods: {
        ageok() {
            if (isNaN(this.age)) {
                this.majeur = 2
            } else {
                if (this.age < 18) {
                    this.majeur = 1
                } else {
                    this.passage = !this.passage
                }
            }
        },

        final() {
            localStorage.removeItem('panier');
            alert("merci pour votre achat");
            document.location.href = 'accueil.html';
        },

        paiement() {
            if (!this.nom || !isNaN(this.nom)) { this.verif = "erreur dans le champs nom" }
            else {
                if (!this.prenom || !isNaN(this.prenom)) { this.verif = "erreur dans le champs prénom" }
                else {
                    if (!this.nomvoie || !isNaN(this.nomvoie)) { this.verif = "erreur dans le champs adresse" }
                    else {
                        if (!this.ville || !isNaN(this.ville)) { this.verif = "erreur dans le champs ville" }
                        else {
                            if (!this.codepost || isNaN(this.codepost) || this.codepost.length !== 5) { this.verif = "erreur dans le champs code postal" }
                            else {
                                this.confirmation = !this.confirmation;
                                var d = new Date();
                                this.date = d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear();
                                this.datelivr = d.getDate() + 4 + '-' + (d.getMonth() + 1) + '-' + d.getFullYear();
                                this.passage = !this.passage;
                                this.verif = null;

                            }
                        }
                    }
                }

            }

        },

        ajoutpanier(livre) {

            livre.quantite = Number(livre.quantite) - 1
            this.panier.push(livre);
            this.sstotal = Math.round((Number(this.sstotal) + Number(livre.prix)) * 100) / 100;
            this.tva = Math.round((Number(this.sstotal) * 20 / 100) * 100) / 100;
            this.total = Math.round((Number(this.sstotal) + Number(this.tva)) * 100) / 100;
            this.saveLs();
        },

        del: function (index) {
            let x = (this.panier[index].id);
            for (let i = 0; i <= this.librairie.length - 1; i++) {
                if (x == this.librairie[i].id) {
                    this.librairie[i].quantite = Number(this.librairie[i].quantite) + 1;
                };
            };
            this.panier.splice(index, 1)
            this.sstotal = 0
            this.key = this.panier.length - 1;
            for (let i = 0; i <= this.key; i++) {
                this.sstotal = Math.round((Number(this.sstotal) + Number(this.panier[i].prix)) * 100) / 100;
            }
            this.tva = Math.round((Number(this.sstotal) * 20 / 100) * 100) / 100;
            this.total = Math.round((Number(this.sstotal) + Number(this.tva)) * 100) / 100;
            this.saveLs();
        },
        saveLs() {
            const parsed = JSON.stringify(this.panier);
            const parselib = JSON.stringify(this.librairie);
            localStorage.setItem('panier', parsed);
            localStorage.setItem('librairie', parselib);
        },

    },
    mounted: function () {

        let getLSA = localStorage.getItem('librairie');
        if (getLSA) {
            this.librairie = JSON.parse(getLSA);
        };

        let getLS = localStorage.getItem('panier');
        if (getLS) {
            this.panier = JSON.parse(getLS);
            this.sstotal = 0
            this.key = this.panier.length - 1;
            for (let i = 1; i <= this.key; i++) {
                this.sstotal = Math.round((Number(this.sstotal) + Number(this.panier[i].prix)) * 100) / 100;
            }
            this.tva = Math.round((Number(this.sstotal) * 20 / 100) * 100) / 100;
            this.total = Math.round((Number(this.sstotal) + Number(this.tva)) * 100) / 100;
        };
    },

};
/* fin partie boutique*/

/*  partie livre d'occasion*/
const occaz = {
    template: `<div class="container">
    <div class="row">
    <!-- librairie-->
        <div class="col-sm-8">
            <div class="row">
                <div class="col-sm-4 stx-justify" v-for="(livre) in librairie">
                    <div class="stx-cards" >
                        <img :src="livre.couverture" alt="couverture de livre">
                        <div class="stx-cards-entieres">
                            <div class="stx-titre-card">
                                <h3 >{{livre.titre}}</h3>
                            </div>
                            <div class="stx-occaz-cat">
                                <p>vendeur: {{livre.vendeur}}  <br>  prix: {{livre.prix}}€</p>
                            </div>
                            <div class="button-contact">
                                <button v-if="!livre.tel" v-on:click="toogletel(livre)" class="btn btn-warning stx-occaz-marg">contact vendeur</button>
                                <button v-if="livre.tel" v-on:click="toogletel(livre)" class="btn btn-warning stx-occaz-marg">{{livre.numtel}}</button>
                            </div>
                        </div>
                    </div>
                </div>
<!--ajoutlivre-->
                <div class="col-sm-4 stx-justify" v-for="(livre) in livre">
                    <div class="stx-cards" >
                        <img :src="livre.couverture" alt="couverture de livre">
                        <div class="stx-cards-entieres">
                            <div class="stx-titre-card">
                                <h3 >{{livre.titre}}</h3>
                            </div>
                            <div class="stx-cards-cat">
                                <p>vendeur: {{livre.vendeur}} <br> téléphone: {{livre.numtel}} <br>  prix: {{livre.prix}}€</p>
                            </div>
                        </div>
                    </div>
                </div>
<!--fin ajoutlivre-->               
            </div>
        </div>
<!--fin librairie-->
<!--ajout livre occasion-->
        <div class="col-sm-4">
        <div class="text-center stx-panier">
            <p>ajouter un livre</p>
            <hr>
            <p >vendeur: </p><input v-model="vendeur"></input>
            <p >nom du livre: </p><input v-model="titre"></input>
            <p >prix: </p><input v-model="prix"></input>
            <p >téléphone:</p><input v-model="numtel"></input> 
            <br>
            <div class="button-contact">
            <button v-on:click="ajout()" class="btn btn-warning">ajouter</button>
        </div>
            <br>
         </div>
        </div>
        </div>
    </div>`,

    data: function () {
        return ({
            librairie: [
                { id: 2, titre: "Tintin lune", vendeur: "Adnen", couverture: "./assets/occaz/occaz2.jpg", numtel: "0610152030", prix: "9.99", tel: false },
                { id: 1, titre: "Martine cake", vendeur: "Joseph", couverture: "./assets/occaz/occaz1.jpg", numtel: "0615203040", prix: "14.99", tel: false },
                { id: 3, titre: "Martine a 3gr", vendeur: "Thibault", couverture: "./assets/occaz/occaz3.jpg", numtel: "0606060606", prix: "14.99", tel: false },
                { id: 4, titre: "Martine congel", vendeur: "Marouane", couverture: "./assets/occaz/occaz4.jpg", numtel: "0786221223", prix: "15.99", tel: false },
                { titre: "Martine crazy", id: 5, vendeur: "Amaury", couverture: "./assets/occaz/occaz5.jpg", numtel: "0612285664", prix: "8.99", tel: false },
                { titre: "Tintin disco", id: 6, vendeur: "Jérémy", couverture: "./assets/occaz/occaz6.jpg", numtel: "0622166896", prix: "10.99", tel: false },
                { titre: "Tintin kangoo", id: 7, vendeur: "Matthieu", couverture: "./assets/occaz/occaz7.jpg", numtel: "0753388885", prix: "14.80", tel: false },
            ],
            livre: [],
            vendeur: null,
            titre: null,
            id: null,
            couverture: "./assets/occaz/occaz",
            ext: ".jpg",
            numtel: null,
            prix: null,
            isshow: false,
            tel: false,
        })
    },
    methods: {
        toogletel(livre) {
            this.tel = !this.tel;
            livre.tel = this.tel;
        },

        ajout() {
            this.key = this.librairie.length + 1;
            this.librairie.push({ id: this.key, titre: this.titre, vendeur: this.vendeur, couverture: this.couverture + this.key + this.ext, numtel: this.numtel, prix: this.prix, tel: this.tel })
        },
    }
};

/*  fin partie livre d'occasion*/

/*  partie contact*/
const contact = {
    template: `<div>
                <form class="container lex-contact" v-if="isshow">
                    <div class="row justify-content-center">
                        <div class="col-4">
                            <label for="validation"><b><i>Nom</i></b></label>
                            <input type="text" class="form-control" v-model="nom" placeholder="nom">
                        </div>
                        <div class="col-4">
                            <label for="validation"><b><i>Prénom</i></b></label>
                            <input type="text" class="form-control" v-model="prenom" placeholder="prénom" />
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-4">
                            <label for="validation"><b><i>E-mail</i></b></label>
                            <input type="email" class="form-control" v-model="email" placeholder="name@example.com" />
                        </div>
                        <div class="col-4">
                            <label for="validation"><b><i>Téléphone</i></b></label>
                            <input type="text" class="form-control" v-model="telephone" placeholder="06...." />
                        </div>
                    </div>
                    <div class="row was-validated justify-content-center">
                        <div class="col-8 mb-3">
                            <label for="validationTextarea"><b><i>Votre demande : </i></b></label>
                            <textarea class="form-control" v-model="message" placeholder="votre commentaire ici"></textarea>
                            <div class="button-contact">
                                <button v-on:click="validform()" class="btn btn-warning">Envoyer</button>
                            </div>
                            <p class="stx-red">{{verif}}</p>
                        </div>
                    </div>
                </form>
<!--fin formulaire et début message envoyé-->
                <transition name="fondu">
                    <div class="container" v-if="!isshow">
                        <div class="row justify-content-center">
                            <div class="col-8 text-center stx-envoicmd">
                                <p>Bonjour,{{prenom}}</p>
                                <p>Nous avons bien reçu votre message</p>
                                <p>Nous faisons tout notre possible pour vous répondre dans les plus brefs délais</p>
                                <button v-on:click="isshow=!isshow" class="btn btn-warning">retour</button>
                            </div>
                        </div>
                    </div>
                </transition>
</div>`,
    data: function () {
        return ({
            nom: null, prenom: null, email: null, telephone: null, message: null,
            isshow: true,
            verif: null,
        })
    },
    methods: {

        validform() {
            if (!this.nom || !isNaN(this.nom)) { this.verif = "erreur dans le champs nom" }
            else {
                if (!this.prenom || !isNaN(this.prenom)) { this.verif = "erreur dans le champs prénom" }
                else {
                    if (!this.email || !isNaN(this.email)) { this.verif = "erreur dans le champs email" }
                    else {
                        if (!this.message || !isNaN(this.message)) { this.verif = "erreur dans le champs message" }
                        else {
                            if (!this.telephone || isNaN(this.telephone) || this.telephone.length !== 10) { this.verif = "erreur dans le champs telephone" }
                            else {
                                this.verif = null;
                                this.isshow = !this.isshow
                            }
                        }
                    }
                }

            }

        }
    }
};
/*  fin partie contact*/

/*   partie livre d'or*/
const goldbook = {
    template:
        `<div class="container">
    <div class="row">
        <div class="col-sm-5">  
            <div class="row">
                <ul class="align">
                    <li>
                        <figure class='book'>
                        <!-- Front -->
                        <ul class='hardcover_front'>
                            <li>
                                <div class="coverDesign blue">
                                    <h1>Livre</h1>
                                    <p>d'or</p>
                                </div>
                            </li>
                            <li></li>
                        </ul>
                        <!-- Pages -->
                        <ul class='page'>
                            <li></li>
                            <li class="text-center">
                                <a class="btn-light stx-btnform" v-on:click="isshow=!isshow">laisser un commentaire</a>
                            </li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <!-- Back -->
                        <ul class='hardcover_back'>
                            <li></li>
                            <li></li>
                        </ul>
                        <ul class='book_spine'>
                            <li></li>
                            <li></li>
                        </ul>
                        </figure>
                    </li>
                </ul>
            </div>   
                                                                <!--au dessus livre-->     
            <transition name="fondu">
                <div class="row stx-golden" v-if="isshow">
                    <div class=col-sm-2>
                    </div>
                    <div class="col-sm-7 stx-justify">
                        <form>
                            <label for="pseudo"><b><i>Votre pseudo</i></b></label>
                            <input type="text" v-model="pseudo">
                            <label for="commentaire"><b><i>Message</i></b></label>
                            <textarea v-model="commentaire" rows="3"></textarea>
                                <div class="button-message">
                                    <button class="btn btn-warning stx-btnform" v-on:click="envoicom()">Envoyer</button>
                                </div>        
                        </form>
                    </div>
                </div>
            </transition>
        </div>
        <div class="col-sm-7">
            <div class="commentaire">
                <h5>Martin</h5>
                <h6>06/10/2020</h6>
                <p><i>"c'est vraiment géniale, j'ai pu acheter le livre Vue.JS pour les Noobs <br>
                ça m'a vraiment aidé parce que je capte vraiment un beignet!!!"</i></p>
            </div>
            <div class="commentaire">
                <h5>Steven</h5>
                <h6>05/10/2020</h6>
                <p><i>"plutôt sympas, un large choix."</i></p>  
            </div>
            <div class="commentaire">
                <h5>Marou06</h5>
                <h6>03/10/2020</h6>
                <p><i>"Cette bibliotheque c'est de la balle, ça me donne trop envie d'apprendre à lire !!!"</i></p>    
            </div>
            <div class="commentaire" v-for="key in comment">
                <h5>{{key.pseudo}}</h5>
                <h6>{{key.date}}</h6>
                <p><i>{{key.commentaire}}</i></p> 
            </div>
        </div>
    </div>
</div>`,
    data: function () {
        return ({
            isshow: false,
            pseudo: null,
            commentaire: null,
            comment: [],

        })
    },
    methods: {
        envoicom() {
            if (this.pseudo && this.commentaire) {
                var d = new Date();
                var date = d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
                console.log(date);
                this.comment.push({ pseudo: this.pseudo, date: date, commentaire: this.commentaire });
                this.isshow = !this.isshow;
                console.log(this.isshow);
            }
            else { alert("veuillez entrer un pseudo et un commentaire"); }

        },
    },
    computed: {

    }

};
/*   fin partie livre d'or*/

/*partie panier*/
const panier = {
    template: `<div> </div>`
};
/*partie panier*/
/*partie lien inter-page*/
var routes = [
    { path: "/", component: home },
    { path: "/boutique", component: boutique },
    { path: "/livre-seconde-vie", component: occaz },
    { path: "/contact", component: contact },
    { path: "/goldbook", component: goldbook },
    { path: "/panier", component: panier },

]

const router = new VueRouter({
    routes: routes
})
/*fin partie lien inter-page*/



/*vue.JS ici*/
var vm = new Vue({
    el: "#app",
    data: {

    },
    components: {
    },
    router: router
});
