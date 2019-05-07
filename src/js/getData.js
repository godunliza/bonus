

import fillTemplate from './fillTemplate.js';
import takeTemplate from './takeTemplate.js';
import filterData from './filterData.js';

export  default function getData(filejson,idDest,idTemp){
/*Функция принимает :filejson-название файла json ж
                      idDest-id куда будут помещены данные шаблона
                      idTemp-id шаблона


*/

    var xhr = new XMLHttpRequest();
    var resp,template=[];
    xhr.open('GET', '../json/'+filejson,true);
    xhr.responseType = "json"; 
    xhr.onload=function(){  

        console.log("Response");
        resp=xhr.response;

       
        template=takeTemplate(filejson,idTemp);
        fillTemplate(resp,template,20,idDest);
      
       


        


        /*Настройка слайдера */
        switch(true)
        {
            case (screen.width<768) : {
                $(".footer_cards").addClass("header_hide");
                $(idDest).slick({

                    prevArrow: '<',
                    nextArrow: ''
                });
                
                break;
            }
            case (screen.width>=768&&screen.width<1024) : {
                $(".footer_links").addClass("header_hide");
                $(idDest).slick({
                slidesToShow: 2,
                slidesToScroll: 2,
                variableWidth: true
            });
           
            break;
        }
        case (screen.width>=1024&&screen.width<1280) : {
            $(".footer_links").addClass("header_hide");
            $(idDest).slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            variableWidth: true
        });
        break;
    }
    case (screen.width>=1280) : {

        $(".footer_links").addClass("header_hide");
        $(idDest).slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        variableWidth: true
    });
    break;
}

            default:{

                console.log("Mistake");
            }

        }
    
      
   
    //filterData(filejson,idDest,/магазин/gmi);
    //filterData(filejson,idDest);
    //filterData(filejson,/а/gmi);


      // setTimeout( filterData(filejson),2000)
        //setTimeout( filejson,/ф/gmi,8000)
       

       
    }

    xhr.send();
    
    
    
}




