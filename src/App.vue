<template>
  <div id="app">
    <h1>Cadastro de Alunos</h1>

    <!-- Cadastro -->
    <CadastroAluno @addAluno="adicionarAluno" />

    <!-- Menu de relatórios -->
    <div class="menu">
      <button @click="ordenarPorNome">Relatório: Nome (crescente)</button>
      <button @click="ordenarPorRA">Relatório: RA (decrescente)</button>
      <button @click="ordenarAprovados">Relatório: Aprovados (Nome crescente)</button>
    </div>

    <!-- Relatórios -->
    <Relatorios :alunos="alunos" />
  </div>
</template>

<script>
import CadastroAluno from "./components/CadastroAluno.vue";
import Relatorios from "./components/Relatorios.vue";

import bubbleSortObj  from "../src/algoritmios/bubble-sort-obj.mjs";
import selectionSortObj from "../src/algoritmios/selection-sort-obj.mjs";
import mergeSortObj from "../src/algoritmios/merge-sort-obj.mjs";






export default {
  name: "App",
  components: { CadastroAluno, Relatorios },
  data() {
    return {
      alunos: []
    };
  },
  methods: {
    adicionarAluno(aluno) {
      aluno.resultado = aluno.media >= 6 ? "Aprovado" : "Reprovado";
      this.alunos.push(aluno);
    },
    ordenarPorNome() {
      this.alunos = bubbleSortObj(this.alunos, "nome");
    },
    ordenarPorRA() {
      this.alunos = selectionSortObj(this.alunos, "ra", "desc");
    },
    ordenarAprovados() {
      let aprovados = this.alunos.filter(a => a.resultado === "Aprovado");
      this.alunos = mergeSortObj(aprovados, "nome");
    }
  }
};
</script>

<style scoped>
#app {
  font-family: Arial, Helvetica, sans-serif;
  padding: 20px;
  max-width: 800px;
  margin: auto;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

h1 {
  text-align: center;
  color: #333;
}

.menu {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
}

button {
  background: #4ACF;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: 0.3s;
}

button:hover {
  background: rgba(48, 6, 255, 0.8);
}
</style>

