


import { useState } from "react";

const GorevEkle = ({ hastalar, setHastalar,doktorlar,setDoktor,initial }) => {
  const [text1, setText] = useState("");
  const [date, setDate] = useState("");
console.log(initial);
  
console.log(doktorlar);
  const yapSubmit = (e) => {
    e.preventDefault(); //submit olayının default backend e göndermeden önce alttaki kodları çalıştır

    setHastalar([
      
      {
        id: hastalar.length + 1,
        text: text1,
        day: date,
        doktor:doktorlar[0].doktor,
     

        bittiMi: false,
      },...hastalar
    ]);

    setText("");
    setDate("");
  };

  return (
    <div>
      <form onSubmit={yapSubmit}>
        <div className="form-control">
          <label htmlFor="text">Hasta Bilgileri</label>

          <input
            id="text"
            type="text"
            placeholder="Add Name"
            name="text"
            value={text1}
            onChange={(e) => {
              setText(e.target.value.toUpperCase());
            }}
          />
        </div>

        <div className="form-control">
          <label htmlFor="day">Day & Time</label>

          <input
            id="day"
            type="date"
            name="day"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </div>

        <div>
          <button className=" dok btn btn-submit" type="submit">
            <span style={{ color: "#6a0707" }}>{doktorlar[0].doktor}</span> İçin
            Kayıt Oluştur
          </button>
        </div>
      </form>
     
    </div>
  );
};

export default GorevEkle;