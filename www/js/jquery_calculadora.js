$(function () {
	
	var acc=0,op="";	
	
	alert("Estamos utilizando Jquery");

   $("#num").on("click",function(){
     		 $("#num").val("");
     		 }
     	);
     	
	 $("#mas").on("click",function(){
     		 acc=$("#num").val();
     		 op="+";			  		 
     		 }
     	); 	
       	
     	
	$("#menos").on("click",function(){acc=$("#num").val(); op="-";});     	
     
   $("#multiplicar").on("click",function(){acc=$("#num").val(); op="*";});
   
   $("#dividir").on("click",function(){acc=$("#num").val(); op="/";});
    	
     	   	
     
   $("#igual").on("click",function(){
     		var numero=$("#num").val();
     		
     				if (op=="+") {
     		 			numero=parseInt(numero)+parseInt(acc);
     		 			numero=$("#num").val(numero);     		 			 		 
						}
     		 		if (op=="-") {
     		 			numero=parseInt(acc)-parseInt(numero);
     		 			numero=$("#num").val(numero);     		 			 		 
						}
     		 		if (op=="*") {
     		 			numero=parseInt(acc)*parseInt(numero);
     		 			numero=$("#num").val(numero);     		 			 		 
						}
     		 		if (op=="/") {
     		 			numero=parseInt(acc)/parseInt(numero);
     		 			numero=$("#num").val(numero);     		 			 		 
						}     		 
     		 }
     		 
     	); 	
     	
     	
});


    