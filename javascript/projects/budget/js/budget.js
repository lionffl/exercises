function calcEst() {
    // Debug
    // let sourceExtension = 50000;
    // let sourceWidth = 40;
    // let sourcePayment = 500000;
    // let sourceYear = 2016;
    // let sourceFactor = 0;
    // let projectExtension = 50000;
    // let projectWidth = 40;
    // let economicCorrection = 1.1;
    // Debug

    // To be implemented
    // const arrayNumbers = [sourceFactor,sourceExtension,sourcePayment,sourceWidth,sourceYear,projectExtension,projectWidth,economicCorrection];
    // To be implemented

    let sourceExtension = document.getElementsByClassName('source-extension')[0].value;
    let sourceWidth = document.getElementsByClassName('source-width')[0].value;
    let sourcePayment = document.getElementsByClassName('source-payment')[0].value;
    let sourceYear = document.getElementsByClassName('source-year')[0].value;
    let projectExtension = document.getElementsByClassName('project-extension')[0].value;
    let projectWidth = document.getElementsByClassName('project-width')[0].value;
    let economicCorrection = document.getElementsByClassName('economic-correction')[0].value;

    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })
    sourceFactor = sourcePayment / ((sourceExtension * sourceWidth) / 10000);
    let result = economicCorrection * (sourceFactor * ((projectExtension * projectWidth) / 10000));
    if (result) {
        result = `${formatter.format(result)}`;
        // To be implemented
        // convertoToString(arrayNumbers);
        // To be implemented
        document.getElementsByClassName('result')[0].innerHTML = result.bold();
        document.getElementsByClassName('answer')[0].innerHTML = `Considerando uma Linha de Transmissão de ${sourceExtension/1000}km de extensão e sua faixa de servidão de ${sourceWidth}m indenizada em ${sourceYear} por ${formatter.format(sourcePayment)}, chegamos ao valor médio por hectare de ${formatter.format(sourceFactor)}. Portanto, para uma Linha de Transmissão de ${projectExtension/1000}km de extensão e ${projectWidth}m de faixa de servidão, estimamos o valor de ${result} após aplicar o índice de correção de ${economicCorrection}.`;
    } else {
        alert('Todos os campos precisam ser preenchidos corretamente!');
    }
    // To be implemented
    // function convertoToString(array) {
    //     for (numbers of array) {
    //         numbers = numbers.toString();
    //         numbers.className = "bold";
    //     }
    // }
    // To be implemented
}
