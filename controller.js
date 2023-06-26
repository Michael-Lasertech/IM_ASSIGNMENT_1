
    // Scroll to top function 
    function ScrollToTop(){
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
        duration: 3000 
        });
    }
   

    function processLink(getLink) {
        
        if(window.location.href != getLink) {
            duration = 1000;
            window.location.href = getLink;
        } else if(window.location.href == getLink){
            ScrollToTop();
        }
   }
  
   function PopulateNavigation(){
     
      fetch('./store.html')
      .then(response => {return response.text();})
      .then(text => document.getElementById('navigationBar').innerHTML = text)
    
      ;
   }

  document.addEventListener('DOMContentLoaded',PopulateNavigation);
 

  

   
 
