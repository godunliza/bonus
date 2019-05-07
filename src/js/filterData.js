export default function filterData(filejson,idDest,regExp=/\w+/gmi){


console.log("filterData",regExp,filejson);
//var cardName=document.getElementsByClassName('card_item_desc_zag');
var cardName=$('.card_item_desc_zag')
console.log(cardName);
if(regExp!==/\w+/gmi)
{

    cleanFilter(idDest);
        for(let i=0;i<cardName.length;i++){
            let found=cardName[i].innerHTML.search(regExp);    
        if(filejson=='partners.json')
        {
            var elHide= cardName[i].parentElement.parentElement;

        }
        else
        {
            var elHide= cardName[i].parentElement.parentElement;
        }

        
       

        if(found==-1)
        {
            
          elHide.style.display="none ";/*!!!!!Не пашет */
          elHide.classList.add("hide");
          // elHide.addClass("hide");
          // elHide.hide("slow");

        }
        }
}
else{

   cleanFilter()
   


}

}



function cleanFilter(idDest){
    


    
    var slayder=document.querySelector(idDest);
   var filtered=slayder.getElementsByClassName('hide');
  // var slayder=$(idDest);
  // var filtered=slayder.find($('.hide'));
    if(filtered.length){
        

 for(let i=0;i<filtered.length;i++)
 {
  
    //filtered[0].show();
    // filtered[0].removeClass('hide');
    filtered[0].display="block";
    elHide.classList.remove("hide");
  
    
 }
    }
    
return true;
   
}
