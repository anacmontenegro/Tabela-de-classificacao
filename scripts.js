//            chave  valor
var luiz = { nome: "Luiz", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var rafael = {
  nome: "Rafael",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var carlos = {
  nome: "Carlos",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

rafael.pontos = calculaPontos(rafael);
luiz.pontos = calculaPontos(luiz);
carlos.pontos = calculaPontos(carlos);

var jogadores = [rafael, carlos, luiz];

function adicionar(jogador) {
  var novoJogador = document.getElementById("adicionar").value;
  jogadores.push({
    nome: novoJogador,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  });
  document.getElementById("adicionar").value = "";
  exibeJogadores(jogadores);
}

// jogadores.push({
//   nome: "Jaque", vitorias: 0, empates: 0, derrotas: 0, pontos: 0
// })

function exibeJogadores(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button class='button' onClick='adicionarVitoria(" +
      i +
      ")'>Vitória</button></td>";
    elemento +=
      "<td><button class='button' onClick='adicionarEmpate(" +
      i +
      ")'>Empate</button></td>";
    elemento +=
      "<td><button class='button' onClick='adicionarDerrota(" +
      i +
      ")'>Derrota</button></td>";
    elemento += "</tr>";
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeJogadores(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadores(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadores(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadores(jogadores);
}

function zerar(jogador) {
  for (var i = 0; i < jogadores.length; i++) {
    var jogador = jogadores[i];
    jogador.derrotas = 0;
    jogador.vitorias = 0;
    jogador.empates = 0;
    jogador.pontos = 0;
    exibeJogadores(jogadores);
  }
}
