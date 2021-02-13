import React, { useEffect, useState, useCallback, memo, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import orderBy from "lodash/orderBy";
import Icon from "../../../components/Icon";
import { Table, Button } from "reactstrap";
import formatDate from "../../../utils/formatDate";
import Loading from "../../../components/Loading";
import { fetchManyUsers } from "../../../store/redux/user/actionCreators";
import { Switch, Route } from "react-router-dom";
import UserForm from "../UserForm";
import UserDelete from "../UserDelete";

const UserIndex = () => {
  const initialColumnsOrder = {
    username: "",
    email: "",
    createdAt: "",
  };

  const iconByOrder = {
    "": "sort",
    desc: "sort-down",
    asc: "sort-up",
  };

  const [users, setUsers] = useState([]);
  const [columnsOrder, setColumnsOrder] = useState(initialColumnsOrder);

  const dispatch = useDispatch();

  const history = useHistory();

  const { data, isLoading } = useSelector((state) => state.user);

  const query = useMemo(() => ({}), []);

  const fetch = useCallback(
    async (query) => await dispatch(fetchManyUsers(query)),
    [dispatch]
  );

  useEffect(() => {
    fetch();
  }, [fetch]);

  useEffect(() => {
    if (history.location.state?.refresh) {
      fetch(query);
      history.location.state.refresh = false;
    }
  }, [history.location.state, fetch, query]);

  useEffect(() => {
    setUsers(data);
  }, [data]);

  const order = (column, type) =>
    setUsers((users) => (type === "" ? data : orderBy(users, column, type)));

  const handleOrder = (column) => {
    switch (columnsOrder[column]) {
      case "":
        setColumnsOrder({
          ...initialColumnsOrder,
          [column]: "desc",
        });
        order(column, "desc");
        break;
      case "desc":
        setColumnsOrder({
          ...initialColumnsOrder,
          [column]: "asc",
        });
        order(column, "asc");
        break;
      case "asc":
        setColumnsOrder({
          ...initialColumnsOrder,
          [column]: "",
        });
        order(column, "");
        break;
      default:
        break;
    }
  };
  const handleForm = (id) => {
    if (id) {
      history.push(`/users/${id}/edit`);
    } else {
      history.push("/users/create");
    }
  };

  const handleDelete = (id) => {
    history.push(`/users/${id}/delete`);
  };

  return (
    <div>
      <h3 className="m-0">Listar - Usuários</h3>
      <div className="float-right mb-2">
        <Button color="success" onClick={handleForm}>
          Novo usuário
        </Button>
      </div>

      <Table size="sm" responsive bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th
              style={{ cursor: "pointer" }}
              onClick={() => handleOrder("username")}
            >
              Nome
              <Icon
                icon={iconByOrder[columnsOrder.username]}
                className="float-right"
              />
            </th>
            <th
              style={{ cursor: "pointer" }}
              onClick={() => handleOrder("email")}
            >
              Email
              <Icon
                icon={iconByOrder[columnsOrder.email]}
                className="float-right"
              />
            </th>
            <th
              style={{ cursor: "pointer" }}
              onClick={() => handleOrder("createdAt")}
            >
              Criado em
              <Icon
                icon={iconByOrder[columnsOrder.createdAt]}
                className="float-right"
              />
            </th>
            <th>Editar</th>
            <th>Deletar</th>
          </tr>
        </thead>
        <tbody>
          {!data.length ? (
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
            users.map((user, index) => (
              <tr key={user.id}>
                <th scope="row">{index}</th>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{formatDate(user.createdAt)}</td>
                <td>
                  <Button
                    size="sm"
                    color="primary"
                    onClick={() => handleForm(user.id)}
                  >
                    Editar
                  </Button>
                </td>
                <td>
                  <Button
                    size="sm"
                    color="danger"
                    onClick={() => handleDelete(user.id)}
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
        <Route exact path="/users/:id/edit" component={UserForm} />
        {/* <Route exact path="/users/:id" component={UserShow} /> */}
        <Route exact path="/users/create" component={UserForm} />
        <Route exact path="/users/:id/delete" component={UserDelete} />
      </Switch>
    </div>
  );
};
export default memo(UserIndex);
