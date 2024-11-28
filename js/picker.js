


    let colorButton = document.getElementById("colorButton");
    let colorPicker = document.getElementById("colorPicker");

    colorButton.addEventListener('click', () => {
      colorPicker.click();
    });

    colorPicker.addEventListener('input', (event) => {
      let selectedColor = event.target.value;
      colorButton.style.backgroundColor = selectedColor;
    

    });


    let sub_btn= document.getElementById("Submit");
    sub_btn.addEventListener("click", ()=>{
     let hexCode= colorPicker.value;
     let rgbArr=[];

    

      if(/^#?[A-Fa-f0-p]{6}$/.test(hexCode)){
                  
                   hexCode = hexCode.split("#")[1] || hexCode;
                   for(let i= 0; i<hexCode.length; i+=2){
          
                  rgbArr.push(parseInt(hexCode[i] + hexCode[i+1], 16));
          
          
                  
               }
              }
              // alert(rgbArr);
                           var valuearr=[0.367322,0.860646,-.227968,0.280085,0.672501,0.047413,-0.01182,0.04294,0.968881,
              1.255528,-0.076749,-0.178779,-0.078411,0.930809,0.147602,0.004733,0.691367,0.3039,
              0.152286, 1.052583, -.204868, 0.114503, 0.786281, 0.099216,-.003882, -.048116, 1.051998
             ];


            let  finDeuValR =  (rgbArr[0])* (valuearr[0]) + (rgbArr[1])*(valuearr[1])+ (rgbArr[2])*(valuearr[2]);
            let   finDeuValG =  (rgbArr[0])* (valuearr[3]) + (rgbArr[1])*(valuearr[4])+ (rgbArr[2])*(valuearr[5]);
            let   finDeuValB =  (rgbArr[0])* (valuearr[6])+ (rgbArr[1])*(valuearr[7])+ (rgbArr[2])*(valuearr[8]);
        
            let   fintetValR =  rgbArr[0]* valuearr[9]     + rgbArr[1]*valuearr[10]+ rgbArr[2]*valuearr[11];
            let  fintetValG =  rgbArr[0]* valuearr[12]    + rgbArr[1]*valuearr[13]+rgbArr[2]*valuearr[14];
            let  fintetValB =  rgbArr[0]* valuearr[15]    + rgbArr[1]*valuearr[16]+rgbArr[2]*valuearr[17];
        
            let fiproValR =  rgbArr[0]* valuearr[18] + rgbArr[1]*valuearr[19]+ rgbArr[2]*valuearr[20];
            let fiproValG =  rgbArr[0]* valuearr[21] + rgbArr[1]*valuearr[22]+rgbArr[2]*valuearr[23];
            let fiproValB =  rgbArr[0]* valuearr[24] + rgbArr[1]*valuearr[25]+rgbArr[2]*valuearr[26];
               
                let newarray=[];
                let changevalue=[finDeuValR,finDeuValG,finDeuValB,fintetValR,fintetValG,fintetValB,fiproValR,fiproValG,fiproValB];
                for(let x=0;  x<9; x++){
                 if(changevalue[x]>255){
                   changevalue[x]=255
        
                   newarray.push(changevalue[x]);
                 }
                 else{
                  newarray.push(changevalue[x]);
                 }
                
                      
                }
             

             let rgbvalue =rgbArr[0]+","+rgbArr[1]+","+rgbArr[2];
             let rdh = Math.abs(Math.round(newarray[0]))+","+Math.abs(Math.round(newarray[1]))+","+Math.abs(Math.round(newarray[2]));
             let rth = Math.abs(Math.round(newarray[3]))+","+Math.abs(Math.round(newarray[4]))+","+Math.abs(Math.round(newarray[5]));
             let rph = Math.abs(Math.round(newarray[6]))+","+Math.abs(Math.round(newarray[7]))+","+Math.abs(Math.round(newarray[8]));

            //  alert(rdh);

             let data=[rgbvalue,rdh,rth,rph];

             localStorage.setItem("mycolorvalues", JSON.stringify(data));

             window.location.href="result.html";
      });
  
      
             

  



function valid(element){

 }


 


 


   

    
