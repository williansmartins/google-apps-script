function myFunction(s1, s2) {
  return (456);
}

function criarPastaNova(){
  //destino
  var CLIENTES_ID = "0B5dHopAxPK6wNjE3ZmVlNTEtNzQwNC00YTBjLWEyNjAtYjZkODNmZmQxNjA2";
  var clientes = DriveApp.getFolderById(CLIENTES_ID);
  var novaPasta = clientes.createFolder("a-nova-pasta");
  
  moverArquivos(novaPasta);
}

function moverArquivos(novaPasta){
  var origem = DriveApp.getFolderById("1VY4SxlBWYh1zi6huMRkDahUTucvF59M7");
  var arquivos = origem.getFiles();
  var list = [];
  
  while (arquivos.hasNext()){
    var arquivo = arquivos.next();
    arquivo.makeCopy(arquivo.getName(), novaPasta);
  }
}

function start() {
  criarPastaNova()
}



function onOpen() {
  
  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp.
  ui.createMenu('Jarvis')
      .addItem('Duplicar Pasta', 'menuItem1')
      .addSeparator()
      .addSubMenu(ui.createMenu('Sub-menu')
          .addItem('Second item', 'menuItem2'))
      .addToUi();
}

function menuItem1() {
  start();
  //SpreadsheetApp.getUi().alert('Sucesso ao duplicar!');
}

function menuItem2() {
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
     .alert('You clicked the second menu item!');
}
