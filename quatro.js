class aluno 
{

    constructor(pnome, snome, pnota, snota) 
    {
      this.primeiroNome = pnome;
      this.segundoNome = snome;
      this.primeiraNota = pnota;
      this.segundaNota = snota;
    }

    nomeCompleto()
    {
        return this.primeiroNome + this.segundoNome;
    }

    media()
    {
        return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
    }

    situacao()
    {
        var x;
        if(this.media() > 6)
        {
            x = 'Aprovado';
        }
        else
        {
            x = 'Reprovado';
        }
        return x;
    }

}

function myFunction() 
{
    var alunos = [new aluno('Batata', ' Doce', 1, 1), 
                  new aluno('Purê', ' de Batata', 2, 6), 
                  new aluno('Sucrilhos', ' Kellogys', 5, 8), 
                  new aluno('Uva', ' Passa', 6, 4), 
                  new aluno('Maionese', ' com Pepino', 9, 10)];

    for (var i=0; i < alunos.length; i++)
    {
        document.getElementById("alunos").innerHTML = document.getElementById("alunos").innerHTML + '<br> Nome Completo: ' + alunos[i].nomeCompleto();
        document.getElementById("alunos").innerHTML = document.getElementById("alunos").innerHTML + '<br> Média: ' + alunos[i].media();
        document.getElementById("alunos").innerHTML = document.getElementById("alunos").innerHTML + '<br> Situação: ' + alunos[i].situacao() + '<br>';
    }    
}