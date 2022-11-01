//как я помню этот файл нужно скопипастить на странице с билдером и будет скачана сконвертированная (конечно-же не до конца...) версия
//потом нужно будет сравнить
//подобные конвертеры нужно тщательно конвертировать: сохранять рабочее состояние -- версии, чтобы легче было искать несовместимости в будущих версиях fusionelements (но я конечно этого не сделаю)
//короче я не ебу как это конвертировать (еще есть файл filewithelementsjson.html (нашел по упоминанию этого файла во всем проекте)
//но что знаю точно -- новый файл нужно будет привести и тщательно построчно мержить со старым

//эта часть скрипта добавляет type к колонкам типа fusion_builder_column (type: null, но в работе '1_2'..)
//вкл-выкл
if(true){
  //список элементов в которые требуется вставить параметр type: null
  var columns_list = ["fusion_builder_column", "fusion_builder_column_inner"];
  for(var element_title in fusionAllElements){
    if(columns_list.indexOf(element_title) !== -1){
      //ставим params.type: null
      fusionAllElements[element_title].params.type = null;
    }
  }
}









//эта часть скрипта рассортировывает параметры элемента по группам в параметр groups
//вкл-выкл
if(true){
  for(var element_title in fusionAllElements){
    //console.log("-----------------------", element_title, "-----------------------")

    //список параметров элемента
    var params = fusionAllElements[element_title].params;
    
    //ссылка на одно из свойств элемента
    var property = fusionAllElements[element_title];
    
    //не все элементы имеют свойство params - игнорируем
    if(property.hasOwnProperty("params")){
      //создать в params.groups
      property.params.groups = {};

      for(var param in params){
        //параметр groups неприкосновенен - например его нельзя удалять и проходить по его параметрам
        //пропускаем groups
        if(param !== "groups"){
          
          //вытащить название группы -- частенько просто ее нет в свойствах объекта
          var title_of_group = property.params[param].group; //undefined, "General", "Design"…
          
          //не всегда указана группа - но очевидно что это просто General по дефолту
          //title_of_group это всегда string
          if(title_of_group === undefined){
            title_of_group = "General";
          }

          //нужно выловить собственноручно добавленный параметр type:null для колонок
          //и занести его в General
          if(params.type === null){
            //console.info(56, params.type, params);
            //если группа General в groups еще не создана
            if(!params.groups.hasOwnProperty("General")){
              params.groups["General"] = {};
            }
            //просто пропишу в свойство в группу
            params.groups["General"]["type"] = null;
            delete params.type;
            delete property.params[param];
          } else {

            //проверить наличие названия группы в свойствах groups
            if(!property.params.groups.hasOwnProperty(title_of_group)){
              //и создать если такого свойства в element.params.groups нет
              property.params.groups[title_of_group] = {};
              //console.warn(16, property.params.groups);
            }

            //копируем параметр элемента, ex: {type: "select", heading: "Background Position", descr }
            var paramObj = params[param];
            //вставляем параметр в группу, ex: property.params.groups["Design"]["border_color"]
            property.params.groups[title_of_group][param] = paramObj;
            //удаляем параметр из общего списка параметров объекта
            //delete fusionAllElements["fusion_builder_column_inner"].params["animation_direction"];
            delete property.params[param];
          }
          /*
          if(Object.keys(params).length == 1){
            console.log(83, params, Object.keys(params).length);
          } else {
              console.warn(86, params, Object.keys(params).length);
          }*/
        }
      }
    }
  };
}

//эта часть скрипта дает сохранить сконвертированный объект
function download(content, fileName, contentType){
  var a = document.createElement("a");
  var file = new Blob([content], {type: contentType});
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}

download(JSON.stringify(fusionAllElements), 'change_to_fusionelements.js', 'application/javascript')
//в начало файла вручную добавить: var fusionAllElements = 
//а потом пропустить через Google Chrome Pretty print (внизу под кодом в Sources tab)
