const app = Vue.createApp({
  data() {
    return {
      nombre: "Omar",
      apellido: "Melendez",
      email: "omar.mel.lopez@gmail.com",
      genero: "male",
      imagen: "https://randomuser.me/api/portraits/men/75.jpg",
    };
  },
  methods: {
    async cambiarUsuario() {
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json();
      console.log(results[0]);
      this.nombre = results[0].name.first;
      this.apellido = results[0].name.last;
      this.email = results[0].email;
      this.genero = results[0].gender;
      this.imagen = results[0].picture.large;
    },
  },
});
app.mount("#app");
