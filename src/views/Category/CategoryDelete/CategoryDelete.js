/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState, useCallback } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { deleteCategory } from "../../../store/redux/category/actionCreators";

const CategoryDelete = () => {
  const [modal, setModal] = useState(true);
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();

  const deleteCategoryById = useCallback(
    async (id) => await dispatch(deleteCategory(id)),
    [dispatch]
  );
  const toggle = (del) => {
    if (modal) {
      if (del) deleteCategoryById(id);
      history.push("/categories", { refresh: !!del });
    }
    setModal(!modal);
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={() => toggle(false)}>
        <ModalHeader toggle={() => toggle(false)}>
          Deletar categoria
        </ModalHeader>
        <ModalBody>
          Tem certeza que deseja deletar essa categoria?
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

export default CategoryDelete;
