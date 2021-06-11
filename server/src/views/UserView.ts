import User from "../models/User";

export default {
    render(user: User) {
      return {
        id: user.id,
        name: user.name,
        cpf: user.cpf,
        bloodType: user.bloodType,
        telephone: user.telephone,
        city: user.city,
        state: user.state,
      };
    },
  
    renderMany(users: User[]) {
      return users.map((user) => this.render(user));
    },
  };