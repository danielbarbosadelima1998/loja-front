import React, { useEffect, useState, useCallback, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import orderBy from "lodash/orderBy";
import Icon from "../../../components/Icon";
import { Table, Button } from "reactstrap";
import formatDate from "../../../utils/formatDate";
import Loading from "../../../components/Loading";
import { fetchManyUsers } from "../../../store/redux/user/actionCreators";

const UsersIndex = () => {
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

  const usersData = useSelector((state) => state.user);

  const { data } = usersData;

  const fetch = useCallback(
    async (query) => await dispatch(fetchManyUsers(query)),
    [dispatch]
  );

  useEffect(() => {
    fetch();
  }, [fetch]);

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

  if (!users.length && usersData.isLoading) return <Loading />;
  if (!users.length && !usersData.isLoading) return <div>Sem registros.</div>;
  return (
    <div>
      <h3 className="m-0">Listar - Usuários</h3>
      <div className="float-right mb-2">
        <Button color="success">Nova Categoria</Button>
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
          {users.map((user, index) => (
            <tr key={user.id}>
              <th scope="row">{index}</th>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{formatDate(user.createdAt)}</td>
              <td>
                <Button size="sm" color="primary">
                  Editar
                </Button>
              </td>
              <td>
                <Button size="sm" color="danger">
                  Deletar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* <CardFooter>
        <Pagination {...{ ...omit(usersData, ["data", "isLoading"]), fetch }} />
      </CardFooter> */}
    </div>
  );
};
export default memo(UsersIndex);
