function IzracunKandidata (){

    var vjer_marketing, vjer_dizajn, vjer_logistika, vjer_pogInzenjer, vjer_matInzenjer = 0;

    var ime = document.getElementsByName("ime")[0].value;
    var prezime = document.getElementsByName("prezime")[0].value;
    var spol = +document.getElementsByName("spol")[0].checked; //1-m, 0-ž

    var datumRodjenja = Date.parse(document.getElementsByName("datum_rodjenja")[0].value)/(1000*60*60*24)/365;
    var danasnjiDatum = Date.parse(new Date())/(1000*60*60*24)/365;
    var punoljetan = ((danasnjiDatum - datumRodjenja) - ((danasnjiDatum - datumRodjenja)/(4*365))) > 18

    var prijasnjeIskustvo = +document.getElementsByName("iskustvo")[0].checked;

    var brzinaUcenjaVjestina = document.getElementsByName("vjestine")[0];
    var brzinaUcenjaVjestinaVrijednost = parseInt(brzinaUcenjaVjestina.options[brzinaUcenjaVjestina.selectedIndex].value);

    var marketingIskustvo = +document.getElementsByName("marketing")[0].checked;

    var smatrateLiSeKreativnim = +document.getElementsByName("kreativnost")[0].checked;

    var funkcionirateLiPodStresom = +document.getElementsByName("stres")[0].checked;

    var najvaznijaOsobina = document.getElementsByName("osobina")[0];
    var najvaznijaOsobinaVrijednost = najvaznijaOsobina.options[najvaznijaOsobina.selectedIndex].value;

    if(najvaznijaOsobinaVrijednost == "kreativnost"){
        vjer_dizajn+= 5;
        vjer_logistika++;
        vjer_pogInzenjer++;
        vjer_marketing++;
    }
    else if(najvaznijaOsobinaVrijednost == "inovativnost"){
        vjer_logistika++;
        vjer_dizajn++;
    }
    else if(najvaznijaOsobinaVrijednost == "komunikativnost"){
        vjer_logistika++;
        vjer_marketing++;
    }
    else if(najvaznijaOsobinaVrijednost == "timski-rad"){
        vjer_logistika++;
        vjer_matInzenjer++;
        vjer_pogInzenjer++;
    }
    else if(najvaznijaOsobinaVrijednost == "ucenje"){
        vjer_logistika++;
        vjer_marketing++;
    }
    else if(najvaznijaOsobinaVrijednost == "upornost"){
        vjer_marketing++;
    }
    else if(najvaznijaOsobinaVrijednost == "marljivost"){
        vjer_pogInzenjer++;
        vjer_marketing++;
    }
    
    var timskiIgrac = +document.getElementsByName("timski-igrac")[0].checked;

    var pogreska = +document.getElementsByName("pogreske")[0].checked;

    var jezici = document.getElementsByName("jezici")[0];
    var jeziciVrijednost = parseInt(jezici.options[jezici.selectedIndex].value);

    var inicijativa = +document.getElementsByName("inicijativa")[0].checked;

    var duljinaZaposlenja = document.getElementsByName("duljina-zaposlenja")[0].value;

    var upoznatostPoluvodicima = document.getElementsByName("poluvodici")[0];
    var upoznatostPoluvodicimaVrijednost = parseInt(jezici.options[jezici.selectedIndex].value);

    var organizacijaVremena = +document.getElementsByName("raspolozivost-vremena")[0].checked;

    var matematika = document.getElementsByName("matematika")[0];
    var matematikaVrijednost = parseInt(matematika.options[matematika.selectedIndex].value);

    var materijaliUpoznatost = document.getElementsByName("materijali")[0];
    var materijaliUpoznatostVrijednost = parseInt(materijaliUpoznatost.options[materijaliUpoznatost.selectedIndex].value);

    var fizikaFluida = +document.getElementsByName("fizikafluida")[0].checked;

    var dokumentacija = +document.getElementsByName("dokumentacija")[0].checked;

    var opseznostTestiranja = document.getElementsByName("testiranje")[0];
    var opseznostTestiranjaVrijednost = parseInt(opseznostTestiranja.options[opseznostTestiranja.selectedIndex].value);

    var samoispitivanje = +document.getElementsByName("preispitivanje")[0].checked;


    vjer_marketing = prijasnjeIskustvo + (brzinaUcenjaVjestinaVrijednost/2) + smatrateLiSeKreativnim + (marketingIskustvo*10) + timskiIgrac + (jeziciVrijednost*1.5) + inicijativa + organizacijaVremena + samoispitivanje + (marketingIskustvo*10);
    vjer_dizajn = (prijasnjeIskustvo*1.5) + brzinaUcenjaVjestinaVrijednost + (smatrateLiSeKreativnim*10) + pogreska;
    vjer_logistika = (prijasnjeIskustvo*1.5) + (brzinaUcenjaVjestinaVrijednost*1.5) + smatrateLiSeKreativnim + (funkcionirateLiPodStresom*2) + jeziciVrijednost + (inicijativa*4) + (organizacijaVremena*4) + dokumentacija + samoispitivanje;
    vjer_pogInzenjer = (prijasnjeIskustvo*2) + (brzinaUcenjaVjestinaVrijednost*3) + funkcionirateLiPodStresom + (matematikaVrijednost*10) + materijaliUpoznatostVrijednost + (dokumentacija*2) + samoispitivanje + opseznostTestiranjaVrijednost + (fizikaFluida*10);
    vjer_matInzenjer = (prijasnjeIskustvo*2) + (brzinaUcenjaVjestinaVrijednost*3) + funkcionirateLiPodStresom + (matematikaVrijednost*5) + (materijaliUpoznatostVrijednost*10) + opseznostTestiranjaVrijednost + (upoznatostPoluvodicimaVrijednost*10);

    
    poslovi = {
        "marketing" : vjer_marketing,
        "dizajn" : vjer_dizajn,
        "logistika" : vjer_logistika,
        "pogon" : vjer_pogInzenjer,
        "materijal" : vjer_matInzenjer
    }
    var dobivenaPozicija = ZemiNajveciIzRjecnika(poslovi);


    window.open("rezultat.html?"+punoljetan+"&"+prezime+"&"+spol+"&"+dobivenaPozicija);
}

