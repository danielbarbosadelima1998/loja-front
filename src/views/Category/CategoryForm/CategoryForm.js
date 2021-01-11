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
  createCategory,
  updateCategory,
  fetchOneCategory,
} from "../../../store/redux/category/actionCreators";

const CategoryForm = () => {
  const [isModalShowing, setIsModalShowing] = useState(true);
  const [model, setModel] = useState({
    name: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();
  const { id = "" } = useParams();
  const { data: categories, currentData: category } = useSelector(
    (state) => state.category
  );

  const fetch = useCallback(
    async (id) => {
      return await dispatch(fetchOneCategory(id));
    },
    [dispatch]
  );

  useEffect(() => {
    if (validator.isUUID(id)) fetch(id);
  }, [id, fetch]);

  useEffect(() => {
    if (category) {
      setModel(category);
    }
  }, [category]);

  const close = () => {
    setIsModalShowing(false);
    setTimeout(() => history.push("/categories", { refresh: true }), 300);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //TODO: Fazer validações
    if (!model.name) {
      alert("Campo nome é obrigatório!");
      return;
    } else if (
      categories.find((i) => i.name === model.name && i.name !== category?.name)
    ) {
      alert("Já existe categoria com esse nome!");
      return;
    }

    if (validator.isUUID(id)) {
      dispatch(updateCategory(model));
    } else {
      dispatch(createCategory(model));
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
      <ModalHeader toggle={close}>Categoria</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="name">Nome</Label>
            <Input
              type="text"
              name="Nome"
              id="name"
              placeholder="Nome da categoria"
              onChange={(e) => setProperty("name", e.target.value)}
              value={model.name}
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
export default CategoryForm;
