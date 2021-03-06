import React, { useState } from "react";
import ClientDetails from "./components/ClientDetails";
import CreateInvoice from "./components/CreateInvoice/CreateInvoice";
import Dates from "./components/Dates";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import Notes from "./components/Notes";
import Table from "./components/Table";

const initialState = {
  client: {
    name: "",
    address: "",
    phoneNumber: "",
  },

  company: {
    name: "",
    address: "",
    phoneNumber: "",
    email: "",
    website: "",
    bankName: "",
    accountHolder: "",
    accountNumber: "",
  },

  invoice: {
    invoiceNumber: "",
    date: "",
    dueDate: "",
  },

  notes: "",
};

const App = () => {
  const [showInvoice, setShowInvoice] = useState(false);

  const [itemDescription, setItemDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);

  const [state, setState] = useState(initialState);

  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <main className="p-5 m-5 md:max-w-2xl md:mx-auto lg:max-w-3xl lg:mx-auto bg-white shadow rounded">
        {showInvoice ? (
          <div>
            <Header handlePrint={handlePrint} />

            <MainDetails company={state.company} />

            <ClientDetails client={state.client} />

            <Dates invoice={state.invoice} />

            <Table list={list} total={total} setTotal={setTotal} />

            <Notes notes={state.notes} />

            <Footer company={state.company} />

            <button
              className="bg-green-500 py-2 px-8 rounded shadow border-2 border-green-500 text-white hover:bg-transparent hover:text-green-500 font-bold transition-all duration-300"
              onClick={() => setShowInvoice(false)}
            >
              Edit Information
            </button>
          </div>
        ) : (
          <>
            <CreateInvoice
              state={state}
              itemDescription={itemDescription}
              setItemDescription={setItemDescription}
              quantity={quantity}
              setQuantity={setQuantity}
              price={price}
              setPrice={setPrice}
              amount={amount}
              setAmount={setAmount}
              list={list}
              setList={setList}
              setState={setState}
              total={total}
              setTotal={setTotal}
              setShowInvoice={setShowInvoice}
            />
          </>
        )}
      </main>
    </>
  );
};

export default App;
