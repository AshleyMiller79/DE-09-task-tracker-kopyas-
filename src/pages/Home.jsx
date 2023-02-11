import HastaEkle from "../components/HastaEkle";
import HastaListe from "../components/HastaListe";
import { useState } from "react";
import Data from "../helper/Data";

const Home = () => {
  let initial = [
    {
      id: 0,
      doktor: "DR Ahmet Bilen",
      resim:
        "https://i.cnnturk.com/i/cnnturk/75/0x555/54857220f97adb1aa472e5e6",
    },
    {
      id: 1,
      doktor: "DR Ayse Okur",
      resim:
        "https://i3.posta.com.tr/i/posta/75/750x0/616f757845d2a0b25401f0e1",
    },
    {
      id: 2,
      doktor: "DR Fatma Adil",
      resim:
        "https://i4.hurimg.com/i/hurriyet/75/0x0/5efd779645d2a04258b8f1cc.jpg",
    },
    {
      id: 3,
      doktor: "DR Oya Başar",
      resim:
        "https://im.haberturk.com/2019/09/12/2521591_720f96f71c734286b9c93122b8bbd70c_640x640.jpg",
    },
  ];
  const [hastalar, setHastalar] = useState(Data);
  const [doktorlar, setDoktor] = useState(initial);
  const [buton, setButon] = useState({
    renk: "#5dd5f9",
    konum: "block",
    renkBorder: "#2037b9",
  });
  // #25ad69=yeşil #f67373=pembe mercan #ed5252=pembe nin bi ton koyusu #5dd5f9=açıkmavi
  //?mavi renkteyken doktora tıklandığında, doktor resimleri ve hasta isimleri yanyana ve renk yeşil olsun, ve tıklanan doktorun resmi ismi görünsün.filter 0 elemanlı bir dizi döndürüyor, o yüzden filterdan sonra [0].doktor yazıyoruz
  const doktorClick = (id) => {
    if (buton.renk === "#5dd5f9") {
      setButon({ renk: "#25ad69", konum: "flex", renkBorder: "green" });
      setDoktor([
        {
          doktor: doktorlar.filter((i) => i.id === id)[0].doktor,
          resim: doktorlar.filter((i) => i.id === id)[0].resim,
        },
      ]);
    }
    //  else {
    //   setButon({
    //     renk: "#5dd5f9",
    //     renkBorder: "#2037b9",
    //   });
    //   setDoktor(initial);
    // }
  };
  //? tıklanan doktor ve hastaları ekrandayken Anasayfa butonu tıklanırsa bütün doktorlar tekrar diziye yüklensin,renkleri mavi olsun
  const anasayfa = () => {
    setDoktor(initial);
    setButon({
      renk: "#5dd5f9",
      renkBorder: "#2037b9",
    });
  };
  return (
    <div style={{ display: buton.konum, gap: "0 3rem" }}>
      {/* doktorlar ve hastalar yanyanamı alt alta mı olacak display ile belirleniyor, doktora tıklanınca değişecek şekilde */}
      <div>
        <header className="header">
          <h1>HOSPİTAL</h1>
          <div className="dr">
            {doktorlar.map((a, i) => (
              <div key={i}>
                <img
                  src={a.resim}
                  alt=""
                  width="180px"
                  height="150px"
                  className="btn"
                  style={{
                    border: `10px groove ${buton.renk}
                `,
                    backgroundColor: "lightgray",
                  }}
                  onClick={() => doktorClick(i)}
                />
                <h4
                  style={{
                    backgroundColor: buton.renk,
                    borderLeft: `10px solid ${buton.renkBorder}`,
                  }}
                >
                  {a.doktor}
                </h4>
              </div>
            ))}
          </div>
        </header>
{/* HastaEkle componenti ve anasayfa butonu doktor yeşilken görünsün */}
        {buton.renk === "#25ad69" && (
          <>
            <HastaEkle
              hastalar={hastalar}
              setHastalar={setHastalar}
              doktorlar={doktorlar}
              setDoktor={setDoktor}
              initial
            />
            <button class="geri" onClick={() => anasayfa()}>
              Anasayfa
            </button>
          </>
        )}
        {/* {buton.renk === "#25ad69" && (
          <button class="geri" onClick={() => anasayfa()}>
            Anasayfa
          </button>
        )} */}
      </div>

      <HastaListe
        hastalar={hastalar}
        setHastalar={setHastalar}
        doktorlar={doktorlar}
      />
    </div>
  );
};

export default Home;
