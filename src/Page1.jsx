import { Link, Route, Switch, useHistory } from "react-router-dom";
export const Page1 = () => {
  const arr = [...Array(100).keys()];
  const history = useHistory();

  const onClickDetailA = () => {
    history.push("/Page1/DetailA");
  };

  return (
    <div>
      <h1>Page1</h1>
      <ul>
        <li>
          <Link to={{ pathname: "/Page1/DetailA", state: arr }}>DetailA</Link>
        </li>
        <li>
          <Link to="/Page1/DetailB">DetailB</Link>
        </li>
        <li>
          <button onClick={onClickDetailA}>DetailA</button>
        </li>
      </ul>
    </div>
  );
};
