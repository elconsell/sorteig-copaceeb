var total=[];
var i =0;
var j =0;
//BASQUET

//basquet fem benjami
var bfb = ['Maristes Sant Joan "A"','Aula "C"',' Voramar   "A"'];
//basquet mix benjami
var bmb= ['Sagrat Cor Dip. "A"','Aula  "B"','Aula  "A"'];
//basquet fem alevi
var bfa = ['DSB Col. Aleman "A"',' Sant Miquel "A"','Sagrat Cor Dip. "A"','Escola IPSE "A"','Aula "A"','Voramar "A"','L\'Arenal de Llevant "A"','Escola Orlandai "A"'];
//basquet mix alevi
var bma = ['Esc. Pia S. Antoni "A"','Aula "C"','Peter Pan "A"','Sagrat Cor Sarrià "A"','Escola Orlandai "A"']
//basquet fem cadet
var bfc = ['Els Arcs "A"','Club BIM "A"','Aula "A"','Lycée Français Gavà  "A"','Col· Sagrat Cor Sar. "A"','Voramar "A"'];
//basquet mix cadet
var bmc = ['American School "A"','Club BIM "A"','Aula "A"','Braval "A"','Front Maritim "A"','Escola Orlandai "A"'];
//basquet fem inf
var bfi = ['Jesuïtes S. Gervasi "A"','Sagrat Cor Esc. "A"','Sant Miquel "A"','Aula "C"','Voramar "A"','Front Maritim "A"','Escola Orlandai "A"'];
//basquet mix inf
var bmi = ['Sagrat Cor Sar. "A"',' Jesús Maria "A"',' Maristes St. Joan "A"','Front Maritim "A"','Escola Orlandai "A"'];
//basquet fem juv
var bfj = ['Sagrat Cor Esc. "A"','Front Maritim "A"','Escola Orlandai "A"'];
//basquet mix juv
var bmj = ['Aula "A"','Braval "A"'];


//FUTBOL

//futbol fem benjami

//futbol mix benjami
var fmb = ['Les Glòries "A"','Sant Miquel "A"','Duran i Bas "A"'];
//futbol fem alevi
var ffa = ['Lycée Français Gavà "A"'];
//futbol mix alevi
var fma = ['Montserrat-Xavier "A"','Jesuïtes S. Gervasi "A"','Sant Josep AMPA "B"','Sant Josep AMPA "A"','Manyanet St. Andreu "A"','Sagrat Cor Esc. "A"','Sant Miquel "B"','Sant Miquel "A"','IPSE "A"','Vincit-Prov. "B"','APC Raval "A"'];
//futbol fem cadet
var ffc = ['Teià Futbol Cinc "A"'];
//futbol mix cadet
var fmc = ['Montserrat-Xavier "B"','Jaume Balmes "A"','Manyanet St Andreu "A"','Sant Peter´s  "A"','Institut  Besòs "A"','APC Raval "A"','Menendez i Pelayo "A"','RMSI Sports "A"','Escolàpies S. Martí "A"'];
//futbol fem inf
var ffi = ['Lycée Français Gavà "D"','Institut  Besòs "A"'];
//futbol mix inf
var fmi = ['Jaume Balmes "B"','Jaume Balmes "A"','Sant Josep "A"','Sant Miquel "B"','Vincit-Prov. "B"','APC Raval "A"'];
//futbol fem juv
var ffj = ['Montserrat-Xavier "A"','Jaume Balmes "A"'];
//futbol mix juv
var fmj = ['Montserrat-Xavier "C"','Jesuïtes S. Gervasi "A"','Jesuïtes S. Gervasi "B"','Esc. Joan XXIII "A"','Manyanet S. Andreu "A"','Manyanet S. Andreu "B"','AEFS Arrels "C"','APC Raval "A"','Lycée Français Gavà "A"','Menendez i Pelayo "A"','Menendez i Pelayo "B"','RMSI Sports "A"'];


//VOLEIBOL

//volei fem benjami

//volei mix benjami
var vmb = ['Sagrat Cor Esc. "A"','Aula "A"'];
//volei fem alevi
var vfa = ['RMSI Sports "A"','Sagrat Cor Sar. "B"','Sagrat Cor Sar. "A"','Escola Orlandai "A"'];
//volei mix alevi
var vma = ['Sant Josep Oriol "A"','Sagrat Cor Esc. "B"','Sagrat Cor Esc. "A"','Aula "A"','RMSI Sports "A"'];
//volei fem cadet
var vfc = ['La Sedeta "E"','Volei els Arcs "A"','Aula "A"','Jaume Balmes "B"','Jaume Balmes "A"','Josep Pla "A"','Josep Pla "B"'];
//volei mix cadet
var vmc = ['La Sedeta "F"','Sagrat Cor Esc. "A"'];
//volei fem inf
var vfi = ['La Sedeta "C"','Sagrat Cor Sar. "A"','Aula "A"','Jaume Balmes "A"','RMSI Sports "A"','Josep Pla "A"','CV  Sant Martí "A"'];
//volei mix inf
var vmi = ['Josep Pla "B"','La Sedeta "D"','Escola Orlandai "A"'];
//volei fem juv
var vfj = ['Sagrat Cor Esc. "A"','DSB Col. Aleman "A"','Jaume Balmes "A"','Virolai "B"','La Salle Bonanova "A"','Escola Orlandai "A"'];
//volei mix juv
var vmj = ['La Sedeta "B"','Jaume Balmes "B"'];


function canviesport(){
	
var canes = document.getElementById("esport").value;
if (canes == '0') {
		 document.getElementById("sexe").disabled = true
         document.getElementById("categoria").disabled = true;
		 document.getElementById("sexe").selectedIndex=0;
		 document.getElementById("categoria").selectedIndex=0;
     } else {
         document.getElementById("sexe").disabled = false;
         document.getElementById("sexe").selectedIndex=0;
		 document.getElementById("categoria").selectedIndex=0;
		 document.getElementById('p0').innerHTML = '';
         document.getElementById('p1').innerHTML = '';
         document.getElementById('p2').innerHTML = '';
         document.getElementById('p3').innerHTML = '';
         document.getElementById('p4').innerHTML = '';
         document.getElementById('p5').innerHTML = '';
         document.getElementById('p6').innerHTML = '';
         document.getElementById('p7').innerHTML = '';
         document.getElementById('p8').innerHTML = '';
         document.getElementById('p9').innerHTML = '';
         document.getElementById('p10').innerHTML = '';
         document.getElementById('p11').innerHTML = '';
         document.getElementById('p12').innerHTML = '';
         document.getElementById('p13').innerHTML = '';
         document.getElementById('p14').innerHTML = '';
         document.getElementById('p15').innerHTML = '';
         document.getElementById('p16').innerHTML = '';
         document.getElementById('p17').innerHTML = '';
         document.getElementById('p18').innerHTML = '';
         document.getElementById('p19').innerHTML = '';
         document.getElementById('p20').innerHTML = '';
         document.getElementById('p21').innerHTML = '';
         document.getElementById('p22').innerHTML = '';
         document.getElementById('p23').innerHTML = '';
         document.getElementById('p24').innerHTML = '';
         document.getElementById('p25').innerHTML = '';
         document.getElementById('p26').innerHTML = '';
         document.getElementById('p27').innerHTML = '';
         document.getElementById('p28').innerHTML = '';
         document.getElementById('p29').innerHTML = '';

        document.getElementById("l0").className = "tournament__match__team__icon";
		document.getElementById("l1").className = "tournament__match__team__icon";
		document.getElementById("l2").className = "tournament__match__team__icon";
		document.getElementById("l3").className = "tournament__match__team__icon";
		document.getElementById("l4").className = "tournament__match__team__icon";
		document.getElementById("l5").className = "tournament__match__team__icon";
		document.getElementById("l6").className = "tournament__match__team__icon";
		document.getElementById("l7").className = "tournament__match__team__icon";
		document.getElementById("l8").className = "tournament__match__team__icon";
		document.getElementById("l9").className = "tournament__match__team__icon";
		document.getElementById("l10").className = "tournament__match__team__icon";
		document.getElementById("l11").className = "tournament__match__team__icon";
		document.getElementById("l12").className = "tournament__match__team__icon";
		document.getElementById("l13").className = "tournament__match__team__icon";
		document.getElementById("l14").className = "tournament__match__team__icon";
		document.getElementById("l15").className = "tournament__match__team__icon";
		document.getElementById("l16").className = "tournament__match__team__icon";
		document.getElementById("l17").className = "tournament__match__team__icon";
		document.getElementById("l18").className = "tournament__match__team__icon";
		document.getElementById("l19").className = "tournament__match__team__icon";
		document.getElementById("l20").className = "tournament__match__team__icon";
		document.getElementById("l21").className = "tournament__match__team__icon";
		document.getElementById("l22").className = "tournament__match__team__icon";
		document.getElementById("l23").className = "tournament__match__team__icon";
		document.getElementById("l24").className = "tournament__match__team__icon";
		document.getElementById("l25").className = "tournament__match__team__icon";
		document.getElementById("l26").className = "tournament__match__team__icon";
		document.getElementById("l27").className = "tournament__match__team__icon";
		document.getElementById("l28").className = "tournament__match__team__icon";
		document.getElementById("l29").className = "tournament__match__team__icon";

           
		   } 
		}

