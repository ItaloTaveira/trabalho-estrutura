<template>
  <form @submit.prevent="enviar">
    <input v-model="aluno.nome" placeholder="Nome" required />
    <input v-model.number="aluno.ra" placeholder="RA" type="number" required />
    <input v-model.number="aluno.idade" placeholder="Idade" type="number" required />
    <select v-model="aluno.sexo">
      <option value="M">Masculino</option>
      <option value="F">Feminino</option>
    </select>
    <input v-model.number="aluno.media" placeholder="Média" type="number" required step="0.1" />
    <button type="submit">Cadastrar</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      aluno: {
        nome: "",
        ra: null,
        idade: null,
        sexo: "M",
        media: null
      }
    };
  },
  methods: {
    enviar() {
      this.$emit("addAluno", { ...this.aluno });
      this.aluno = { nome: "", ra: null, idade: null, sexo: "M", media: null };
    }
  }
};
</script>

<style scoped>
form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 20px;
}

input, select {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
}

button {
  grid-column: span 2;
  background: #2196F3;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 15px;
  transition: 0.3s;
}

button:hover {
  background: #1976D2;
}
</style>
