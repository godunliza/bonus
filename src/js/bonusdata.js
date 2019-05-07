


export default function getDataBonus(filejson){
/*Функция получает имя файла json*/
var idDest,memName;
switch(filejson){

    case 'bonus.json':{
        idDest='#'+'slayderbon';
        memName="Участников :"
        break;
    }
    case 'coupon.json':{
        idDest='#'+'slaydercoup';
        memName="Уже купили :"
        break;
    }
    default:{
        console.log("File not exist");
        break;
    }


}
var xhr = new XMLHttpRequest();
var items;
xhr.open('GET', '../json/'+filejson,true);
xhr.responseType = "json"; 
var resp;
console.log("Function",xhr);
xhr.send();
xhr.onload=function(){    
resp=xhr.response;


/*Получение шаблона*/
if ('content' in document.createElement('template')) {
 
    var item = document.querySelector('#item');//template
    items = document.querySelector(idDest);//destination
    var fragment = document.createDocumentFragment();//fragment
    var urlIcon=item.content.querySelector(".card_item_pic_bonus_icon");
    var categ=item.content.querySelector(".card_item_desc_categ");
    var descZag=item.content.querySelector(".card_item_desc_zag");
    var addr=item.content.querySelector(".card_item_desc_addr");


    var h6=item.content.querySelector('h6');
    var lastBonus=item.content.querySelector(".card_item_pic_last_bonus");
    var urlImage=item.content.querySelector(".card_pic");
    var timeost=item.content.querySelector(".card_item_pic_time_text");
    var time=item.content.querySelector(".card_item_desc_time");
    var buyers=item.content.querySelector(".card_item_desc_bottom_buyers");
   


   
}
/*Заполнение шаблона */
resp.slice(0,3).forEach(
    function(element,index){

   urlIcon.src=element.urlicon;
   h6.innerText=element.bonusnow;
   lastBonus.innerText=element.bonuslast;
   urlImage.src=element.urlpic;
   timeost.innerText="Осталось:"+element.daylast;
   
   categ.innerText=element.category;
   descZag.innerText=element.name;
   addr.innerText=element.addr;
   time.innerText="Действует: "+element.timestart+"-"+element.timeend;
   buyers.innerText=memName+element.members;
  
    var clone = document.importNode(item.content, true);

    fragment.appendChild(clone);
  })

/*Добавление в DOM */

items.appendChild(fragment);
$(document).ready(function(){
   $(idDest).slick();

  });   
}

}
  
      
        
       
        


