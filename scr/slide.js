jQuery(document).ready(function(){
	cont = 0;
	
	var img = Array();
	
	img[1] ="1.jpg";
	img[2] ="2.jpg";
	img[3] ="3.jpg";
	img[4] ="4.jpg";

	jQuery("#dir").click(function(){
		if(cont==4) cont = 1; else cont++;
		jQuery("#gde").fadeOut();
		jQuery("#gde").attr("src","../img/" + img[cont]);
		jQuery("#gde").fadeIn();
	});
	
	jQuery("#dir").trigger("click");
	
	jQuery("#esq").click(function(){
		if(cont==1) cont = 4; else cont--;
		jQuery("#gde").fadeOut();
		jQuery("#gde").attr("src","../img/" + img[cont]);
		jQuery("#gde").fadeIn();
	});
	
	jQuery("#esq").trigger("click");	
});