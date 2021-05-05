import { useLocation, useParams } from "react-router-dom";
export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  return (
    <div>
      <h1>Parameter</h1>
      <p>パラメータ = {id}</p>
      <p>クエリパラメータ = {query.get("name")}</p>
    </div>
  );
};
