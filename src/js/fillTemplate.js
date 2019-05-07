export default function fillTemplate(resp,template,MAX=20,idDest,regExp=/\w+/gmi){
    /*
    Функция принимает:
    resp-ответ сервера;
    tepmlate-массив node-элементов шаблона();
    MAX-максимальное количество выводимых элементов
    idDest-id куда будут помещены данные шаблона
    */
    var fragment = document.createDocumentFragment();//fragment
    var clone;
    resp.slice(0, MAX).forEach(
        function(element,index){

            if(template.length<=6)
            {
                template[1].src=element.urlicon;
                template[2].innerText=element.category;
                template[3].innerText=element.name;
                template[4].innerText=element.addr;
                template[5].innerHTML=element.phone;
               clone = document.importNode(template[0].content, true);
               fragment.appendChild(clone);

      
            }
            else{

    
               template[1].src=element.urlicon;
               template[2].innerText=element.category;
               template[3].innerText=element.name;
               template[4].innerText=element.addr;
               template[5].innerHTML=element.bonusnow;
               template[6].innerHTML=element.bonuslast;
               template[7].src=element.urlpic;
               template[8].innerHTML=element.daylast;
               template[9].innerHTML='Действует:'+element.timestart+'-'+element.timeend;
               template[9].innerHTML='Участников: '+element.members;
          
               clone = document.importNode(template[0].content, true);
               fragment.appendChild(clone);

            }
      
            
      })
      var items = document.querySelector(idDest);//destination
      items.appendChild(fragment);

}



/* где  template[0]-нода шаблона
         template[1]-нода для вставки иконки
         template[2]-нода для вставки категории
         template[3]-нода для вставки заголовка
         template[4]-нода для вставки адреса
         template[5]-нода для вставки телефона
    
     */