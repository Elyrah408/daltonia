




        let retrievedArray = JSON.parse(localStorage.getItem("forPrintData"));
        // const data = ["This is line 1", "This is line 2", "This is line 3"];
//  alert(retrievedArray);
      
        // // Populate HTML list with array data
        // // const list = document.getElementById('array-data');

        // retrievedArray.forEach(item => {
        //   const listItem = document.createElement('li');
        //   listItem.textContent = item;
        //   list.appendChild(listItem);
        //   const Demo = document.createElement("button");
        //   Demo.style.height="100px";
        //   Demo.style.width="100px";
        //   Demo.style.backgroundColor=item;
        //   document.getElementById("content").appendChild(Demo);
        // });
           
        // for( x=0; x<=retrievedArray.length; x++){

        //     hexCode = retrievedArray[x];
        // // }

        // alert(retrievedArray);
          retrievedArray.forEach(item => {
        
           

            item = item.split("#")[1] || item;
            let Arrayforprint =[];
            for(let i= 0; i<item.length; i+=2){
            
           Arrayforprint.push(parseInt(item[i] + item[i+1], 16));
            }
            // alert(Arrayforprint);
             
             let valuearr=[0.367322,0.860646,-.227968,0.280085,0.672501,0.047413,-0.01182,0.04294,0.968881,
                1.255528,-0.076749,-0.178779,-0.078411,0.930809,0.147602,0.004733,0.691367,0.3039,
                0.152286, 1.052583, -.204868, 0.114503, 0.786281, 0.099216,-.003882, -.048116, 1.051998
               ];
  
  
              let  finDeuValR =  (Arrayforprint[0])* (valuearr[0]) + (Arrayforprint[1])*(valuearr[1])+ (Arrayforprint[2])*(valuearr[2]);
              let   finDeuValG =  (Arrayforprint[0])* (valuearr[3]) + (Arrayforprint[1])*(valuearr[4])+ (Arrayforprint[2])*(valuearr[5]);
              let   finDeuValB =  (Arrayforprint[0])* (valuearr[6])+ (Arrayforprint[1])*(valuearr[7])+ (Arrayforprint[2])*(valuearr[8]);
          
              let   fintetValR =  Arrayforprint[0]* valuearr[9]     + Arrayforprint[1]*valuearr[10]+ Arrayforprint[2]*valuearr[11];
              let  fintetValG =  Arrayforprint[0]* valuearr[12]    + Arrayforprint[1]*valuearr[13]+Arrayforprint[2]*valuearr[14];
              let  fintetValB =  Arrayforprint[0]* valuearr[15]    + Arrayforprint[1]*valuearr[16]+Arrayforprint[2]*valuearr[17];
          
              let fiproValR =  Arrayforprint[0]* valuearr[18] + Arrayforprint[1]*valuearr[19]+ Arrayforprint[2]*valuearr[20];
              let fiproValG =  Arrayforprint[0]* valuearr[21] + Arrayforprint[1]*valuearr[22]+Arrayforprint[2]*valuearr[23];
              let fiproValB =  Arrayforprint[0]* valuearr[24] + Arrayforprint[1]*valuearr[25]+Arrayforprint[2]*valuearr[26];

                
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
               
                // alert(newarray);
             
             let rgbvalue =Arrayforprint[0]+","+Arrayforprint[1]+","+Arrayforprint[2];
             let rdh = Math.abs(Math.round(newarray[0]))+","+Math.abs(Math.round(newarray[1]))+","+Math.abs(Math.round(newarray[2]));
             let rth = Math.abs(Math.round(newarray[3]))+","+Math.abs(Math.round(newarray[4]))+","+Math.abs(Math.round(newarray[5]));
             let rph = Math.abs(Math.round(newarray[6]))+","+Math.abs(Math.round(newarray[7]))+","+Math.abs(Math.round(newarray[8]));

      
            let converted = []

             let tablerow = document.createElement("tr");
             tablerow.id="newid";

             let showhex= document.createElement("td");
             showhex.textContent=item;
             showhex.style.border="1px solid black";
             showhex.style.width="150px";
             showhex.style.backgroundColor = "lightblue";
             let btnChex= document.createElement("button");
             btnChex.style.height="2vh";
             btnChex.style.float="right";
             btnChex.style.backgroundColor="#"+item;
             

             let showrgb= document.createElement("td");
             showrgb.textContent=rgbvalue;
             showrgb.style.border="1px solid black";
             showrgb.style.backgroundColor = "lightblue";
             showrgb.style.width="150px";
             let btnCrgb= document.createElement("button");
             btnCrgb.style.height="2vh";
             btnCrgb.style.float="right";
             btnCrgb.style.backgroundColor="RGB("+rgbvalue+")";

 
            let showdeu= document.createElement("td");
            showdeu.textContent=rdh;
            showdeu.style.border="1px solid black";
            showdeu.style.backgroundColor = "lightblue";
            showdeu.style.width="200px";
            let btnCdue= document.createElement("button");
            btnCdue.style.height="2vh";
            btnCdue.style.float="right";
            btnCdue.style.backgroundColor="RGB("+rdh+")";


            let showtit= document.createElement("td");
            showtit.textContent=rth;
            showtit.style.border="1px solid black";
            showtit.style.backgroundColor = "lightblue";
            showtit.style.width="150px";
            let btnCtit= document.createElement("button");
            btnCtit.style.height="2vh";
            btnCtit.style.float="right";
            btnCtit.style.backgroundColor="RGB("+rth+")";



            let showpro= document.createElement("td");
            showpro.textContent=rph;
            showpro.style.backgroundColor = "lightblue";
            showpro.style.border = "1px solid black";
            showpro.style.width="200px";
            let btnCpro= document.createElement("button");
            btnCpro.style.height="2vh";
            btnCpro.style.float="right";
            btnCpro.style.backgroundColor="RGB("+rph+")";


            document.getElementById("array-data").appendChild(tablerow);
            showhex.appendChild(btnChex);
            tablerow.appendChild(showhex);

            showrgb.appendChild(btnCrgb);
            tablerow.appendChild(showrgb);
            
            showdeu.appendChild(btnCdue);
            tablerow.appendChild(showdeu);

            showtit.appendChild(btnCtit);
            tablerow.appendChild(showtit);


            showpro.appendChild(btnCpro);
            tablerow.appendChild(showpro);

  Arrayforprint.length=0;


 
        });
        



        // Function to generate PDF from HTML content
        function generatePDF() {
          const element = document.getElementById('content');
          html2pdf().from(element).save("Color_choice.pdf");
        };

    

window.onload = () => {

  let savedLanguage = localStorage.getItem("language");
  localStorage.getItem("transalation");
     

  document.getElementById("printhead").textContent = transalation[savedLanguage].printhead;
  document.getElementById("butondownload").textContent = transalation[savedLanguage].butondownload;
  document.getElementById("homebtn").textContent = transalation[savedLanguage].redirect;

  document.getElementById("th1").textContent = transalation[savedLanguage].th1;
  document.getElementById("th2").textContent = transalation[savedLanguage].th2;
  document.getElementById("th3").textContent = transalation[savedLanguage].th3;
  document.getElementById("th4").textContent = transalation[savedLanguage].th4;
  document.getElementById("th5").textContent = transalation[savedLanguage].th5;

 


};





// redirect to home page

document.getElementById("homebtn").addEventListener("click",()=>{

  location.reload();
  myColorList.length=0;
  window. location. href ="index.html";
 });