function ZemiNajveciIzRjecnika(rjecnik){
    var najveci_broj = 0;
    var najveci_kljuc = "";
    for(var kljuc in rjecnik){
        if(rjecnik[kljuc] > najveci_broj){
            najveci_broj = rjecnik[kljuc];
            najveci_kljuc = kljuc;
        }
    }

    return najveci_kljuc
}

function PrikaziRezultat(){
    var url = decodeURIComponent(window.location.href);
    var parametri = url.split('?');
    var podatci = parametri[1].split('&');

    var punoljetan = (podatci[0]);
    var jePunoljetan = (punoljetan == "true");
    var prezime = podatci[1];
    var spol = podatci[2];
    var dobivenaPozicija = podatci[3];


    pozicije = {
        "marketing" : {
            "titula" : "Marketinški stručnjak",
            "opis" : "Osoba zadužena za odnos sa javnošću, prezentiranje projekta i naše tvrtke, te uporaba novih medija u našem poslu."
        },
        "dizajn" : {
            "titula" : "Dizajn",
            "opis" : "Osoba zadužena za dizajn i estetiku nove rakete."
        },
        "logistika" : {
            "titula" : "Logistika",
            "opis" : "Osoba zadužena za proračune i korištenje materijala i ostalih potrepština."
        },
        "pogon" : {
            "titula" : "Pogonski Inženjer",
            "opis" : "Osoba zadužena za projektiranje i ispitivanje pogona naše nove rakete."
        },
        "materijal" : {
            "titula" : "Inženjer Materijala",
           "opis" : "Osoba zadužena za proračune i odabir pravih materijala potrebnih za izradu rakete."
        }
    }

    var pozdrav;
    if(spol == parseInt(0)){
        pozdrav = "Poštovana gđo. "
    }
    else{
        pozdrav = "Poštovani gosp. "
    }

    if(jePunoljetan){
        document.getElementsByClassName("opistvrtke")[0].style.background = "#05c46b";
        document.getElementById("rezultat").style.fontSize = "xx-large";
        document.getElementById("rezultat").innerHTML = pozdrav + " " + prezime + "<br>Dobili ste posao na poziciji: " + pozicije[dobivenaPozicija]["titula"];

        document.getElementById("rezultatpozicija").style.fontSize = "large";
        document.getElementById("rezultatpozicija").innerHTML = pozicije[dobivenaPozicija]["titula"];
        document.getElementById("rezultatopismjesta").innerHTML = pozicije[dobivenaPozicija]["opis"];
    }
    else{
        document.getElementsByClassName("opistvrtke")[0].style.background = "#ff3f34";
        document.getElementById("rezultat").style.fontSize = "xx-large";
        document.getElementById("rezultat").innerHTML = "Nažalost, ne možemo Vas zaposliti jer niste punoljetni.";

        document.getElementById("rezultatpozicija").innerHTML = "";
        document.getElementById("rezultatopismjesta").innerHTML = "";
    }
}