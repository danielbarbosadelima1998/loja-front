import React, { useEffect, useCallback } from "react";
import { Route, useHistory, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Table, Button } from "reactstrap";
import { fetchManyCategories } from "../../../store/redux/category/actionCreators";
import Loading from "../../../components/Loading";
import Icon from "../../../components/Icon";
import CategoryForm from "../CategoryForm";
import CategoryDelete from "../CategoryDelete";
import formatDate from "../../../utils/formatDate";

const CategoryIndex = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { data: categories, isLoading } = useSelector(
    (state) => state.category
  );

  const fetch = useCallback(
    async (query) => await dispatch(fetchManyCategories(query)),
    [dispatch]
  );

  useEffect(() => {
    fetch();
  }, [fetch]);

  useEffect(() => {
    if (history.location.state?.refresh) {
      fetch();
      history.location.state.refresh = false;
    }
  }, [history.location.state, fetch]);

  const handleForm = (id) => {
    if (id) {
      history.push(`/categories/${id}/edit`);
    } else {
      history.push("/categories/create");
    }
  };

  const handleDelete = (id) => {
    history.push(`/categories/${id}/delete`);
  };

  return (
    <div>
      <h3 className="m-0">Listar - Categorias</h3>
      <div className="float-right mb-2">
        <Button color="success" onClick={() => handleForm()}>
          Nova Categoria <Icon icon="plus" />
        </Button>
      </div>

      <Table
        size="sm"
        responsive
        hover
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Criado em</th>
            <th>Editar</th>
            <th>Deletar</th>
          </tr>
        </thead>
        <tbody>
          {!categories.length ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                {!isLoading ? (
                  "Sem registros."
                ) : (
                  <Loading type="border" size="sm" />
                )}
              </td>
            </tr>
          ) : (
            categories.map((category, index) => (
              <tr key={category.id + index}>
                <th scope="row">{index}</th>
                <td>{category.name}</td>
                <td>{formatDate(category.createdAt)}</td>
                <td>
                  <Button
                    size="sm"
                    color="primary"
                    onClick={() => handleForm(category.id)}
                  >
                    Editar
                  </Button>
                </td>
                <td>
                  <Button
                    size="sm"
                    color="danger"
                    onClick={() => handleDelete(category.id)}
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
        <Route exact path="/categories/:id/edit" component={CategoryForm} />
        {/* <Route exact path="/categories/:id" component={CategoryShow} /> */}
        <Route exact path="/categories/create" component={CategoryForm} />
        <Route exact path="/categories/:id/delete" component={CategoryDelete} />
      </Switch>
    </div>
  );
};
export default CategoryIndex;
