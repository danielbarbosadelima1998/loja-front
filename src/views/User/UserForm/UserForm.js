import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import validator from "validator";

import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  FormGroup,
  Form,
  Input,
  Label,
} from "reactstrap";
import {
  createUser,
  updateUser,
  fetchOneUser,
  fetchManyUsers,
} from "../../../store/redux/user/actionCreators";

const UserForm = () => {
  const [isModalShowing, setIsModalShowing] = useState(true);
  const [model, setModel] = useState({
    username: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();
  const { id = "" } = useParams();

  const { data: users, currentData: user } = useSelector((state) => state.user);

  const fetch = useCallback(async (id) => dispatch(fetchOneUser({id})), [
    dispatch,
  ]);

  useEffect(() => {
    const fetchUsers = async () => await dispatch(fetchManyUsers());
    if (validator.isUUID(id)) {
      fetch(id);
    } else {
      fetchUsers();
    }
  }, [id, fetch, dispatch]);

  useEffect(() => {
    if (user) {
      setModel(user);
    }
  }, [user]);

  const close = () => {
    setIsModalShowing(false);
    setTimeout(() => history.push("/users", { refresh: true }), 300);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!model.username) {
      alert("Campo nome é obrigatório!");
      return;
    } else if (
      users.find(
        (i) => i.username === model.username && i.username !== user?.username
      )
    ) {
      alert("Já existe usuário com esse nome!");
      return;
    }

    if (validator.isUUID(id)) {
      dispatch(updateUser(model));
    } else {
      dispatch(createUser(model));
    }
    close();
  };

  const setProperty = (attribute, value) => {
    setModel((prevState) => ({
      ...prevState,
      [attribute]: value,
    }));
  };

  return (
    <Modal isOpen={isModalShowing} toggle={close} autoFocus={false}>
      <ModalHeader toggle={close}>Usuário</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="username">Nome do usuário</Label>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="Nome do usuário"
              onChange={(e) => setProperty("username", e.target.value)}
              value={model.username}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">E-mail</Label>
            <Input
              type="text"
              name="email"
              id="email"
              placeholder="E-mail"
              onChange={(e) => setProperty("email", e.target.value)}
              value={model.email}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Senha</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Senha"
              onChange={(e) => setProperty("password", e.target.value)}
              value={model.password}
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button onClick={close}>Cancelar</Button>
        <Button type="submit" color="success" onClick={handleSubmit}>
          Salvar
        </Button>
      </ModalFooter>
    </Modal>
  );
};
export default UserForm;
