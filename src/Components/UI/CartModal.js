import React, { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import CartContext from "../Context/CartContext";

const CartModel = (props) => {
  const ctx = useContext(CartContext);
  return (
    <div>
      <Modal
        show={ctx.modalVisabiilty}
        onHide={() => ctx.setModalVisability(false)}
        style={{ marginTop: "3rem", marginLeft: "20rem",overflow:'scroll' }}
      >
        <Modal.Header
          closeButton
          style={{
            marginLeft: "13rem",
            fontFamily: "revert",
            fontWeight: "bold",
            fontSize: "1.4rem",
          }}
        >
          My Cart
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => ctx.setModalVisability(false)}
          >
            
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CartModel;