function canvisexe(){
			var canse = document.getElementById("sexe").value;
			if (canse!=0) {

         document.getElementById("categoria").disabled = false;
		 document.getElementById("categoria").selectedIndex=0;
		}
		document.getElementById('p0').innerHTML = '';
         document.getElementById('p1').innerHTML = '';
         document.getElementById('p2').innerHTML = '';
         document.getElementById('p3').innerHTML = '';
         document.getElementById('p4').innerHTML = '';
         document.getElementById('p5').innerHTML = '';
         document.getElementById('p6').innerHTML = '';
         document.getElementById('p7').innerHTML = '';
         document.getElementById('p8').innerHTML = '';
         document.getElementById('p9').innerHTML = '';
         document.getElementById('p10').innerHTML = '';
         document.getElementById('p11').innerHTML = '';
         document.getElementById('p12').innerHTML = '';
         document.getElementById('p13').innerHTML = '';
         document.getElementById('p14').innerHTML = '';
         document.getElementById('p15').innerHTML = '';
         document.getElementById('p16').innerHTML = '';
         document.getElementById('p17').innerHTML = '';
         document.getElementById('p18').innerHTML = '';
         document.getElementById('p19').innerHTML = '';
         document.getElementById('p20').innerHTML = '';
         document.getElementById('p21').innerHTML = '';
         document.getElementById('p22').innerHTML = '';
         document.getElementById('p23').innerHTML = '';
         document.getElementById('p24').innerHTML = '';
         document.getElementById('p25').innerHTML = '';
         document.getElementById('p26').innerHTML = '';
         document.getElementById('p27').innerHTML = '';
         document.getElementById('p28').innerHTML = '';
         document.getElementById('p29').innerHTML = '';

        document.getElementById("l0").className = "tournament__match__team__icon";
		document.getElementById("l1").className = "tournament__match__team__icon";
		document.getElementById("l2").className = "tournament__match__team__icon";
		document.getElementById("l3").className = "tournament__match__team__icon";
		document.getElementById("l4").className = "tournament__match__team__icon";
		document.getElementById("l5").className = "tournament__match__team__icon";
		document.getElementById("l6").className = "tournament__match__team__icon";
		document.getElementById("l7").className = "tournament__match__team__icon";
		document.getElementById("l8").className = "tournament__match__team__icon";
		document.getElementById("l9").className = "tournament__match__team__icon";
		document.getElementById("l10").className = "tournament__match__team__icon";
		document.getElementById("l11").className = "tournament__match__team__icon";
		document.getElementById("l12").className = "tournament__match__team__icon";
		document.getElementById("l13").className = "tournament__match__team__icon";
		document.getElementById("l14").className = "tournament__match__team__icon";
		document.getElementById("l15").className = "tournament__match__team__icon";
		document.getElementById("l16").className = "tournament__match__team__icon";
		document.getElementById("l17").className = "tournament__match__team__icon";
		document.getElementById("l18").className = "tournament__match__team__icon";
		document.getElementById("l19").className = "tournament__match__team__icon";
		document.getElementById("l20").className = "tournament__match__team__icon";
		document.getElementById("l21").className = "tournament__match__team__icon";
		document.getElementById("l22").className = "tournament__match__team__icon";
		document.getElementById("l23").className = "tournament__match__team__icon";
		document.getElementById("l24").className = "tournament__match__team__icon";
		document.getElementById("l25").className = "tournament__match__team__icon";
		document.getElementById("l26").className = "tournament__match__team__icon";
		document.getElementById("l27").className = "tournament__match__team__icon";
		document.getElementById("l28").className = "tournament__match__team__icon";
		document.getElementById("l29").className = "tournament__match__team__icon";


	}
