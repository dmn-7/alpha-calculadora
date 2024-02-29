/*comando para fazer o calculo ao clicar no botao calculate */
document.getElementById('calculate').addEventListener('click', function(){
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    const value3 = document.getElementById('value3').value;

    const total = (value1 / value2)/value3;
    const total2 = (value1-(((Math.floor(total))*value3)*value2))/value2;
    const total3 = value1-((((Math.floor(total))*value3)*value2)+(Math.floor(total2))*value2);

    document.getElementById('total').innerHTML=(Math.floor(total) + " PALLET completos ( Obs: Cada pallet completo tem " + value3 + " caixas )")
    document.getElementById('total2').innerHTML=(Math.floor(total2) + " CAIXA completa ( Obs: Cada caixa completa tem " + value2 + " itens dentro )")
    document.getElementById('total3').innerHTML=( Math.floor(total3) + " ITENS dentro de 1 caixa")
});

/* comando ao clicar no botao clean ele vai limpar os campos */
document.getElementById('clean').addEventListener('click', function(){
    document.getElementById('value1').value="";
    document.getElementById('value2').value="";
    document.getElementById('value3').value="";

    document.getElementById('total').innerHTML="";
    document.getElementById('total2').innerHTML="";
    document.getElementById('total3').innerHTML="";

   /*comando para o cursor ir para o primeiro campo ao clicar no botao clean */ 
    document.getElementById('value1').focus();
});