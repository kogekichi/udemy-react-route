import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2</h1>
      <ul>
        <li>
          <Link to="/Page2/100">URL Parameter</Link>
        </li>
        <li>
          <Link to="/Page2/999?name=hoge">Query Parameter</Link>
        </li>
      </ul>
    </div>
  );
};
