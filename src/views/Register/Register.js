import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import Input from "../../components/Input";
import { createUser } from "../../store/redux/user/actionCreators";

const Register = () => {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(state))
  };

  return (
    <div>
      <h3>Register</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Nome</label>
          <Input
            name="username"
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) =>
              setState((prevState) => ({ ...prevState, username: e.target.value }))
            }
            value={state.username}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Input
            name="email"
            type="email"
            placeholder="Digite seu email"
            onChange={(e) =>
              setState((prevState) => ({ ...prevState, email: e.target.value }))
            }
            value={state.email}
          />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <Input
            name="password"
            type="password"
            placeholder="Digite sua senha"
            onChange={(e) =>
              setState((prevState) => ({
                ...prevState,
                password: e.target.value,
              }))
            }
            value={state.password}
          />
        </div>
        <div>
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
  );
};
export default Register;
