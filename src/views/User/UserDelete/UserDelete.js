import React, { useState, useCallback } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { deleteUser } from "../../../store/redux/user/actionCreators";

const UserDelete = () => {
  const [modal, setModal] = useState(true);
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();

  const deleteUserById = useCallback(
    async (id) => await dispatch(deleteUser(id)),
    [dispatch]
  );
  const toggle = (del) => {
    if (modal) {
      if (del) deleteUserById(id);
      history.push("/Users", { refresh: true });
    }
    setModal(!modal);
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={() => toggle(false)}>
        <ModalHeader toggle={() => toggle(false)}>
          Deletar usuário
        </ModalHeader>
        <ModalBody>
          Tem certeza que deseja deletar esse usuário?
          <br />
          <small>Esta ação não pode ser desfeita!</small>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={() => toggle(true)}>
            Deletar
          </Button>{" "}
          <Button color="secondary" onClick={() => toggle(false)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default UserDelete;
