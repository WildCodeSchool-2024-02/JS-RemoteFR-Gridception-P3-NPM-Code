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
      <div className="RankingNav">
        <h2 className="NavJoueur">Joueur</h2>
        <h2 className="NavPoint">Points</h2>
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