function canvicategoria(){
	var canca = document.getElementById("categoria").value;	
	var canes=document.getElementById("esport").value;
	var canse=document.getElementById("sexe").value;
	total= canes + canse + canca;
	document.getElementById("divtour").hidden = false;
	

	document.getElementById('p0').innerHTML = '';
         document.getElementById('p1').innerHTML = '';
         document.getElementById('p2').innerHTML = '';
         document.getElementById('p3').innerHTML = '';
         document.getElementById('p4').innerHTML = '';
         document.getElementById('p5').innerHTML = '';
         document.getElementById('p6').innerHTML = '';
         document.getElementById('p7').innerHTML = '';
         document.getElementById('p8').innerHTML = '';
         document.getElementById('p9').innerHTML = '';
         document.getElementById('p10').innerHTML = '';
         document.getElementById('p11').innerHTML = '';
         document.getElementById('p12').innerHTML = '';
         document.getElementById('p13').innerHTML = '';
         document.getElementById('p14').innerHTML = '';
         document.getElementById('p15').innerHTML = '';
         document.getElementById('p16').innerHTML = '';
         document.getElementById('p17').innerHTML = '';
         document.getElementById('p18').innerHTML = '';
         document.getElementById('p19').innerHTML = '';
         document.getElementById('p20').innerHTML = '';
         document.getElementById('p21').innerHTML = '';
         document.getElementById('p22').innerHTML = '';
         document.getElementById('p23').innerHTML = '';
         document.getElementById('p24').innerHTML = '';
         document.getElementById('p25').innerHTML = '';
         document.getElementById('p26').innerHTML = '';
         document.getElementById('p27').innerHTML = '';
         document.getElementById('p28').innerHTML = '';
         document.getElementById('p29').innerHTML = '';

        document.getElementById("l0").className = "tournament__match__team__icon";
		document.getElementById("l1").className = "tournament__match__team__icon";
		document.getElementById("l2").className = "tournament__match__team__icon";
		document.getElementById("l3").className = "tournament__match__team__icon";
		document.getElementById("l4").className = "tournament__match__team__icon";
		document.getElementById("l5").className = "tournament__match__team__icon";
		document.getElementById("l6").className = "tournament__match__team__icon";
		document.getElementById("l7").className = "tournament__match__team__icon";
		document.getElementById("l8").className = "tournament__match__team__icon";
		document.getElementById("l9").className = "tournament__match__team__icon";
		document.getElementById("l10").className = "tournament__match__team__icon";
		document.getElementById("l11").className = "tournament__match__team__icon";
		document.getElementById("l12").className = "tournament__match__team__icon";
		document.getElementById("l13").className = "tournament__match__team__icon";
		document.getElementById("l14").className = "tournament__match__team__icon";
		document.getElementById("l15").className = "tournament__match__team__icon";
		document.getElementById("l16").className = "tournament__match__team__icon";
		document.getElementById("l17").className = "tournament__match__team__icon";
		document.getElementById("l18").className = "tournament__match__team__icon";
		document.getElementById("l19").className = "tournament__match__team__icon";
		document.getElementById("l20").className = "tournament__match__team__icon";
		document.getElementById("l21").className = "tournament__match__team__icon";
		document.getElementById("l22").className = "tournament__match__team__icon";
		document.getElementById("l23").className = "tournament__match__team__icon";
		document.getElementById("l24").className = "tournament__match__team__icon";
		document.getElementById("l25").className = "tournament__match__team__icon";
		document.getElementById("l26").className = "tournament__match__team__icon";
		document.getElementById("l27").className = "tournament__match__team__icon";
		document.getElementById("l28").className = "tournament__match__team__icon";
		document.getElementById("l29").className = "tournament__match__team__icon";

        
	
	if (total === "bmb") {
		i=25;
		document.getElementById("p24").innerHTML = "Bie";
		document.getElementById("l24").className = "tournament__match__team__icon__green";


		document.getElementById("l0").className = "tournament__match__team__icon2";
		document.getElementById("l1").className = "tournament__match__team__icon2";
		document.getElementById("l2").className = "tournament__match__team__icon2";
		document.getElementById("l3").className = "tournament__match__team__icon2";
		document.getElementById("l4").className = "tournament__match__team__icon2";
		document.getElementById("l5").className = "tournament__match__team__icon2";
		document.getElementById("l6").className = "tournament__match__team__icon2";
		document.getElementById("l7").className = "tournament__match__team__icon2";
		document.getElementById("l8").className = "tournament__match__team__icon2";
		document.getElementById("l9").className = "tournament__match__team__icon2";
		document.getElementById("l10").className = "tournament__match__team__icon2";
		document.getElementById("l11").className = "tournament__match__team__icon2";
		document.getElementById("l12").className = "tournament__match__team__icon2";
		document.getElementById("l13").className = "tournament__match__team__icon2";
		document.getElementById("l14").className = "tournament__match__team__icon2";
		document.getElementById("l15").className = "tournament__match__team__icon2";
		document.getElementById("l16").className = "tournament__match__team__icon2";
		document.getElementById("l17").className = "tournament__match__team__icon2";
		document.getElementById("l18").className = "tournament__match__team__icon2";
		document.getElementById("l19").className = "tournament__match__team__icon2";
		document.getElementById("l20").className = "tournament__match__team__icon2";
		document.getElementById("l21").className = "tournament__match__team__icon2";
		document.getElementById("l22").className = "tournament__match__team__icon2";
		document.getElementById("l23").className = "tournament__match__team__icon2";
		document.getElementById("l25").className = "tournament__match__team__icon";
		document.getElementById("l26").className = "tournament__match__team__icon";
		document.getElementById("l27").className = "tournament__match__team__icon";
		document.getElementById("l28").className = "tournament__match__team__icon";
		document.getElementById("l29").className = "tournament__match__team__icon";
		
	}

	if (total === "bma") {
		i=17;
		document.getElementById("p16").innerHTML = "Bie";
		document.getElementById("p19").innerHTML = "Bie";
		document.getElementById("p20").innerHTML = "Bie";

		document.getElementById("l16").className = "tournament__match__team__icon__green";
		document.getElementById("l19").className = "tournament__match__team__icon__green";
		document.getElementById("l20").className = "tournament__match__team__icon__green";


		document.getElementById("l0").className = "tournament__match__team__icon2";
		document.getElementById("l1").className = "tournament__match__team__icon2";
		document.getElementById("l2").className = "tournament__match__team__icon2";
		document.getElementById("l3").className = "tournament__match__team__icon2";
		document.getElementById("l4").className = "tournament__match__team__icon2";
		document.getElementById("l5").className = "tournament__match__team__icon2";
		document.getElementById("l6").className = "tournament__match__team__icon2";
		document.getElementById("l7").className = "tournament__match__team__icon2";
		document.getElementById("l8").className = "tournament__match__team__icon2";
		document.getElementById("l9").className = "tournament__match__team__icon2";
		document.getElementById("l10").className = "tournament__match__team__icon2";
		document.getElementById("l11").className = "tournament__match__team__icon2";
		document.getElementById("l12").className = "tournament__match__team__icon2";
		document.getElementById("l13").className = "tournament__match__team__icon2";
		document.getElementById("l14").className = "tournament__match__team__icon2";
		document.getElementById("l15").className = "tournament__match__team__icon2";

		document.getElementById("l17").className = "tournament__match__team__icon";
		document.getElementById("l18").className = "tournament__match__team__icon";


		document.getElementById("l21").className = "tournament__match__team__icon";
		document.getElementById("l22").className = "tournament__match__team__icon";
		document.getElementById("l23").className = "tournament__match__team__icon";
		document.getElementById("l25").className = "tournament__match__team__icon";
		document.getElementById("l26").className = "tournament__match__team__icon";
		document.getElementById("l27").className = "tournament__match__team__icon";
		document.getElementById("l28").className = "tournament__match__team__icon";
		document.getElementById("l29").className = "tournament__match__team__icon";
	}

	if (total === "bmi") {
		i=17;
		document.getElementById("p16").innerHTML = "Bie";
		document.getElementById("p19").innerHTML = "Bie";
		document.getElementById("p23").innerHTML = "Bie";

		document.getElementById("l16").className = "tournament__match__team__icon__green";
		document.getElementById("l19").className = "tournament__match__team__icon__green";
		document.getElementById("l23").className = "tournament__match__team__icon__green";

		document.getElementById("l0").className = "tournament__match__team__icon2";
		document.getElementById("l1").className = "tournament__match__team__icon2";
		document.getElementById("l2").className = "tournament__match__team__icon2";
		document.getElementById("l3").className = "tournament__match__team__icon2";
		document.getElementById("l4").className = "tournament__match__team__icon2";
		document.getElementById("l5").className = "tournament__match__team__icon2";
		document.getElementById("l6").className = "tournament__match__team__icon2";
		document.getElementById("l7").className = "tournament__match__team__icon2";
		document.getElementById("l8").className = "tournament__match__team__icon2";
		document.getElementById("l9").className = "tournament__match__team__icon2";
		document.getElementById("l10").className = "tournament__match__team__icon2";
		document.getElementById("l11").className = "tournament__match__team__icon2";
		document.getElementById("l12").className = "tournament__match__team__icon2";
		document.getElementById("l13").className = "tournament__match__team__icon2";
		document.getElementById("l14").className = "tournament__match__team__icon2";
		document.getElementById("l15").className = "tournament__match__team__icon2";

		document.getElementById("l17").className = "tournament__match__team__icon";
		document.getElementById("l18").className = "tournament__match__team__icon";

		document.getElementById("l20").className = "tournament__match__team__icon";
		document.getElementById("l21").className = "tournament__match__team__icon";
		document.getElementById("l22").className = "tournament__match__team__icon";
		
		document.getElementById("l25").className = "tournament__match__team__icon";
		document.getElementById("l26").className = "tournament__match__team__icon";
		document.getElementById("l27").className = "tournament__match__team__icon";
		document.getElementById("l28").className = "tournament__match__team__icon";
		document.getElementById("l29").className = "tournament__match__team__icon";

	}

	if (total === "bmc") {
		i=17;
		document.getElementById("p16").innerHTML = "Bie";
		document.getElementById("p23").innerHTML = "Bie";

		document.getElementById("l16").className = "tournament__match__team__icon__green";
		document.getElementById("l23").className = "tournament__match__team__icon__green";


		document.getElementById("l0").className = "tournament__match__team__icon2";
		document.getElementById("l1").className = "tournament__match__team__icon2";
		document.getElementById("l2").className = "tournament__match__team__icon2";
		document.getElementById("l3").className = "tournament__match__team__icon2";
		document.getElementById("l4").className = "tournament__match__team__icon2";
		document.getElementById("l5").className = "tournament__match__team__icon2";
		document.getElementById("l6").className = "tournament__match__team__icon2";
		document.getElementById("l7").className = "tournament__match__team__icon2";
		document.getElementById("l8").className = "tournament__match__team__icon2";
		document.getElementById("l9").className = "tournament__match__team__icon2";
		document.getElementById("l10").className = "tournament__match__team__icon2";
		document.getElementById("l11").className = "tournament__match__team__icon2";
		document.getElementById("l12").className = "tournament__match__team__icon2";
		document.getElementById("l13").className = "tournament__match__team__icon2";
		document.getElementById("l14").className = "tournament__match__team__icon2";
		document.getElementById("l15").className = "tournament__match__team__icon2";
		
		document.getElementById("l17").className = "tournament__match__team__icon";
		document.getElementById("l18").className = "tournament__match__team__icon";
		document.getElementById("l19").className = "tournament__match__team__icon";
		document.getElementById("l20").className = "tournament__match__team__icon";
		document.getElementById("l21").className = "tournament__match__team__icon";
		document.getElementById("l22").className = "tournament__match__team__icon";
		
		document.getElementById("l24").className = "tournament__match__team__icon";
		document.getElementById("l25").className = "tournament__match__team__icon";
		document.getElementById("l26").className = "tournament__match__team__icon";
		document.getElementById("l27").className = "tournament__match__team__icon";
		document.getElementById("l28").className = "tournament__match__team__icon";
		document.getElementById("l29").className = "tournament__match__team__icon";

	}

	if (total === "bmj") {
		i=28;

		document.getElementById("l0").className = "tournament__match__team__icon2";
		document.getElementById("l1").className = "tournament__match__team__icon2";
		document.getElementById("l2").className = "tournament__match__team__icon2";
		document.getElementById("l3").className = "tournament__match__team__icon2";
		document.getElementById("l4").className = "tournament__match__team__icon2";
		document.getElementById("l5").className = "tournament__match__team__icon2";
		document.getElementById("l6").className = "tournament__match__team__icon2";
		document.getElementById("l7").className = "tournament__match__team__icon2";
		document.getElementById("l8").className = "tournament__match__team__icon2";
		document.getElementById("l9").className = "tournament__match__team__icon2";
		document.getElementById("l10").className = "tournament__match__team__icon2";
		document.getElementById("l11").className = "tournament__match__team__icon2";
		document.getElementById("l12").className = "tournament__match__team__icon2";
		document.getElementById("l13").className = "tournament__match__team__icon2";
		document.getElementById("l14").className = "tournament__match__team__icon2";
		document.getElementById("l15").className = "tournament__match__team__icon2";
		document.getElementById("l16").className = "tournament__match__team__icon2";
		document.getElementById("l17").className = "tournament__match__team__icon2";
		document.getElementById("l18").className = "tournament__match__team__icon2";
		document.getElementById("l19").className = "tournament__match__team__icon2";
		document.getElementById("l20").className = "tournament__match__team__icon2";
		document.getElementById("l21").className = "tournament__match__team__icon2";
		document.getElementById("l22").className = "tournament__match__team__icon2";
		document.getElementById("l23").className = "tournament__match__team__icon2";
		document.getElementById("l24").className = "tournament__match__team__icon2";
		document.getElementById("l25").className = "tournament__match__team__icon2";
		document.getElementById("l26").className = "tournament__match__team__icon2";
		document.getElementById("l27").className = "tournament__match__team__icon2";
		document.getElementById("l28").className = "tournament__match__team__icon";
		document.getElementById("l29").className = "tournament__match__team__icon";
	}

	if (total === "vmb") {
		i=28;

		document.getElementById("l0").className = "tournament__match__team__icon2";
		document.getElementById("l1").className = "tournament__match__team__icon2";
		document.getElementById("l2").className = "tournament__match__team__icon2";
		document.getElementById("l3").className = "tournament__match__team__icon2";
		document.getElementById("l4").className = "tournament__match__team__icon2";
		document.getElementById("l5").className = "tournament__match__team__icon2";
		document.getElementById("l6").className = "tournament__match__team__icon2";
		document.getElementById("l7").className = "tournament__match__team__icon2";
		document.getElementById("l8").className = "tournament__match__team__icon2";
		document.getElementById("l9").className = "tournament__match__team__icon2";
		document.getElementById("l10").className = "tournament__match__team__icon2";
		document.getElementById("l11").className = "tournament__match__team__icon2";
		document.getElementById("l12").className = "tournament__match__team__icon2";
		document.getElementById("l13").className = "tournament__match__team__icon2";
		document.getElementById("l14").className = "tournament__match__team__icon2";
		document.getElementById("l15").className = "tournament__match__team__icon2";
		document.getElementById("l16").className = "tournament__match__team__icon2";
		document.getElementById("l17").className = "tournament__match__team__icon2";
		document.getElementById("l18").className = "tournament__match__team__icon2";
		document.getElementById("l19").className = "tournament__match__team__icon2";
		document.getElementById("l20").className = "tournament__match__team__icon2";
		document.getElementById("l21").className = "tournament__match__team__icon2";
		document.getElementById("l22").className = "tournament__match__team__icon2";
		document.getElementById("l23").className = "tournament__match__team__icon2";
		document.getElementById("l24").className = "tournament__match__team__icon2";
		document.getElementById("l25").className = "tournament__match__team__icon2";
		document.getElementById("l26").className = "tournament__match__team__icon2";
		document.getElementById("l27").className = "tournament__match__team__icon2";
		document.getElementById("l28").className = "tournament__match__team__icon";
		document.getElementById("l29").className = "tournament__match__team__icon";
	}

	if (total === "vma") {
		i=17;
		document.getElementById("p16").innerHTML = "Bie";
		document.getElementById("p19").innerHTML = "Bie";
		document.getElementById("p23").innerHTML = "Bie";

		document.getElementById("l16").className = "tournament__match__team__icon__green";
		document.getElementById("l19").className = "tournament__match__team__icon__green";
		document.getElementById("l23").className = "tournament__match__team__icon__green";

		document.getElementById("l0").className = "tournament__match__team__icon2";
		document.getElementById("l1").className = "tournament__match__team__icon2";
		document.getElementById("l2").className = "tournament__match__team__icon2";
		document.getElementById("l3").className = "tournament__match__team__icon2";
		document.getElementById("l4").className = "tournament__match__team__icon2";
		document.getElementById("l5").className = "tournament__match__team__icon2";
		document.getElementById("l6").className = "tournament__match__team__icon2";
		document.getElementById("l7").className = "tournament__match__team__icon2";
		document.getElementById("l8").className = "tournament__match__team__icon2";
		document.getElementById("l9").className = "tournament__match__team__icon2";
		document.getElementById("l10").className = "tournament__match__team__icon2";
		document.getElementById("l11").className = "tournament__match__team__icon2";
		document.getElementById("l12").className = "tournament__match__team__icon2";
		document.getElementById("l13").className = "tournament__match__team__icon2";
		document.getElementById("l14").className = "tournament__match__team__icon2";
		document.getElementById("l15").className = "tournament__match__team__icon2";
		
		document.getElementById("l17").className = "tournament__match__team__icon";
		document.getElementById("l18").className = "tournament__match__team__icon";

		document.getElementById("l20").className = "tournament__match__team__icon";
		document.getElementById("l21").className = "tournament__match__team__icon";
		document.getElementById("l22").className = "tournament__match__team__icon";
		
		document.getElementById("l24").className = "tournament__match__team__icon";
		document.getElementById("l25").className = "tournament__match__team__icon";
		document.getElementById("l26").className = "tournament__match__team__icon";
		document.getElementById("l27").className = "tournament__match__team__icon";
		document.getElementById("l28").className = "tournament__match__team__icon";
		document.getElementById("l29").className = "tournament__match__team__icon";
	}

	if (total === "vmi") {
		i=25;
		document.getElementById("p24").innerHTML = "Bie";

		document.getElementById("l24").className = "tournament__match__team__icon__green";

		document.getElementById("l0").className = "tournament__match__team__icon2";
		document.getElementById("l1").className = "tournament__match__team__icon2";
		document.getElementById("l2").className = "tournament__match__team__icon2";
		document.getElementById("l3").className = "tournament__match__team__icon2";
		document.getElementById("l4").className = "tournament__match__team__icon2";
		document.getElementById("l5").className = "tournament__match__team__icon2";
		document.getElementById("l6").className = "tournament__match__team__icon2";
		document.getElementById("l7").className = "tournament__match__team__icon2";
		document.getElementById("l8").className = "tournament__match__team__icon2";
		document.getElementById("l9").className = "tournament__match__team__icon2";
		document.getElementById("l10").className = "tournament__match__team__icon2";
		document.getElementById("l11").className = "tournament__match__team__icon2";
		document.getElementById("l12").className = "tournament__match__team__icon2";
		document.getElementById("l13").className = "tournament__match__team__icon2";
		document.getElementById("l14").className = "tournament__match__team__icon2";
		document.getElementById("l15").className = "tournament__match__team__icon2";
		document.getElementById("l16").className = "tournament__match__team__icon2";
		document.getElementById("l17").className = "tournament__match__team__icon2";
		document.getElementById("l18").className = "tournament__match__team__icon2";
		document.getElementById("l19").className = "tournament__match__team__icon2";
		document.getElementById("l20").className = "tournament__match__team__icon2";
		document.getElementById("l21").className = "tournament__match__team__icon2";
		document.getElementById("l22").className = "tournament__match__team__icon2";
		document.getElementById("l23").className = "tournament__match__team__icon2";
		document.getElementById("l25").className = "tournament__match__team__icon";
		document.getElementById("l26").className = "tournament__match__team__icon";
		document.getElementById("l27").className = "tournament__match__team__icon";
		document.getElementById("l28").className = "tournament__match__team__icon";
		document.getElementById("l29").className = "tournament__match__team__icon";
	}

	if (total === "vmc") {
		i=28;

		document.getElementById("l0").className = "tournament__match__team__icon2";
		document.getElementById("l1").className = "tournament__match__team__icon2";
		document.getElementById("l2").className = "tournament__match__team__icon2";
		document.getElementById("l3").className = "tournament__match__team__icon2";
		document.getElementById("l4").className = "tournament__match__team__icon2";
		document.getElementById("l5").className = "tournament__match__team__icon2";
		document.getElementById("l6").className = "tournament__match__team__icon2";
		document.getElementById("l7").className = "tournament__match__team__icon2";
		document.getElementById("l8").className = "tournament__match__team__icon2";
		document.getElementById("l9").className = "tournament__match__team__icon2";
		document.getElementById("l10").className = "tournament__match__team__icon2";
		document.getElementById("l11").className = "tournament__match__team__icon2";
		document.getElementById("l12").className = "tournament__match__team__icon2";
		document.getElementById("l13").className = "tournament__match__team__icon2";
		document.getElementById("l14").className = "tournament__match__team__icon2";
		document.getElementById("l15").className = "tournament__match__team__icon2";
		document.getElementById("l16").className = "tournament__match__team__icon2";
		document.getElementById("l17").className = "tournament__match__team__icon2";
		document.getElementById("l18").className = "tournament__match__team__icon2";
		document.getElementById("l19").className = "tournament__match__team__icon2";
		document.getElementById("l20").className = "tournament__match__team__icon2";
		document.getElementById("l21").className = "tournament__match__team__icon2";
		document.getElementById("l22").className = "tournament__match__team__icon2";
		document.getElementById("l23").className = "tournament__match__team__icon2";
		document.getElementById("l24").className = "tournament__match__team__icon2";
		document.getElementById("l25").className = "tournament__match__team__icon2";
		document.getElementById("l26").className = "tournament__match__team__icon2";
		document.getElementById("l27").className = "tournament__match__team__icon2";
		document.getElementById("l28").className = "tournament__match__team__icon";
		document.getElementById("l29").className = "tournament__match__team__icon";
	}

	if (total === "vmj") {
		i=28;

		document.getElementById("l0").className = "tournament__match__team__icon2";
		document.getElementById("l1").className = "tournament__match__team__icon2";
		document.getElementById("l2").className = "tournament__match__team__icon2";
		document.getElementById("l3").className = "tournament__match__team__icon2";
		document.getElementById("l4").className = "tournament__match__team__icon2";
		document.getElementById("l5").className = "tournament__match__team__icon2";
		document.getElementById("l6").className = "tournament__match__team__icon2";
		document.getElementById("l7").className = "tournament__match__team__icon2";
		document.getElementById("l8").className = "tournament__match__team__icon2";
		document.getElementById("l9").className = "tournament__match__team__icon2";
		document.getElementById("l10").className = "tournament__match__team__icon2";
		document.getElementById("l11").className = "tournament__match__team__icon2";
		document.getElementById("l12").className = "tournament__match__team__icon2";
		document.getElementById("l13").className = "tournament__match__team__icon2";
		document.getElementById("l14").className = "tournament__match__team__icon2";
		document.getElementById("l15").className = "tournament__match__team__icon2";
		document.getElementById("l16").className = "tournament__match__team__icon2";
		document.getElementById("l17").className = "tournament__match__team__icon2";
		document.getElementById("l18").className = "tournament__match__team__icon2";
		document.getElementById("l19").className = "tournament__match__team__icon2";
		document.getElementById("l20").className = "tournament__match__team__icon2";
		document.getElementById("l21").className = "tournament__match__team__icon2";
		document.getElementById("l22").className = "tournament__match__team__icon2";
		document.getElementById("l23").className = "tournament__match__team__icon2";
		document.getElementById("l24").className = "tournament__match__team__icon2";
		document.getElementById("l25").className = "tournament__match__team__icon2";
		document.getElementById("l26").className = "tournament__match__team__icon2";
		document.getElementById("l27").className = "tournament__match__team__icon2";
		document.getElementById("l28").className = "tournament__match__team__icon";
		document.getElementById("l29").className = "tournament__match__team__icon";
	}

	if (total === "fmb") {
		i=25;
		document.getElementById("p24").innerHTML = "Bie";

		document.getElementById("l24").className = "tournament__match__team__icon__green";

		document.getElementById("l0").className = "tournament__match__team__icon2";
		document.getElementById("l1").className = "tournament__match__team__icon2";
		document.getElementById("l2").className = "tournament__match__team__icon2";
		document.getElementById("l3").className = "tournament__match__team__icon2";
		document.getElementById("l4").className = "tournament__match__team__icon2";
		document.getElementById("l5").className = "tournament__match__team__icon2";
		document.getElementById("l6").className = "tournament__match__team__icon2";
		document.getElementById("l7").className = "tournament__match__team__icon2";
		document.getElementById("l8").className = "tournament__match__team__icon2";
		document.getElementById("l9").className = "tournament__match__team__icon2";
		document.getElementById("l10").className = "tournament__match__team__icon2";
		document.getElementById("l11").className = "tournament__match__team__icon2";
		document.getElementById("l12").className = "tournament__match__team__icon2";
		document.getElementById("l13").className = "tournament__match__team__icon2";
		document.getElementById("l14").className = "tournament__match__team__icon2";
		document.getElementById("l15").className = "tournament__match__team__icon2";
		document.getElementById("l16").className = "tournament__match__team__icon2";
		document.getElementById("l17").className = "tournament__match__team__icon2";
		document.getElementById("l18").className = "tournament__match__team__icon2";
		document.getElementById("l19").className = "tournament__match__team__icon2";
		document.getElementById("l20").className = "tournament__match__team__icon2";
		document.getElementById("l21").className = "tournament__match__team__icon2";
		document.getElementById("l22").className = "tournament__match__team__icon2";
		document.getElementById("l23").className = "tournament__match__team__icon2";
		document.getElementById("l25").className = "tournament__match__team__icon";
		document.getElementById("l26").className = "tournament__match__team__icon";
		document.getElementById("l27").className = "tournament__match__team__icon";
		document.getElementById("l28").className = "tournament__match__team__icon";
		document.getElementById("l29").className = "tournament__match__team__icon";
	}

	if (total === "fma") {
		i=1;
		document.getElementById("p0").innerHTML = "Bie";
		document.getElementById("p3").innerHTML = "Bie";
		document.getElementById("p7").innerHTML = "Bie";
		document.getElementById("p8").innerHTML = "Bie";
		document.getElementById("p15").innerHTML = "Bie";

		document.getElementById("l0").className = "tournament__match__team__icon__green";
		document.getElementById("l3").className = "tournament__match__team__icon__green";
		document.getElementById("l7").className = "tournament__match__team__icon__green";
		document.getElementById("l8").className = "tournament__match__team__icon__green";
		document.getElementById("l15").className = "tournament__match__team__icon__green";
	}

	if (total === "fmi") {
		i=17;
		document.getElementById("p16").innerHTML = "Bie";
		document.getElementById("p23").innerHTML = "Bie";


		document.getElementById("l16").className = "tournament__match__team__icon__green";
		document.getElementById("l23").className = "tournament__match__team__icon__green";

		document.getElementById("l0").className = "tournament__match__team__icon2";
		document.getElementById("l1").className = "tournament__match__team__icon2";
		document.getElementById("l2").className = "tournament__match__team__icon2";
		document.getElementById("l3").className = "tournament__match__team__icon2";
		document.getElementById("l4").className = "tournament__match__team__icon2";
		document.getElementById("l5").className = "tournament__match__team__icon2";
		document.getElementById("l6").className = "tournament__match__team__icon2";
		document.getElementById("l7").className = "tournament__match__team__icon2";
		document.getElementById("l8").className = "tournament__match__team__icon2";
		document.getElementById("l9").className = "tournament__match__team__icon2";
		document.getElementById("l10").className = "tournament__match__team__icon2";
		document.getElementById("l11").className = "tournament__match__team__icon2";
		document.getElementById("l12").className = "tournament__match__team__icon2";
		document.getElementById("l13").className = "tournament__match__team__icon2";
		document.getElementById("l14").className = "tournament__match__team__icon2";
		document.getElementById("l15").className = "tournament__match__team__icon2";
		
		document.getElementById("l17").className = "tournament__match__team__icon";
		document.getElementById("l18").className = "tournament__match__team__icon";
		document.getElementById("l19").className = "tournament__match__team__icon";
		document.getElementById("l20").className = "tournament__match__team__icon";
		document.getElementById("l21").className = "tournament__match__team__icon";
		document.getElementById("l22").className = "tournament__match__team__icon";
		
		document.getElementById("l24").className = "tournament__match__team__icon";
		document.getElementById("l25").className = "tournament__match__team__icon";
		document.getElementById("l26").className = "tournament__match__team__icon";
		document.getElementById("l27").className = "tournament__match__team__icon";
		document.getElementById("l28").className = "tournament__match__team__icon";
		document.getElementById("l29").className = "tournament__match__team__icon";
	}

	if (total === "fmc") {
		i=1;
		document.getElementById("p0").innerHTML = "Bie";
		document.getElementById("p3").innerHTML = "Bie";
		document.getElementById("p4").innerHTML = "Bie";
		document.getElementById("p7").innerHTML = "Bie";
		document.getElementById("p8").innerHTML = "Bie";
		document.getElementById("p12").innerHTML = "Bie";
		document.getElementById("p15").innerHTML = "Bie";

		document.getElementById("l0").className = "tournament__match__team__icon__green";
		document.getElementById("l3").className = "tournament__match__team__icon__green";
		document.getElementById("l4").className = "tournament__match__team__icon__green";
		document.getElementById("l7").className = "tournament__match__team__icon__green";
		document.getElementById("l8").className = "tournament__match__team__icon__green";
		document.getElementById("l12").className = "tournament__match__team__icon__green";
		document.getElementById("l15").className = "tournament__match__team__icon__green";

	}

	if (total === "fmj") {
		i=1;
		document.getElementById("p0").innerHTML = "Bie";
		document.getElementById("p7").innerHTML = "Bie";
		document.getElementById("p8").innerHTML = "Bie";
		document.getElementById("p15").innerHTML = "Bie";


		document.getElementById("l0").className = "tournament__match__team__icon__green";
		document.getElementById("l7").className = "tournament__match__team__icon__green";
		document.getElementById("l8").className = "tournament__match__team__icon__green";
		document.getElementById("l15").className = "tournament__match__team__icon__green";

	}

	if (total === "bfb") {
		i=25;
		document.getElementById("p24").innerHTML = "Bie";

		document.getElementById("l24").className = "tournament__match__team__icon__green";

		document.getElementById("l0").className = "tournament__match__team__icon2";
		document.getElementById("l1").className = "tournament__match__team__icon2";
		document.getElementById("l2").className = "tournament__match__team__icon2";
		document.getElementById("l3").className = "tournament__match__team__icon2";
		document.getElementById("l4").className = "tournament__match__team__icon2";
		document.getElementById("l5").className = "tournament__match__team__icon2";
		document.getElementById("l6").className = "tournament__match__team__icon2";
		document.getElementById("l7").className = "tournament__match__team__icon2";
		document.getElementById("l8").className = "tournament__match__team__icon2";
		document.getElementById("l9").className = "tournament__match__team__icon2";
		document.getElementById("l10").className = "tournament__match__team__icon2";
		document.getElementById("l11").className = "tournament__match__team__icon2";
		document.getElementById("l12").className = "tournament__match__team__icon2";
		document.getElementById("l13").className = "tournament__match__team__icon2";
		document.getElementById("l14").className = "tournament__match__team__icon2";
		document.getElementById("l15").className = "tournament__match__team__icon2";
		document.getElementById("l16").className = "tournament__match__team__icon2";
		document.getElementById("l17").className = "tournament__match__team__icon2";
		document.getElementById("l18").className = "tournament__match__team__icon2";
		document.getElementById("l19").className = "tournament__match__team__icon2";
		document.getElementById("l20").className = "tournament__match__team__icon2";
		document.getElementById("l21").className = "tournament__match__team__icon2";
		document.getElementById("l22").className = "tournament__match__team__icon2";
		document.getElementById("l23").className = "tournament__match__team__icon2";
		document.getElementById("l25").className = "tournament__match__team__icon";
		document.getElementById("l26").className = "tournament__match__team__icon";
		document.getElementById("l27").className = "tournament__match__team__icon";
		document.getElementById("l28").className = "tournament__match__team__icon";
		document.getElementById("l29").className = "tournament__match__team__icon";
	}

	if (total === "bfa") {
		i=16;

		document.getElementById("l0").className = "tournament__match__team__icon2";
		document.getElementById("l1").className = "tournament__match__team__icon2";
		document.getElementById("l2").className = "tournament__match__team__icon2";
		document.getElementById("l3").className = "tournament__match__team__icon2";
		document.getElementById("l4").className = "tournament__match__team__icon2";
		document.getElementById("l5").className = "tournament__match__team__icon2";
		document.getElementById("l6").className = "tournament__match__team__icon2";
		document.getElementById("l7").className = "tournament__match__team__icon2";
		document.getElementById("l8").className = "tournament__match__team__icon2";
		document.getElementById("l9").className = "tournament__match__team__icon2";
		document.getElementById("l10").className = "tournament__match__team__icon2";
		document.getElementById("l11").className = "tournament__match__team__icon2";
		document.getElementById("l12").className = "tournament__match__team__icon2";
		document.getElementById("l13").className = "tournament__match__team__icon2";
		document.getElementById("l14").className = "tournament__match__team__icon2";
		document.getElementById("l15").className = "tournament__match__team__icon2";
		document.getElementById("l16").className = "tournament__match__team__icon";
		document.getElementById("l17").className = "tournament__match__team__icon";
		document.getElementById("l18").className = "tournament__match__team__icon";
		document.getElementById("l19").className = "tournament__match__team__icon";
		document.getElementById("l20").className = "tournament__match__team__icon";
		document.getElementById("l21").className = "tournament__match__team__icon";
		document.getElementById("l22").className = "tournament__match__team__icon";
		document.getElementById("l23").className = "tournament__match__team__icon";
		document.getElementById("l24").className = "tournament__match__team__icon";
		document.getElementById("l25").className = "tournament__match__team__icon";
		document.getElementById("l26").className = "tournament__match__team__icon";
		document.getElementById("l27").className = "tournament__match__team__icon";
		document.getElementById("l28").className = "tournament__match__team__icon";
		document.getElementById("l29").className = "tournament__match__team__icon";
	}

	if (total === "bfi") {
		i=17;
		document.getElementById("p16").innerHTML = "Bie";

		document.getElementById("l16").className = "tournament__match__team__icon__green";

		document.getElementById("l0").className = "tournament__match__team__icon2";
		document.getElementById("l1").className = "tournament__match__team__icon2";
		document.getElementById("l2").className = "tournament__match__team__icon2";
		document.getElementById("l3").className = "tournament__match__team__icon2";
		document.getElementById("l4").className = "tournament__match__team__icon2";
		document.getElementById("l5").className = "tournament__match__team__icon2";
		document.getElementById("l6").className = "tournament__match__team__icon2";
		document.getElementById("l7").className = "tournament__match__team__icon2";
		document.getElementById("l8").className = "tournament__match__team__icon2";
		document.getElementById("l9").className = "tournament__match__team__icon2";
		document.getElementById("l10").className = "tournament__match__team__icon2";
		document.getElementById("l11").className = "tournament__match__team__icon2";
		document.getElementById("l12").className = "tournament__match__team__icon2";
		document.getElementById("l13").className = "tournament__match__team__icon2";
		document.getElementById("l14").className = "tournament__match__team__icon2";
		document.getElementById("l15").className = "tournament__match__team__icon2";
		
		document.getElementById("l17").className = "tournament__match__team__icon";
		document.getElementById("l18").className = "tournament__match__team__icon";
		document.getElementById("l19").className = "tournament__match__team__icon";
		document.getElementById("l20").className = "tournament__match__team__icon";
		document.getElementById("l21").className = "tournament__match__team__icon";
		document.getElementById("l22").className = "tournament__match__team__icon";
		document.getElementById("l23").className = "tournament__match__team__icon";
		document.getElementById("l24").className = "tournament__match__team__icon";
		document.getElementById("l25").className = "tournament__match__team__icon";
		document.getElementById("l26").className = "tournament__match__team__icon";
		document.getElementById("l27").className = "tournament__match__team__icon";
		document.getElementById("l28").className = "tournament__match__team__icon";
		document.getElementById("l29").className = "tournament__match__team__icon";
	}

	if (total === "bfc") {
		i=17;
		document.getElementById("p16").innerHTML = "Bie";
		document.getElementById("p23").innerHTML = "Bie";

		document.getElementById("l16").className = "tournament__match__team__icon__green";
		document.getElementById("l23").className = "tournament__match__team__icon__green";

		document.getElementById("l0").className = "tournament__match__team__icon2";
		document.getElementById("l1").className = "tournament__match__team__icon2";
		document.getElementById("l2").className = "tournament__match__team__icon2";
		document.getElementById("l3").className = "tournament__match__team__icon2";
		document.getElementById("l4").className = "tournament__match__team__icon2";
		document.getElementById("l5").className = "tournament__match__team__icon2";
		document.getElementById("l6").className = "tournament__match__team__icon2";
		document.getElementById("l7").className = "tournament__match__team__icon2";
		document.getElementById("l8").className = "tournament__match__team__icon2";
		document.getElementById("l9").className = "tournament__match__team__icon2";
		document.getElementById("l10").className = "tournament__match__team__icon2";
		document.getElementById("l11").className = "tournament__match__team__icon2";
		document.getElementById("l12").className = "tournament__match__team__icon2";
		document.getElementById("l13").className = "tournament__match__team__icon2";
		document.getElementById("l14").className = "tournament__match__team__icon2";
		document.getElementById("l15").className = "tournament__match__team__icon2";
		
		document.getElementById("l17").className = "tournament__match__team__icon";
		document.getElementById("l18").className = "tournament__match__team__icon";
		document.getElementById("l19").className = "tournament__match__team__icon";
		document.getElementById("l20").className = "tournament__match__team__icon";
		document.getElementById("l21").className = "tournament__match__team__icon";
		document.getElementById("l22").className = "tournament__match__team__icon";
		
		document.getElementById("l24").className = "tournament__match__team__icon";
		document.getElementById("l25").className = "tournament__match__team__icon";
		document.getElementById("l26").className = "tournament__match__team__icon";
		document.getElementById("l27").className = "tournament__match__team__icon";
		document.getElementById("l28").className = "tournament__match__team__icon";
		document.getElementById("l29").className = "tournament__match__team__icon";
	}

	if (total === "bfj") {
		i=25;
		document.getElementById("p24").innerHTML = "Bie";

		document.getElementById("l24").className = "tournament__match__team__icon__green";

		document.getElementById("l0").className = "tournament__match__team__icon2";
		document.getElementById("l1").className = "tournament__match__team__icon2";
		document.getElementById("l2").className = "tournament__match__team__icon2";
		document.getElementById("l3").className = "tournament__match__team__icon2";
		document.getElementById("l4").className = "tournament__match__team__icon2";
		document.getElementById("l5").className = "tournament__match__team__icon2";
		document.getElementById("l6").className = "tournament__match__team__icon2";
		document.getElementById("l7").className = "tournament__match__team__icon2";
		document.getElementById("l8").className = "tournament__match__team__icon2";
		document.getElementById("l9").className = "tournament__match__team__icon2";
		document.getElementById("l10").className = "tournament__match__team__icon2";
		document.getElementById("l11").className = "tournament__match__team__icon2";
		document.getElementById("l12").className = "tournament__match__team__icon2";
		document.getElementById("l13").className = "tournament__match__team__icon2";
		document.getElementById("l14").className = "tournament__match__team__icon2";
		document.getElementById("l15").className = "tournament__match__team__icon2";
		document.getElementById("l16").className = "tournament__match__team__icon2";
		document.getElementById("l17").className = "tournament__match__team__icon2";
		document.getElementById("l18").className = "tournament__match__team__icon2";
		document.getElementById("l19").className = "tournament__match__team__icon2";
		document.getElementById("l20").className = "tournament__match__team__icon2";
		document.getElementById("l21").className = "tournament__match__team__icon2";
		document.getElementById("l22").className = "tournament__match__team__icon2";
		document.getElementById("l23").className = "tournament__match__team__icon2";
		document.getElementById("l25").className = "tournament__match__team__icon";
		document.getElementById("l26").className = "tournament__match__team__icon";
		document.getElementById("l27").className = "tournament__match__team__icon";
		document.getElementById("l28").className = "tournament__match__team__icon";
		document.getElementById("l29").className = "tournament__match__team__icon";
	}

	if (total === "ffb") {
		number=ffb;
	}

	if (total === "ffa") {
		i=28;

		document.getElementById("l0").className = "tournament__match__team__icon2";
		document.getElementById("l1").className = "tournament__match__team__icon2";
		document.getElementById("l2").className = "tournament__match__team__icon2";
		document.getElementById("l3").className = "tournament__match__team__icon2";
		document.getElementById("l4").className = "tournament__match__team__icon2";
		document.getElementById("l5").className = "tournament__match__team__icon2";
		document.getElementById("l6").className = "tournament__match__team__icon2";
		document.getElementById("l7").className = "tournament__match__team__icon2";
		document.getElementById("l8").className = "tournament__match__team__icon2";
		document.getElementById("l9").className = "tournament__match__team__icon2";
		document.getElementById("l10").className = "tournament__match__team__icon2";
		document.getElementById("l11").className = "tournament__match__team__icon2";
		document.getElementById("l12").className = "tournament__match__team__icon2";
		document.getElementById("l13").className = "tournament__match__team__icon2";
		document.getElementById("l14").className = "tournament__match__team__icon2";
		document.getElementById("l15").className = "tournament__match__team__icon2";
		document.getElementById("l16").className = "tournament__match__team__icon2";
		document.getElementById("l17").className = "tournament__match__team__icon2";
		document.getElementById("l18").className = "tournament__match__team__icon2";
		document.getElementById("l19").className = "tournament__match__team__icon2";
		document.getElementById("l20").className = "tournament__match__team__icon2";
		document.getElementById("l21").className = "tournament__match__team__icon2";
		document.getElementById("l22").className = "tournament__match__team__icon2";
		document.getElementById("l23").className = "tournament__match__team__icon2";
		document.getElementById("l24").className = "tournament__match__team__icon2";
		document.getElementById("l25").className = "tournament__match__team__icon2";
		document.getElementById("l26").className = "tournament__match__team__icon2";
		document.getElementById("l27").className = "tournament__match__team__icon2";
		document.getElementById("l28").className = "tournament__match__team__icon";
		document.getElementById("l29").className = "tournament__match__team__icon";
	}

	if (total === "ffi") {
		i=28;

		document.getElementById("l0").className = "tournament__match__team__icon2";
		document.getElementById("l1").className = "tournament__match__team__icon2";
		document.getElementById("l2").className = "tournament__match__team__icon2";
		document.getElementById("l3").className = "tournament__match__team__icon2";
		document.getElementById("l4").className = "tournament__match__team__icon2";
		document.getElementById("l5").className = "tournament__match__team__icon2";
		document.getElementById("l6").className = "tournament__match__team__icon2";
		document.getElementById("l7").className = "tournament__match__team__icon2";
		document.getElementById("l8").className = "tournament__match__team__icon2";
		document.getElementById("l9").className = "tournament__match__team__icon2";
		document.getElementById("l10").className = "tournament__match__team__icon2";
		document.getElementById("l11").className = "tournament__match__team__icon2";
		document.getElementById("l12").className = "tournament__match__team__icon2";
		document.getElementById("l13").className = "tournament__match__team__icon2";
		document.getElementById("l14").className = "tournament__match__team__icon2";
		document.getElementById("l15").className = "tournament__match__team__icon2";
		document.getElementById("l16").className = "tournament__match__team__icon2";
		document.getElementById("l17").className = "tournament__match__team__icon2";
		document.getElementById("l18").className = "tournament__match__team__icon2";
		document.getElementById("l19").className = "tournament__match__team__icon2";
		document.getElementById("l20").className = "tournament__match__team__icon2";
		document.getElementById("l21").className = "tournament__match__team__icon2";
		document.getElementById("l22").className = "tournament__match__team__icon2";
		document.getElementById("l23").className = "tournament__match__team__icon2";
		document.getElementById("l24").className = "tournament__match__team__icon2";
		document.getElementById("l25").className = "tournament__match__team__icon2";
		document.getElementById("l26").className = "tournament__match__team__icon2";
		document.getElementById("l27").className = "tournament__match__team__icon2";
		document.getElementById("l28").className = "tournament__match__team__icon";
		document.getElementById("l29").className = "tournament__match__team__icon";
	}

	if (total === "ffc") {

		i=28;

		document.getElementById("l0").className = "tournament__match__team__icon2";
		document.getElementById("l1").className = "tournament__match__team__icon2";
		document.getElementById("l2").className = "tournament__match__team__icon2";
		document.getElementById("l3").className = "tournament__match__team__icon2";
		document.getElementById("l4").className = "tournament__match__team__icon2";
		document.getElementById("l5").className = "tournament__match__team__icon2";
		document.getElementById("l6").className = "tournament__match__team__icon2";
		document.getElementById("l7").className = "tournament__match__team__icon2";
		document.getElementById("l8").className = "tournament__match__team__icon2";
		document.getElementById("l9").className = "tournament__match__team__icon2";
		document.getElementById("l10").className = "tournament__match__team__icon2";
		document.getElementById("l11").className = "tournament__match__team__icon2";
		document.getElementById("l12").className = "tournament__match__team__icon2";
		document.getElementById("l13").className = "tournament__match__team__icon2";
		document.getElementById("l14").className = "tournament__match__team__icon2";
		document.getElementById("l15").className = "tournament__match__team__icon2";
		document.getElementById("l16").className = "tournament__match__team__icon2";
		document.getElementById("l17").className = "tournament__match__team__icon2";
		document.getElementById("l18").className = "tournament__match__team__icon2";
		document.getElementById("l19").className = "tournament__match__team__icon2";
		document.getElementById("l20").className = "tournament__match__team__icon2";
		document.getElementById("l21").className = "tournament__match__team__icon2";
		document.getElementById("l22").className = "tournament__match__team__icon2";
		document.getElementById("l23").className = "tournament__match__team__icon2";
		document.getElementById("l24").className = "tournament__match__team__icon2";
		document.getElementById("l25").className = "tournament__match__team__icon2";
		document.getElementById("l26").className = "tournament__match__team__icon2";
		document.getElementById("l27").className = "tournament__match__team__icon2";
		document.getElementById("l28").className = "tournament__match__team__icon";
		document.getElementById("l29").className = "tournament__match__team__icon";
	}

	if (total === "ffj") {
		i=28;

		document.getElementById("l0").className = "tournament__match__team__icon2";
		document.getElementById("l1").className = "tournament__match__team__icon2";
		document.getElementById("l2").className = "tournament__match__team__icon2";
		document.getElementById("l3").className = "tournament__match__team__icon2";
		document.getElementById("l4").className = "tournament__match__team__icon2";
		document.getElementById("l5").className = "tournament__match__team__icon2";
		document.getElementById("l6").className = "tournament__match__team__icon2";
		document.getElementById("l7").className = "tournament__match__team__icon2";
		document.getElementById("l8").className = "tournament__match__team__icon2";
		document.getElementById("l9").className = "tournament__match__team__icon2";
		document.getElementById("l10").className = "tournament__match__team__icon2";
		document.getElementById("l11").className = "tournament__match__team__icon2";
		document.getElementById("l12").className = "tournament__match__team__icon2";
		document.getElementById("l13").className = "tournament__match__team__icon2";
		document.getElementById("l14").className = "tournament__match__team__icon2";
		document.getElementById("l15").className = "tournament__match__team__icon2";
		document.getElementById("l16").className = "tournament__match__team__icon2";
		document.getElementById("l17").className = "tournament__match__team__icon2";
		document.getElementById("l18").className = "tournament__match__team__icon2";
		document.getElementById("l19").className = "tournament__match__team__icon2";
		document.getElementById("l20").className = "tournament__match__team__icon2";
		document.getElementById("l21").className = "tournament__match__team__icon2";
		document.getElementById("l22").className = "tournament__match__team__icon2";
		document.getElementById("l23").className = "tournament__match__team__icon2";
		document.getElementById("l24").className = "tournament__match__team__icon2";
		document.getElementById("l25").className = "tournament__match__team__icon2";
		document.getElementById("l26").className = "tournament__match__team__icon2";
		document.getElementById("l27").className = "tournament__match__team__icon2";
		document.getElementById("l28").className = "tournament__match__team__icon";
		document.getElementById("l29").className = "tournament__match__team__icon";
	}

	if (total === "vfb") {
		number=vfb;
	}

	if (total === "vfa") {
		i=24;


		document.getElementById("l0").className = "tournament__match__team__icon2";
		document.getElementById("l1").className = "tournament__match__team__icon2";
		document.getElementById("l2").className = "tournament__match__team__icon2";
		document.getElementById("l3").className = "tournament__match__team__icon2";
		document.getElementById("l4").className = "tournament__match__team__icon2";
		document.getElementById("l5").className = "tournament__match__team__icon2";
		document.getElementById("l6").className = "tournament__match__team__icon2";
		document.getElementById("l7").className = "tournament__match__team__icon2";
		document.getElementById("l8").className = "tournament__match__team__icon2";
		document.getElementById("l9").className = "tournament__match__team__icon2";
		document.getElementById("l10").className = "tournament__match__team__icon2";
		document.getElementById("l11").className = "tournament__match__team__icon2";
		document.getElementById("l12").className = "tournament__match__team__icon2";
		document.getElementById("l13").className = "tournament__match__team__icon2";
		document.getElementById("l14").className = "tournament__match__team__icon2";
		document.getElementById("l15").className = "tournament__match__team__icon2";
		document.getElementById("l16").className = "tournament__match__team__icon2";
		document.getElementById("l17").className = "tournament__match__team__icon2";
		document.getElementById("l18").className = "tournament__match__team__icon2";
		document.getElementById("l19").className = "tournament__match__team__icon2";
		document.getElementById("l20").className = "tournament__match__team__icon2";
		document.getElementById("l21").className = "tournament__match__team__icon2";
		document.getElementById("l22").className = "tournament__match__team__icon2";
		document.getElementById("l23").className = "tournament__match__team__icon2";
		document.getElementById("l24").className = "tournament__match__team__icon";
		document.getElementById("l25").className = "tournament__match__team__icon";
		document.getElementById("l26").className = "tournament__match__team__icon";
		document.getElementById("l27").className = "tournament__match__team__icon";
		document.getElementById("l28").className = "tournament__match__team__icon";
		document.getElementById("l29").className = "tournament__match__team__icon";
	}

	if (total === "vfi") {
		i=17;
		document.getElementById("p16").innerHTML = "Bie";

		document.getElementById("l16").className = "tournament__match__team__icon__green";

		document.getElementById("l0").className = "tournament__match__team__icon2";
		document.getElementById("l1").className = "tournament__match__team__icon2";
		document.getElementById("l2").className = "tournament__match__team__icon2";
		document.getElementById("l3").className = "tournament__match__team__icon2";
		document.getElementById("l4").className = "tournament__match__team__icon2";
		document.getElementById("l5").className = "tournament__match__team__icon2";
		document.getElementById("l6").className = "tournament__match__team__icon2";
		document.getElementById("l7").className = "tournament__match__team__icon2";
		document.getElementById("l8").className = "tournament__match__team__icon2";
		document.getElementById("l9").className = "tournament__match__team__icon2";
		document.getElementById("l10").className = "tournament__match__team__icon2";
		document.getElementById("l11").className = "tournament__match__team__icon2";
		document.getElementById("l12").className = "tournament__match__team__icon2";
		document.getElementById("l13").className = "tournament__match__team__icon2";
		document.getElementById("l14").className = "tournament__match__team__icon2";
		document.getElementById("l15").className = "tournament__match__team__icon2";
		
		document.getElementById("l17").className = "tournament__match__team__icon";
		document.getElementById("l18").className = "tournament__match__team__icon";
		document.getElementById("l19").className = "tournament__match__team__icon";
		document.getElementById("l20").className = "tournament__match__team__icon";
		document.getElementById("l21").className = "tournament__match__team__icon";
		document.getElementById("l22").className = "tournament__match__team__icon";
		document.getElementById("l23").className = "tournament__match__team__icon";
		document.getElementById("l24").className = "tournament__match__team__icon";
		document.getElementById("l25").className = "tournament__match__team__icon";
		document.getElementById("l26").className = "tournament__match__team__icon";
		document.getElementById("l27").className = "tournament__match__team__icon";
		document.getElementById("l28").className = "tournament__match__team__icon";
		document.getElementById("l29").className = "tournament__match__team__icon";
	}

	if (total === "vfc") {
		i=17;
		document.getElementById("p16").innerHTML = "Bie";

		document.getElementById("l16").className = "tournament__match__team__icon__green";

		document.getElementById("l0").className = "tournament__match__team__icon2";
		document.getElementById("l1").className = "tournament__match__team__icon2";
		document.getElementById("l2").className = "tournament__match__team__icon2";
		document.getElementById("l3").className = "tournament__match__team__icon2";
		document.getElementById("l4").className = "tournament__match__team__icon2";
		document.getElementById("l5").className = "tournament__match__team__icon2";
		document.getElementById("l6").className = "tournament__match__team__icon2";
		document.getElementById("l7").className = "tournament__match__team__icon2";
		document.getElementById("l8").className = "tournament__match__team__icon2";
		document.getElementById("l9").className = "tournament__match__team__icon2";
		document.getElementById("l10").className = "tournament__match__team__icon2";
		document.getElementById("l11").className = "tournament__match__team__icon2";
		document.getElementById("l12").className = "tournament__match__team__icon2";
		document.getElementById("l13").className = "tournament__match__team__icon2";
		document.getElementById("l14").className = "tournament__match__team__icon2";
		document.getElementById("l15").className = "tournament__match__team__icon2";
		
		document.getElementById("l17").className = "tournament__match__team__icon";
		document.getElementById("l18").className = "tournament__match__team__icon";
		document.getElementById("l19").className = "tournament__match__team__icon";
		document.getElementById("l20").className = "tournament__match__team__icon";
		document.getElementById("l21").className = "tournament__match__team__icon";
		document.getElementById("l22").className = "tournament__match__team__icon";
		document.getElementById("l23").className = "tournament__match__team__icon";
		document.getElementById("l24").className = "tournament__match__team__icon";
		document.getElementById("l25").className = "tournament__match__team__icon";
		document.getElementById("l26").className = "tournament__match__team__icon";
		document.getElementById("l27").className = "tournament__match__team__icon";
		document.getElementById("l28").className = "tournament__match__team__icon";
		document.getElementById("l29").className = "tournament__match__team__icon";
	}

	if (total === "vfj") {
		i=17;
		document.getElementById("p16").innerHTML = "Bie";
		document.getElementById("p23").innerHTML = "Bie";

		document.getElementById("l16").className = "tournament__match__team__icon__green";
		document.getElementById("l23").className = "tournament__match__team__icon__green";

		document.getElementById("l0").className = "tournament__match__team__icon2";
		document.getElementById("l1").className = "tournament__match__team__icon2";
		document.getElementById("l2").className = "tournament__match__team__icon2";
		document.getElementById("l3").className = "tournament__match__team__icon2";
		document.getElementById("l4").className = "tournament__match__team__icon2";
		document.getElementById("l5").className = "tournament__match__team__icon2";
		document.getElementById("l6").className = "tournament__match__team__icon2";
		document.getElementById("l7").className = "tournament__match__team__icon2";
		document.getElementById("l8").className = "tournament__match__team__icon2";
		document.getElementById("l9").className = "tournament__match__team__icon2";
		document.getElementById("l10").className = "tournament__match__team__icon2";
		document.getElementById("l11").className = "tournament__match__team__icon2";
		document.getElementById("l12").className = "tournament__match__team__icon2";
		document.getElementById("l13").className = "tournament__match__team__icon2";
		document.getElementById("l14").className = "tournament__match__team__icon2";
		document.getElementById("l15").className = "tournament__match__team__icon2";
		
		document.getElementById("l17").className = "tournament__match__team__icon";
		document.getElementById("l18").className = "tournament__match__team__icon";
		document.getElementById("l19").className = "tournament__match__team__icon";
		document.getElementById("l20").className = "tournament__match__team__icon";
		document.getElementById("l21").className = "tournament__match__team__icon";
		document.getElementById("l22").className = "tournament__match__team__icon";
		
		document.getElementById("l24").className = "tournament__match__team__icon";
		document.getElementById("l25").className = "tournament__match__team__icon";
		document.getElementById("l26").className = "tournament__match__team__icon";
		document.getElementById("l27").className = "tournament__match__team__icon";
		document.getElementById("l28").className = "tournament__match__team__icon";
		document.getElementById("l29").className = "tournament__match__team__icon";

	}


	}


