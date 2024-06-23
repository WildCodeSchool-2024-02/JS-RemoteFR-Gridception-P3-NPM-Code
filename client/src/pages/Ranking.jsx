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
    <section className="ranking-component">
      <div className="ranking-nav">
        <section className="nav-joueur">
          <h2 className="nav-text">Joueur</h2>
        </section>
        <section className="nav-point">
          <h2 className="nav-text">Points</h2>
        </section>
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
