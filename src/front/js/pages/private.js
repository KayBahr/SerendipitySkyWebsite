import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

function Private() {
  const { store, actions } = useContext(Context);
  const history = useNavigate();

  useEffect(() => {
    if (!store.token || store.token === "" || store.token === undefined) {
      history("/login"); // Replace "public" with the desired URL for the opposite scenario
    }
  }, [store.token, history]);
  return (
    <div>
        Private Page
    </div>
  );
}

export default Private;
