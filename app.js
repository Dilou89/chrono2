

var dixi=0 ;
var seconde=0;
var minute=0;
var timeur;

$('#depart').click(function(){
	console.log("sdfsdfsdf")

timeur=setInterval(function(){
	dixi++; 


if (dixi>9){dixi=0;seconde++}; 

if (seconde>59){seconde=0;minute++} 

$('#minute').val(minute);
$('#seconde').val(seconde);
$('#dixi').val(dixi);
	
}

, 100);
});
$('#pause').click(function(){

	console.log("test");
clearInterval(timeur);
});

$('#reset').click(function(){
	console.log("reset");
	clearInterval(timeur);

dixi=0;
seconde=0
minute=0;

$('#minute').val(minute);
$('#seconde').val(seconde);
$('#dixi').val(dixi);



})
