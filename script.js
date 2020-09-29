class Artiste {
     constructor(nomArtiste,photoArtiste, genreMusicalArtiste,listeAlbum = [],labelArtiste)
     {
         this.name = nomArtiste;
         this.photo = photoArtiste;
         this.genre = genreMusicalArtiste;
         this.list = listeAlbum;
         this.label = labelArtiste;
     }
    chargerArtiste()
    {
        //creation de l'objet artiste1
        //affecter le contenu des propriétes de la classe au differents chanps dans notre page html
        document.getElementById('nameArtiste').innerText = this.name;
        document.getElementById('photo').src = this.photo;
        document.getElementById('genre').innerText = this.genre;
        for (var i =0; i <= 7; i++)
        {
            document.getElementsByClassName('list')[i].innerHTML=this.list[i];
        }
        document.getElementById('label').innerText =this.label ;

    }
}
var artiste1 =  new Artiste('Dadju','daju.jpg',
    'RNB', ['Je reviendrais','Maman','Lionne','Monica','Bob Marley','Christina','Jaloux','Ma fierté'],
    'G-Roche');

artiste1.chargerArtiste();
console.log(artiste1.photo);
//var chargerArtiste = (name, photo, genre, list,label) =>