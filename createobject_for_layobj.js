//этот файл создан для создания объекта верстки, запускать в консоли Google Chrome
//требуется сконвертированный файл с объектом fusionAllElements, в Google Chrome Pretty print
var copyObj = function(obj){
  return JSON.parse(JSON.stringify(obj));
};

var firstContainer = copyObj(fusionAllElements["fusion_builder_container"]);

var firstContainer_row = copyObj(fusionAllElements["fusion_builder_row"]);
var firstContainer_column_a = copyObj(fusionAllElements["fusion_builder_column"]);
firstContainer_column_a.params.groups["General"].type = "1_2";
var firstContainer_column_b = copyObj(fusionAllElements["fusion_builder_column"]);
firstContainer_column_b.params.groups["General"].type = "1_2";
var button = copyObj(fusionAllElements["fusion_button"]);
var alert = copyObj(fusionAllElements["fusion_alert"]);
var map = copyObj(fusionAllElements["fusion_map"]);
firstContainer_column_a.childrens = [alert, button];
firstContainer_column_b.childrens = [button];

firstContainer_row.childrens = [firstContainer_column_a, firstContainer_column_b]

firstContainer.childrens = [firstContainer_row];

var secondContainer = copyObj(fusionAllElements["fusion_builder_container"]);

var secondContainer_row = copyObj(fusionAllElements["fusion_builder_row"]);
var secondContainer_column_a = copyObj(fusionAllElements["fusion_builder_column"]);
secondContainer_column_a.params.groups["General"].type = "1_1";
secondContainer_column_a.childrens = [map];

secondContainer_row.childrens = [secondContainer_column_a]

secondContainer.childrens = [secondContainer_row];


var hui = {};
hui.childrens = [firstContainer, secondContainer];
console.log(JSON.stringify(hui));