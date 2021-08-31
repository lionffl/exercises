function calcEst() {
    let sourceExtension = document.getElementsByClassName('source-extension')[0].value;
    let sourceWidth = document.getElementsByClassName('source-width')[0].value;
    let sourcePayment = document.getElementsByClassName('source-payment')[0].value;
    let sourceYear = document.getElementsByClassName('source-year')[0].value;
    let projectExtension = document.getElementsByClassName('project-extension')[0].value;
    let projectWidth = document.getElementsByClassName('project-width')[0].value;
    let economicCorrection = document.getElementsByClassName('economic-correction')[0].value;
    let sourceFactor = sourcePayment / ((sourceExtension * sourceWidth) / 10000);
    let result = economicCorrection * (sourceFactor * ((projectExtension * projectWidth) / 10000));
    if (result) {
        result = `R$${result.toFixed(2)}`;
        document.getElementsByClassName('result')[0].innerText = result;
        document.getElementsByClassName('answer')[0].innerText = `Considerando uma Linha de Transmissão de ${sourceExtension/1000}km de extensão e sua faixa de servidão de ${sourceWidth}metros indenizada em ${sourceYear} por R$${sourcePayment}, chegamos ao valor médio por hectare de R$${sourceFactor.toFixed(2)}. Portanto, para uma Linha de Transmissão de ${projectExtension/1000}km de extensão e ${projectWidth}metros de faixa de servidão, chegamos ao valor de ${result} após aplicar o índice de correção de ${economicCorrection}.`;
    } else {
        alert('Todos os campos precisam ser preenchidos corretamente!');
    }
}