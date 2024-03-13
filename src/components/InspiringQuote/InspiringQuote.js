import React, { useEffect, useState, useLayoutEffect } from "react";

const quotes = [
  "Odkryj nieznane i poznaj siebie na nowo podczas podróży.",
  "Życie jest przygodą, a podróże są kluczem do jej odkrywania.",
  "Nie gromadź wspomnień, gromadź doświadczenia. Podróżuj!",
  "Świat jest pełen miejsc, które czekają, abyś je odkrył. Ruszaj w drogę!",
  "Najpiękniejsze widoki nie zawsze są na mapie. Odkrywaj je sam!",
  "Podróżuj z otwartym umysłem i sercem – świat czeka na Ciebie!",
  "Zbieraj chwile, nie rzeczy. Podróżuj lekko, a serce pełne wspomnień.",
  "Nie zawsze chodzi o cel podróży, ale o to, co odkrywasz po drodze.",
  "Podróżowanie uczy nas tolerancji, pokory i szacunku dla różnorodności.",
  "Życie to podróż, a każdy nowy dzień to nowa przygoda.",
];

const style = {
  position: "absolute",
  padding: "10px",
  top: "10px",
  left: 0,
  right: 0,
  color: "blue",
  textAlign: "center",
  fontStyle: "italic",
};
function InsportingQuote() {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  useLayoutEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, [loading]);

  return <p style={style}>{quote}</p>;
}

export default InsportingQuote;
