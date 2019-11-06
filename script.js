function verander() {
//hide foto 1
document.getElementById("plaatje1").style.display ="none"
//show foto 2
document.getElementById("plaatje2").style.display="block"

}
function verander2() {
    //hide foto 1
    document.getElementById("plaatje2").style.display ="none"
    //show foto 2
    document.getElementById("plaatje3").style.display="block"
    
    }
    function verander3() {
        //hide foto 1
        document.getElementById("plaatje3").style.display ="none"
        //show foto 2
        document.getElementById("plaatje4").style.display="block"
        
        }
        function verander4() {
            //hide foto 1
            document.getElementById("plaatje4").style.display ="none"
            //show foto 2
            document.getElementById("plaatje5").style.display="block"
            
            }
            function verander5() {
                //hide foto 1
                document.getElementById("plaatje5").style.display ="none"
                //show foto 2
                document.getElementById("plaatje6").style.display="block"
                
                }
                function like(){
                   
                   document.getElementById("like").style.backgroundColor ="green"
                   document.getElementById("dislike").style.backgroundColor="black"
                   
                   }
                   function dislike(){
                   
                    document.getElementById("dislike").style.backgroundColor ="red"
                    document.getElementById("like").style.backgroundColor="black"
                    
                    }
                    


function initArray() {
this.length = initArray.arguments.length;
for (var i = 0; i < this.length; i++)
this[i+1] = initArray.arguments[i];
}

var dagArray = new initArray("zondag","maandag", "dinsdag","woensdag","donderdag","vrijdag","zaterdag");

var maandArray = new initArray("januari","februari","maart","april","mei","juni","juli", "augustus","september","oktober","november","december");

var nu = new Date();
var dagtekst = dagArray[(nu.getDay()+1)];
var dag = nu.getDate();
var maandtekst = maandArray[(nu.getMonth()+1)];
var jaar = nu.getYear();
var jaar4 = ((jaar < 1900) ? (jaar + 1900) : (jaar));

var datumweergave = "Het is vandaag " + dagtekst + " " + dag + " " + maandtekst + " " + jaar4;

document.getElementById("vandaag").innerHTML = datumweergave;


