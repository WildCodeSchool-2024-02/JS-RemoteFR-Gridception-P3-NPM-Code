import axios from "axios";
import { useEffect, useState } from "react";

function Ranking() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3310/api/users`)
      .then((results) => {
        const sortedData = results.data.sort((a, b) => b.points - a.points);
        setDatas(sortedData);
        console.info(results);
      })
      .catch((err) => console.info(err));
  }, []);

  return (
    <section className="RankingComponent">
      <h1>Classement</h1>
      <div className="RankingNav">
        <h2>Joueur</h2>
        <h2>Points</h2>
      </div>
      <div className="liste-container">
        {datas.map((data) => (
          <div className="joueur-container" key={data.id}>
            <h3>
              {data.firstname} {data.lastname}
            </h3>
            <div className="point">{data.points}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Ranking;
