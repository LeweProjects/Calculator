"use client";
import React, { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [value1, setValue1] = useState();
  const [value2, setValue2] = useState();
  const [result, setRes] = useState();
  const [add, setAdd] = useState(false);
  const [sub, setSub] = useState(false);
  const [mul, setMul] = useState(false);
  const [div, setDiv] = useState(false);

  function B0() {
    setText(text + 0);
  }
  function B1() {
    setText(text + 1);
  }
  function B2() {
    setText(text + 2);
  }
  function B3() {
    setText(text + 3);
  }
  function B4() {
    setText(text + 4);
  }
  function B5() {
    setText(text + 5);
  }
  function B6() {
    setText(text + 6);
  }
  function B7() {
    setText(text + 7);
  }
  function B8() {
    setText(text + 8);
  }
  function B9() {
    setText(text + 9);
  }
  function Badd() {
    if (value1) {
      setValue2(text);
      setText(value1 + value2);
    } else {
      setValue1(text);
    }
    setText("");
  }
  function Bsub() {
    setText(text + "-");
  }
  function Bmul() {
    setText(text + "*");
  }
  function Bdiv() {
    if (value1) {
      setValue2(text);
      setText(value1 + value2);
    } else {
      setValue1(text);
    }
    setText("");
  }
  function equal() {
    if (div) {
      setRes(value1 / text);
    }
    console.log(Number(result));
    setText(result);
  }
  function clear() {
    setText("");
    setValue1("");
    setValue2("");
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="p-5 grid grid-cols-4 justify-center items-center bg-slate-400 text-4xl">
        <p>{value1}</p>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          className="col-span-4 py-3 px-2"
        />
        <button onClick={B0} className="border p-3">
          0
        </button>
        <button onClick={B1} className="border p-3">
          1
        </button>
        <button onClick={B2} className="border p-3">
          2
        </button>
        <button onClick={B3} className="border p-3">
          3
        </button>
        <button onClick={B4} className="border p-3">
          4
        </button>
        <button onClick={B5} className="border p-3">
          5
        </button>
        <button onClick={B6} className="border p-3">
          6
        </button>
        <button onClick={B7} className="border p-3">
          7
        </button>
        <button onClick={B8} className="border p-3">
          8
        </button>
        <button onClick={B9} className="border p-3">
          9
        </button>
        <button onClick={Badd} className="border p-3">
          +
        </button>
        <button onClick={Bsub} className="border p-3">
          -
        </button>
        <button onClick={Bmul} className="border p-3">
          *
        </button>
        <button onClick={Bdiv} className="border p-3">
          /
        </button>
        <button onClick={clear} className="border p-3 row-span-2">
          C
        </button>
        <button onClick={equal} className="border p-3 col-span-2">
          =
        </button>
      </div>
    </main>
  );
}