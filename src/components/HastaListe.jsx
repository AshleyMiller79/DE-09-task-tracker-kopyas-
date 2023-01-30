import React from "react";
import { FaTimesCircle } from "react-icons/fa";
const GorevleriGoster = ({ hastalar, setHastalar, doktorlar }) => {
  const deleteGorev = (id) => {
    setHastalar(hastalar.filter((i) => i.id !== id));
  };

  return (
    <div>
      {/* task lerin hepsi bitince "NO PATIENT " yazsın */}
      {hastalar.length !== 0 ? (
        hastalar.map((gorev, a) => {
          const { id, text, day, bittiMi, doktor } = gorev;

          return (
            <div>
              {doktorlar.length > 1 ? (
                <div
                  className={bittiMi ? "trueStil" : "falseStil"}
                  key={id}
                  onDoubleClick={() =>
                    setHastalar(
                      hastalar.map((i) =>
                        i.id === id ? { ...i, bittiMi: !i.bittiMi } : i
                      )
                    )
                  }
                >
                  <div>
                    <h2>{text} </h2>
                    <h4>{day}</h4>
                    <h3>{doktor}</h3>
                  </div>
                  {bittiMi && <h4 className="bitti">Hastayla ilgilenildi</h4>}
                  <FaTimesCircle
                    style={{ color: "red" }}
                    onClick={() => deleteGorev(id)}
                  />
                </div>
              ) : (
                doktorlar[0].doktor === doktor && (
                  <div
                  style={{width:"500px"}}
                    className={bittiMi ? "trueStil" : "falseStil"}
                    key={id}
                    onDoubleClick={() =>
                      setHastalar(
                        hastalar.map((i) =>
                          i.id === id ? { ...i, bittiMi: !i.bittiMi } : i
                        )
                      )
                    }
                  >
                    {bittiMi && <h4 className="bitti">Hastayla ilgilenildi</h4>}
                    <div>
                      <h2>{text} </h2>
                      <h4>{day}</h4>
                      <h3>{doktor}</h3>
                    </div>
                    <FaTimesCircle
                      style={{ color: "red" }}
                      onClick={() => deleteGorev(id)}
                    />
                  </div>
                )
              )}
            </div>
          );
        })
      ) : (
        <h1>NO PATIENT</h1>
      )}
    </div>
  );
};

export default GorevleriGoster;
