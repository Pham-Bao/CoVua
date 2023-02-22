var imported = document.createElement('script');
imported.src = 'JS/Sources.js';
document.head.appendChild(imported);

//
var quanco ={
    Hau: 'Vua_Den.png',
}
function VeBanCoTrangDen(){
	for(var i = 1; i < 9; i++){
		for(var j = 1; j < 9; j++){
			document.getElementById(i.toString() + j.toString()).style.backgroundColor = "rgb(255,255,255)";
			if(i % 2 != 0 ){
				if(j % 2 == 0)
					document.getElementById(i.toString() + j.toString()).style.backgroundColor = "rgb(222,184,135)";
			}else{
			if(j % 2 != 0)
				document.getElementById(i.toString() + j.toString()).style.backgroundColor = "rgb(222,184,135)";
			}
		}
	}
}

// function DatCo(){
    
//             document.getElementById("i71").src = quanco.Hau;
//             document.getElementById("i52").src = quanco.Hau;
//             document.getElementById("i33").src = quanco.Hau;
//             document.getElementById("i14").src = quanco.Hau;
//             document.getElementById("i65").src = quanco.Hau;
//             document.getElementById("i86").src = quanco.Hau;
//             document.getElementById("i27").src = quanco.Hau;
//             document.getElementById("i48").src = quanco.Hau;
//         }

function hienthi(id){
	
    // console.log('Hiển thị ô '+id);
     document.getElementById("i"+id).src=quanco.Hau;
	 

 }

// function duongcheo(id){
// 	console.log('di vao vi tri'+ id )
//     for(var i = 1; i < 9; i++){
// 		for(var j = 1; j < 9; j++){

//             if(i-j==0){
//                 document.getElementById("i"+i+j).src = quanco.Hau;
//                 document.getElementById("i"+j+i).src = quanco.Hau;
//             }
//         }
//     }
// }
//var mang = new Array();
function nuocdi(id){

    // var mang = new Array();
	// mang.push(id);
	// console.log(mang);
	

	// console.log('di vao vi tri'+ id );
	//  var X = id.charAt(0);
	//  var Y = id.charAt(1);
	//  console.log(X);
    //  console.log(Y);
	//  var mang= [11, 22, 44, 55, 99, 66];
	//  console.log(mang);
	 //for(i=1 ; i<9 ; i++){
		// console.log(mang[3]);
		// var A = mang[3].charAt(0);
		// var B = mang[3].charAt(1);
		// console.log("gia tri"+A);
		// console.log("gia tri"+B)
	// }
	// console.log("click eee"+clicks);

	//  mang.push(id);
	//  console.log(mang);

	//  for(a = 0; a < clicks; a++){
	// 	console.log("them gia tri vao mang "+mang[a]);
	// 	 let x=mang[a];
	// 	 console.log("x co gia tri" +x);
		 
	//  }
	 

	//hienthi(id);



	  
}
function luuvichi(id){

}