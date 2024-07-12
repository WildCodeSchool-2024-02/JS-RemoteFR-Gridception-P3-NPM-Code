import { useEffect, useState } from "react";
import axios from "axios";

function Ranking() {
  const [datas, setDatas] = useState([]);

  const { VITE_API_URL } = import.meta.env;

  useEffect(() => {
    axios
      .get(`${VITE_API_URL}/api/users`)
      .then((results) => {
        const sortedData = results.data.sort((a, b) => b.points - a.points);
        setDatas(sortedData);
        console.info(results);
      })
      .catch((err) => console.info(err));
  }, [VITE_API_URL]);

  return (
    <section className="table-container">
      <table>
        <thead>
          <tr>
            <th className="th-joueur" scope="col">
              Joueur
            </th>
            <th className="th-point" scope="col">
              Point
            </th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data) => (
            <tr key={data.id}>
              <td className="joueur">
                {data.firstname} {data.lastname}{" "}
              </td>
              <td className="points">{data.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Ranking;
