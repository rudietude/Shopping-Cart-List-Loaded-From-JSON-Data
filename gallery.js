//********************************************
//Declare the JSON data for the image gallery
//******************************************** 
var data = 	[{
					image:{
						primary: "http://ecx.images-amazon.com/images/I/71i7zXFq%2BaL._UX342_.jpg",
						secondary:"http://ecx.images-amazon.com/images/I/71BfdXBUtqL._UX342_.jpg",
					},
					rating:4,
					title: "Nicole Miller Women's Lauren Ponte Dress"
				},
				{
					image:{
						primary: "http://ecx.images-amazon.com/images/I/71mOM2ALd3L._UY500_.jpg",
						secondary:"http://ecx.images-amazon.com/images/I/71SuD5zv%2B1L._UX342_.jpg",
					},
					rating:4,
					title: "HALSTON HERITAGE Women's One-Shoulder Dress with Bow Detail"
				},
				{
					image:{
						primary: "http://ecx.images-amazon.com/images/I/71lMCNhZ0UL._UX342_.jpg",
						secondary:"http://ecx.images-amazon.com/images/I/71UWw1vwL-L._UX342_.jpg",
					},
					rating:4,
					title: "Hailey Logan by Adrianna Papell Juniors Short Trans-Lace Dress"
				},
				{
					image:{
						primary: "http://ecx.images-amazon.com/images/I/71iY6hbcGBL._UX342_.jpg",
						secondary:"http://ecx.images-amazon.com/images/I/719xcufM7PL._UX342_.jpg",
					},
					rating:4,
					title: "Vince Camuto Women's Flair Skirt Dress"
				},
				{
					image:{
						primary: "http://ecx.images-amazon.com/images/I/71nWUieZo0L._UX342_.jpg",
						secondary:"http://ecx.images-amazon.com/images/I/71VMM5bgtfL._UX342_.jpg",
					},
					rating:4,
					title: "Hailey Logan by Adrianna Papell Juniors High/Low Mesh Inset Dress"
				},
				{
					image:{
						primary: "http://ecx.images-amazon.com/images/I/71gJpzupswL._UX342_.jpg",
						secondary:"http://ecx.images-amazon.com/images/I/71zh08K2GhL._UX342_.jpg",
					},
					rating:0,
					title: "Hailey Logan by Adrianna Papell Juniors Two-Tone High/Low Dress"
				},
				{
					image:{
						primary: "http://ecx.images-amazon.com/images/I/71BCMxJ63aL._UX342_.jpg",
						secondary:"http://ecx.images-amazon.com/images/I/71%2BO3T%2Bi3EL._UX342_.jpg",
					},
					rating:1,
					title: "Women's Onyx Beaded Side Panels Sleeveless Dress"
				},
				{
					image:{
						primary: "http://ecx.images-amazon.com/images/I/71eEw%2BvpHmL._UX342_.jpg",
						secondary:"http://ecx.images-amazon.com/images/I/716gSZSt%2BEL._UX342_.jpg",
					},
					rating:2,
					title: "Aidan Mattox Women's Aidan Sleeveless Dress"
				},
				{
					image:{
						primary: "http://ecx.images-amazon.com/images/I/71tnvNRGTFL._UX342_.jpg",
						secondary:"http://ecx.images-amazon.com/images/I/71nxNbmiDmL._UX342_.jpg",
					},
					rating:4,
					title: "Hailey Logan by Adrianna Papell Juniors Hi/Low Mesh-Inset Back Dress"
				},
				{
					image:{
						primary: "http://ecx.images-amazon.com/images/I/71pcRDtATpL._UX342_.jpg",
						secondary:"http://ecx.images-amazon.com/images/I/71IqTWMqZvL._UX342_.jpg",
					},
					rating:5,
					title: "London Times Women's Fit-and-Flare Dress with Lace Detail"
				}
			];
				
// Document ready
$( document ).ready(function() {
	//Declare String for holding the galleries html
	var gallery = '<div class="row">';
	
	//alert(data[0].title);
	for (i=0;i<data.length;i++) {
	  //console.log("Key is "+i+" and Value is "+array[i]);
	  if(i % 4 == 0){
	  
		gallery +='</div><div class="row">';
	  }
	  //Open a .galleryItem
	  gallery += '<div class="galleryItem col-md-3">';
	  //Append the primary image
	  gallery += '<div class="galleryImage" style="background-image:url('+data[i].image.primary+');"></div>';
	  gallery += data[i].title;
	  //Close the .galleryItem
	  gallery += '</div>';
	}
	
	//Close the gallery row string
	gallery += '</div>';
	
	//Add the gallery html to the main content area of the page
	$(gallery).appendTo("#content");
});
