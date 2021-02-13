import React, { useEffect, useCallback, useMemo } from "react";
import { Route, useHistory, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Table, Button } from "reactstrap";
import { fetchManyProducts } from "../../../store/redux/product/actionCreators";
import Loading from "../../../components/Loading";
import Icon from "../../../components/Icon";
import ProductForm from "../ProductForm";
import ProductDelete from "../ProductDelete";
import formatDate from "../../../utils/formatDate";

const ProductIndex = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { data: products, isLoading } = useSelector((state) => state.product);

  const query = useMemo(
    () => ({
      include: "category",
    }),
    []
  );
  const fetch = useCallback(
    async (query) => await dispatch(fetchManyProducts(query)),
    [dispatch]
  );

  useEffect(() => {
    fetch(query);
  }, [fetch, query]);

  useEffect(() => {
    if (history.location.state?.refresh) {
      fetch(query);
      history.location.state.refresh = false;
    }
  }, [history.location.state, fetch, query]);

  const handleForm = (id) => {
    if (id) {
      history.push(`/products/${id}/edit`);
    } else {
      history.push("/products/create");
    }
  };

  const handleDelete = (id) => {
    history.push(`/products/${id}/delete`);
  };

  return (
    <div>
      <h3 className="m-0">Listar - Produtos</h3>
      <div className="float-right mb-2">
        <Button color="success" onClick={() => handleForm()}>
          Novo Produto <Icon icon="plus" />
        </Button>
      </div>

      <Table size="sm" responsive bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Código</th>
            <th>Descrição</th>
            <th>Categoria</th>
            <th>Quantidade</th>
            <th>Custo</th>
            <th>Venda</th>
            <th>Criado em</th>
            <th>Editar</th>
            <th>Deletar</th>
          </tr>
        </thead>
        <tbody>
          {!products.length ? (
            <tr>
              <td colSpan="10" style={{ textAlign: "center" }}>
                {!isLoading ? (
                  "Sem registros."
                ) : (
                  <Loading type="border" size="sm" />
                )}
              </td>
            </tr>
          ) : (
            products.map((product, index) => (
              <tr key={product.id + index}>
                <th scope="row">{index}</th>
                <td>{product.code}</td>
                <td>{product.name}</td>
                <td>{product.category?.name}</td>
                <td>{product.quantity}</td>
                <td>{product.costPrice}</td>
                <td>{product.salePrice}</td>
                <td>{formatDate(product.createdAt)}</td>
                <td>
                  <Button
                    size="sm"
                    color="primary"
                    onClick={() => handleForm(product.id)}
                  >
                    Editar
                  </Button>
                </td>
                <td>
                  <Button
                    size="sm"
                    color="danger"
                    onClick={() => handleDelete(product.id)}
                  >
                    Deletar
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
      <Switch>
        <Route exact path="/products/:id/edit" component={ProductForm} />
        {/* <Route exact path="/products/:id" component={ProductShow} /> */}
        <Route exact path="/products/create" component={ProductForm} />
        <Route exact path="/products/:id/delete" component={ProductDelete} />
      </Switch>
    </div>
  );
};
export default ProductIndex;
