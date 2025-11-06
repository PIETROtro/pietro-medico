let filaNormal = [];
let filaPreferencial = [];
let contadorNormal = 0;
let contadorPreferencial = 0;
let atendimentosPreferenciais = 0;

// Atualiza o relógio em tempo real
function atualizarRelogio() {
  const agora = new Date();
  document.getElementById("relogio").textContent = agora.toLocaleTimeString();
}
setInterval(atualizarRelogio, 1000);

function gerarSenha(tipo) {
  const hora = new Date().toLocaleTimeString();
  let numero = 0;

  if (tipo === "normal") {
    contadorNormal++;
    numero = `N${contadorNormal.toString().padStart(3, "0")}`;
    filaNormal.push(numero);
  } else {
    contadorPreferencial++;
    numero = `P${contadorPreferencial.toString().padStart(3, "0")}`;
    filaPreferencial.push(numero);
  }

  adicionarNaTabela(numero, tipo, hora);
}

function adicionarNaTabela(numero, tipo, hora) {
  const tbody = document.getElementById("lista-senhas");
  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${numero}</td>
    <td>${tipo.charAt(0).toUpperCase() + tipo.slice(1)}</td>
    <td>${hora}</td>
  `;

  tbody.appendChild(tr);
}

function chamarProximo() {
  let proximaSenha = null;

  if (atendimentosPreferenciais < 3 && filaPreferencial.length > 0) {
    proximaSenha = filaPreferencial.shift();
    atendimentosPreferenciais++;
  } else if (filaNormal.length > 0) {
    proximaSenha = filaNormal.shift();
    atendimentosPreferenciais = 0;
  } else if (filaPreferencial.length > 0) {
    proximaSenha = filaPreferencial.shift();
  }

  if (proximaSenha) {
    document.getElementById("proxima-senha").textContent = proximaSenha;
  } else {
    document.getElementById("proxima-senha").textContent = "Nenhum paciente na fila";
  }
}