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
    cambiarUsuario() {
      console.log(this.nombre);
    },
  },
});
app.mount("#app");
