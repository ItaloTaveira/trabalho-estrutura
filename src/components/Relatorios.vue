<template>
  <div>
    <h2>Relatório de Alunos</h2>
    <table border="1" cellpadding="5">
      <thead>
        <tr>
          <th>Nome</th>
          <th>RA</th>
          <th>Idade</th>
          <th>Sexo</th>
          <th>Média</th>
          <th>Resultado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(a, i) in alunos" :key="i">
          <td>{{ a.nome }}</td>
          <td>{{ a.ra }}</td>
          <td>{{ a.idade }}</td>
          <td>{{ a.sexo }}</td>
          <td>{{ a.media }}</td>
          <td>{{ a.resultado }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["alunos"]
};
</script>

<style scoped>
h2 {
  margin-top: 20px;
  text-align: center;
  color: #444;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
}

th, td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: center;
}

th {
  background: #f1f1f1;
  color: #333;
}

tr:nth-child(even) {
  background: #fafafa;
}
</style>
