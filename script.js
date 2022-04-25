//numbers

const number = document.getElementsByClassName("number");

for(var i=0; i<number.length; i++){
    
    number[i].addEventListener('click', onDisplay); 
    const num = number[i].innerHTML;
    
     
function onDisplay(){
       
    const zero = $( ".dh3" ).text(); 
    
    if (zero.charAt( 0 ) == "0" && zero.charAt( 1 ) == "."){
        $( ".dh3" ).append(num) ;
    
    }
	else if (zero.charAt( 0 ) == "0")
	{
        $( ".dh3" ).empty();
        $( ".dh3" ).append(num);
    } 
    else 
	{
		$( ".dh3" ).append(num) ;
    }
    
    }
};

//operators

$(".plus").click(function(){
    
    $( ".label" ).append($( ".dh3" ).text()); 
    
    const lastTwo = ($( ".label" ).text().slice(-2));
        
    if(lastTwo == "+ " || lastTwo == "- " || lastTwo == "* " || lastTwo == "/ " ){
        
        const labelString = $( ".label" ).text();
                
        const finalString = labelString.slice(0, -3);
        
        $( ".label" ).empty();
        $( ".label" ).append(finalString);
        $( ".label" ).append(" + ");
        
    }else 
	{
       
    $( ".label" ).append(" + ");
    $( ".dh3" ).empty();
    }
   
});


$(".minus").click(function(){
    
    $( ".label" ).append($( ".dh3" ).text()); 
    
    const lastTwo = ($( ".label" ).text().slice(-2));
        
    if(lastTwo == "+ " || lastTwo == "- " || lastTwo == "* " || lastTwo == "/ " ){
        
        const labelString = $( ".label" ).text();
                
        const finalString = labelString.slice(0, -3);
        
        $( ".label" ).empty();
        $( ".label" ).append(finalString);
        $( ".label" ).append(" - ");
        
     }else 
	 {
    
    $( ".label" ).append(" - ");
    $( ".dh3" ).empty();
    
    }
});


$(".multiplication").click(function(){
    
     $( ".label" ).append($( ".dh3" ).text()); 
    
    const lastTwo = ($( ".label" ).text().slice(-2));
        
    if(lastTwo == "+ " || lastTwo == "- " || lastTwo == "* " || lastTwo == "/ " ){
        
        const labelString = $( ".label" ).text();
                
        const finalString = labelString.slice(0, -3);
        
        $( ".label" ).empty();
        $( ".label" ).append(finalString);
        $( ".label" ).append(" * ");
        
    }else 
	{
      
    $( ".label" ).append(" * ");
    $( ".dh3" ).empty();
    
    }
});


$(".divide").click(function(){
    
    $( ".label" ).append($( ".dh3" ).text()); 
    
    const lastTwo = ($( ".label" ).text().slice(-2));
        
    if(lastTwo == "+ " || lastTwo == "- " || lastTwo == "* " || lastTwo == "/ " ){
        
        const labelString = $( ".label" ).text();
                
        const finalString = labelString.slice(0, -3);
        
        $( ".label" ).empty();
        $( ".label" ).append(finalString);
        $( ".label" ).append(" / ");
        
    }else 
	{
    
    $( ".label" ).append(" / ");
    $( ".dh3" ).empty();
    
    }
});

//clear 

$(".clear").click(function(){
    $( ".label" ).empty();
    $( ".dh3" ).empty();
    $( ".dh3" ).append("0");
    
});

//equal

$(".equal").click(function(){
   
    $( ".label" ).append($( ".dh3" ).text());
    
    $( ".dh3" ).empty();
   
    equal();
    
    
   function equal(){   
       
    const result = $(".label").text();
    const resultDecimals = eval(result).toFixed(2);
    
    if(resultDecimals.includes(".00")){
		
        $( ".dh3" ).append(eval(result));
        $( ".label" ).empty();
		
    }
	else 
	{
		
        $( ".dh3" ).append(resultDecimals);
        $( ".label" ).empty();
		
    }
    
    }
    
});

//point button

$(".point").click(function(){
    const zeroPoint = $( ".dh3" ).text().slice(-1);
    const includePoint = $( ".dh3" ).text();
    
    if(zeroPoint == "."){
        
    }else if(includePoint.includes("."))
	{
        
    }
    else if($( ".dh3" ).text() == "0")
	{
		
     $( ".dh3" ).empty();
     $( ".dh3" ).append("0.");
	 
    }else 
	
	{
     $( ".dh3" ).append(".");
    }
});

//del button

$(".del").click(function(){
    if($( ".dh3" ).text() != "0")
	
	{
        
    const delLastChar = $( ".dh3" ).text().slice(0, -1);
    
    $( ".dh3" ).empty();
    $( ".dh3" ).append(delLastChar);   
    
    }
	
	if($( ".dh3" ).text() == "")
	{
		$( ".dh3" ).append("0");    
    }
});
