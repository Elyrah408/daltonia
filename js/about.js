// redirect to the index.html


document.getElementById("logo").addEventListener("click",()=>{

    window. location. href ="index.html";


});



window.onload = () => {

    let savedLanguage = localStorage.getItem("language");
    localStorage.getItem("transalation");
       
  
    document.getElementById("abouthead").textContent = transalation[savedLanguage].abouthead;
    document.getElementById("abouthead2").textContent = transalation[savedLanguage].abouthead2;
    document.getElementById("aboutp1").textContent = transalation[savedLanguage].aboutp1;

    document.getElementById("part2").textContent = transalation[savedLanguage].part2;
    document.getElementById("part2p").textContent = transalation[savedLanguage].part2p;

    document.getElementById("part3").textContent = transalation[savedLanguage].part3;
    document.getElementById("part3p").textContent = transalation[savedLanguage].part3p;

    document.getElementById("part4").textContent = transalation[savedLanguage].part4;
    document.getElementById("part4p").textContent = transalation[savedLanguage].part4p;

    document.getElementById("part5").textContent = transalation[savedLanguage].part5;
    document.getElementById("part5p").textContent = transalation[savedLanguage].part5p;
   
    document.getElementById("part5").textContent = transalation[savedLanguage].part5;
    document.getElementById("part5p").textContent = transalation[savedLanguage].part5p;

    document.getElementById("part6").textContent = transalation[savedLanguage].part6;
    document.getElementById("part6p").textContent = transalation[savedLanguage].part6p;

    document.getElementById("part7").textContent = transalation[savedLanguage].part7;
    document.getElementById("part7p").textContent = transalation[savedLanguage].part7p;
   
  
  
  };
  

