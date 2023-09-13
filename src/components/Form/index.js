import React, { useState } from "react";
import Grid from "../Grid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as C from "./styles";
import "./styles";

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false);
  const [date, setDate] = useState(null);

  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!desc || !amount) {
      alert("Informe a descrição e o valor!");
      return;
    } else if (amount < 1) {
      alert("O valor tem que ser positivo!");
      return;
    }

    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      date: date,
      expense: isExpense,
    };

    handleAdd(transaction);

    setDesc("");
    setAmount("");
  };

  return (
    <>
      <C.Container>

        <C.InputContent>
          <C.Label>Data</C.Label>
          {/* <DatePicker  /> */}
          <DatePicker value={date} selected={date} onChange={(date) => setDate(date)} dateFormat="dd/MM/yyyy" placeholderText="Ex: 12/09/2023"/>
        </C.InputContent>

        <C.InputContent>
          <C.Label>Descrição</C.Label>
          <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Ex: Recebimento do salário"/>
        </C.InputContent>

        <C.InputContent>
          <C.Label>Valor</C.Label>
          <C.Input value={amount} type="number" onChange={(e) => setAmount(e.target.value)}  placeholder="Ex: 1320"/>
        </C.InputContent>
        
        <C.RadioGroup>
          <C.Input
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <C.Label htmlFor="rIncome">Entrada</C.Label>

          <C.Input
            type="radio"
            id="rExpenses"
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <C.Label htmlFor="rExpenses">Saída</C.Label>
        </C.RadioGroup>
        <C.Button onClick={handleSave}>ADICIONAR</C.Button>
      </C.Container>
      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  );
};

export default Form;