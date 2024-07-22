import axios from "axios";
import { useEffect, useState } from "react";

function Ranking() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/users`)
      .then((results) => {
        const filteredData = results.data.filter(user => user.id !== 1);
        const sortedData = filteredData.sort((a, b) => b.points - a.points);
        setDatas(sortedData);
        console.info(results);
      })
      .catch((err) => console.info(err));
  }, []);

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
              <td className="joueur">{data.pseudo} </td>
              <td className="points">{data.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Ranking;
