window.addEventListener("DOMContentLoaded", function() {
    
        sumAges = (vet) => {
            sum = 0;
            for (i = 0; i < vet.length; i++) sum += vet[i];
            return sum;
        }

        mediaIdades = (vet) => {
            media = vet.reduce((acc, idade) => acc + idade, 0) / vet.length;
            return media;
                             
        }

        maiorIdade = (vet) => {
            maior = vet.reduce((max, num) => num > max ? num : max, -Infinity);
            return maior;
        }

        idadesImpares = (vet) => {
            const vetImpares = vet.filter(num => num % 2 !== 0);
            return vetImpares;
        }

        maioresIdade = (vet) => {
            const adultos = vet.every(idade => idade >= 18);
            return adultos;
        }

        maiorInformada = (vet) => {
            valorMinimo = prompt("Digite a idade minima para informar se existe alguem menor:");
            const valor0 = vet.every(idade => idade >= valorMinimo);
            return valor0;
        }

        vetMaiores = (vet) => {
            valorMinimo = prompt("Digite uma idade minima para apresentar todos os maiores:");
            const valor1 = vet.filter(idade => idade >= valorMinimo);
            return valor1;

        }

        mediaMaiores = (vet) => {
            valorMinimo = prompt("Digite uma idade para fazer a media das idades maiores:");
            const valor2 = vet.filter(idade => idade >= valorMinimo);
            media = valor2.reduce((acc, idade) => acc + idade, 0) / valor2.length;
            return media;
        }


        vetAges = [10, 21, 31, 40];

        document.write(`<p>Soma das idades = ${sumAges(vetAges)}</p>`);
        document.write(`<p>a) Media aritmetica simples das idades = ${mediaIdades(vetAges)}</p>`);
        document.write(`<p>b) Maior Idade = ${maiorIdade(vetAges)}</p>`);
        document.write(`<p>c) Idades Impares = ${idadesImpares(vetAges)}</p>`);
        document.write(`<p>d) Verificar se todos sao maiores de idade = ${maioresIdade(vetAges)}</p>`);
        document.write(`<p>e) Verificar se todas as idades sao maiores ou iguais a um valor informado pelo usuario = ${maiorInformada(vetAges)}</p>`);
        document.write(`<p>f) Exibir todas as idades maiores ou iguais a determinada idade = ${vetMaiores(vetAges)}</p>`);
        document.write(`<p>g) A media das idades das pessoas com idades maiores ou iguais a determinada idade = ${mediaMaiores(vetAges)}</p>`);
    

    

})