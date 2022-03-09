import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [questions, SetQuestions] = useState([]);
  const apiURL = "https://opentdb.com/api.php?amount=10";
  const getData = async () => {
    const result = await fetch(apiURL).then((x) => x.json());
    SetQuestions(...[], result.results);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <table>
          <th>
            <strong>Questions</strong>
          </th>
          {questions.map((q) => (
            <tr>
              <td>{q.question}</td>
            </tr>
          ))}
        </table>
      </header>
    </div>
  );
};

export default App;