function getName() {


	
	if (total === "bmb") {
		number=bmb;
	}

	if (total === "bma") {
		number=bma;
		if (i == 19) {
			i++;
			j++;
		}
		if (i == 20) {
			i++;
		}
	}

	if (total === "bmi") {
		number=bmi;
		if (i == 19) {
			i++;
		}
	}

	if (total === "bmc") {
		number=bmc;
	}

	if (total === "bmj") {
		number=bmj;
	}

	if (total === "vmb") {
		number=vmb;
	}

	if (total === "vma") {
		number=vma;
		if (i == 19) {
			i++;
		}
	}

	if (total === "vmi") {
		number=vmi;
	}

	if (total === "vmc") {
		number=vmc;
	}

	if (total === "vmj") {
		number=vmj;
	}

	if (total === "fmb") {
		number=fmb;
	}

	if (total === "fma") {
		number=fma;
		if (i == 3) {
			i++;
		}
		if (i == 7) {
			i++;
		}
		if (i == 8) {
			i++;
		}
	}

	if (total === "fmi") {
		number=fmi;
	}

	if (total === "fmc") {
		number=fmc;
		if (i == 3) {
			document.getElementById("l2").className = "tournament__match__team__icon__green";
			i++;
			j++;
		}
		if (i == 4) {
			i++;
			j++;
		}
		if (i == 7) {
			i++;
			j++;
		}
		if (i == 8) {
			i++;
			j++;
		}
		if (i == 12) {
			i++;
			j++;
		}
	}

	if (total === "fmj") {
		number=fmj;
		if (i == 7) {
			i++;
			j++;
		}
		if (i == 8) {
			i++;
			j++;
		}
	}

	if (total === "bfb") {
		number=bfb;
	}

	if (total === "bfa") {
		number=bfa;
	}

	if (total === "bfi") {
		number=bfi;
	}

	if (total === "bfc") {
		number=bfc;
	}

	if (total === "bfj") {
		number=bfj;
	}

	if (total === "ffb") {
		number=ffb;
	}

	if (total === "ffa") {
		number=ffa;
	}

	if (total === "ffi") {
		number=ffi;
	}

	if (total === "ffc") {
		number=ffc;
	}

	if (total === "ffj") {
		number=ffj;
	}

	if (total === "vfb") {
		number=vfb;
	}

	if (total === "vfa") {
		number=vfa;
	}

	if (total === "vfi") {
		number=vfi;
	}

	if (total === "vfc") {
		number=vfc;
	}

	if (total === "vfj") {
		number=vfj;
	}


	/*document.getElementById("test").className = "tournament__match__team__icon__green";*/
    if (0 === number.length) {
        alert('Categoria sortejada completament. Si us plau, seleccioneu un altre.')
        i=0;
    } else {
        var index = Math.floor(Math.random() * number.length);
        var b = 'p'+i;
   
		document.getElementById(b).innerHTML = number[index];
        number.splice(index, 1);
        i++;
        j++;
    }
}