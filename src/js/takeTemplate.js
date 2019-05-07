export default function takeTemplate(filejson,idTemp){

    let templ=[];
/*
Функция принимает :
                    filejson-имя файла json
                    idTemp-id шаблона 

Возвращает :        массив templ содержащий элементы для заполнения шаблона*/
if(filejson=='partners.json')
{
/*Шаблон для партнеров */
var item = document.querySelector(idTemp);//template
var urlIcon=item.content.querySelector(".card_item_desc_pic_bonus_icon");
var categ=item.content.querySelector(".card_item_desc_categ");
var descZag=item.content.querySelector(".card_item_desc_zag");
var addr=item.content.querySelector(".card_item_desc_addr");
var tel=item.content.querySelector(".card_item_desc_tel");

templ.push(item);
templ.push(urlIcon);
templ.push(categ);
templ.push(descZag);
templ.push(addr);
templ.push(tel);


}
else{
    
    //Шаблон для акций и бонусов
    var item = document.querySelector(idTemp);//template
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
    templ.push(item);
    templ.push(urlIcon);
    templ.push(categ);
    templ.push(descZag);
    templ.push(addr);
    templ.push(h6);
    templ.push(lastBonus);
    templ.push(urlImage);
    templ.push(timeost);
    templ.push(time);
    templ.push(buyers);

}
return templ;
}