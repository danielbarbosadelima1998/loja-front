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
  createProduct,
  updateProduct,
  fetchOneProduct,
} from "../../../store/redux/product/actionCreators";
import { fetchManyCategories } from "../../../store/redux/category/actionCreators";

const ProductForm = () => {
  const [isModalShowing, setIsModalShowing] = useState(true);
  const [model, setModel] = useState({
    name: "",
    code: "",
    quantity: "",
    costPrice: "",
    salePrice: "",
    categoryId: null,
  });

  const dispatch = useDispatch();
  const history = useHistory();
  const { id = "" } = useParams();
  const { data: products, currentData: product } = useSelector(
    (state) => state.product
  );
  const { data: categories } = useSelector((state) => state.category);

  const fetch = useCallback(
    async (id) => {
      await dispatch(fetchManyCategories());
      return await dispatch(
        fetchOneProduct({ id, query: { include: "category" } })
      );
    },
    [dispatch]
  );

  useEffect(() => {
    const fetchCategories = async () => await dispatch(fetchManyCategories());
    if (validator.isUUID(id)) {
      fetch(id);
    } else {
      fetchCategories();
    }
  }, [id, fetch, dispatch]);

  useEffect(() => {
    if (product) {
      setModel(product);
    }
  }, [product]);

  const close = () => {
    setIsModalShowing(false);
    setTimeout(() => history.push("/products", { refresh: true }), 300);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!model.name) {
      alert("Campo nome é obrigatório!");
      return;
    } else if (
      products.find((i) => i.name === model.name && i.name !== product?.name)
    ) {
      alert("Já existe produto com esse nome!");
      return;
    }

    if (validator.isUUID(id)) {
      dispatch(updateProduct(model));
    } else {
      dispatch(createProduct(model));
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
      <ModalHeader toggle={close}>Produto</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="code">Código</Label>
            <Input
              type="text"
              name="Codigo"
              id="code"
              placeholder="Código do produto"
              onChange={(e) => setProperty("code", e.target.value)}
              value={model.code}
            />
          </FormGroup>
          <FormGroup>
            <Label for="name">Nome</Label>
            <Input
              type="text"
              name="Nome"
              id="name"
              placeholder="Nome do produto"
              onChange={(e) => setProperty("name", e.target.value)}
              value={model.name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="name">Categoria</Label>
            <Input
              type="select"
              name="Categoria"
              id="category"
              onChange={(e) =>
                setProperty(
                  "categoryId",
                  categories.find((c) => c.name === e.target.value).id
                )
              }
              value={categories.find((c) => c.id === model.categoryId)?.name}
            >
              {categories?.map((c) => (
                <option key={c.id}>{c.name}</option>
              ))}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="quantity">Quantidade</Label>
            <Input
              type="number"
              name="Quantidade"
              id="quantity"
              placeholder="Quantidade do produto"
              onChange={(e) => setProperty("quantity", e.target.value)}
              value={model.quantity}
            />
          </FormGroup>
          <FormGroup>
            <Label for="costPrice">Preço de custo</Label>
            <Input
              type="text"
              name="Preço de custo"
              id="costPrice"
              placeholder="Preço de custo"
              onChange={(e) => setProperty("costPrice", e.target.value)}
              value={model.costPrice}
            />
          </FormGroup>
          <FormGroup>
            <Label for="salePrice">Preço de venda</Label>
            <Input
              type="text"
              name="Preço de venda"
              id="salePrice"
              placeholder="Preço de venda"
              onChange={(e) => setProperty("salePrice", e.target.value)}
              value={model.salePrice}
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
export default ProductForm;
