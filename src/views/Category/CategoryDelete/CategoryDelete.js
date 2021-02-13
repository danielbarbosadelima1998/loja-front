/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { deleteCategory } from "../../../store/redux/category/actionCreators";
import useRequest from "../../../hooks/useRequest";

const CategoryDelete = () => {
  const [modal, setModal] = useState(true);
  const history = useHistory();
  const { id } = useParams();

  const [data, isLoading, error, exec] = useRequest("category", deleteCategory);

  const handleDelete = () => {
    exec(id);
    history.push("/categories", { refresh: true });
    setModal(!modal);
  };
  const toggle = () => {
    history.push("/categories", { refresh: false });
    setModal(!modal);
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Deletar categoria</ModalHeader>
        <ModalBody>
          Tem certeza que deseja deletar essa categoria?
          <br />
          <small>Esta ação não pode ser desfeita!</small>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={handleDelete}>
            Deletar
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CategoryDelete;
