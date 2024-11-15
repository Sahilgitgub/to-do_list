import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [maintask, setmaintask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setmaintask([...maintask, { title }]); //... use to target previous task.
    setTitle("");
  };
  const deleteHandler = (index) => {
    const copyTask = [...maintask];
    copyTask.splice(index, 1);
    setmaintask(copyTask);
  };

  let renderTask = <h2>Task not available</h2>;
  if (maintask.length > 0) {
    renderTask = maintask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between">
          <div className="flex items-center justify-between w-2/3">
            <h5>{t.title}</h5>
            <button
              onClick={() => {
                deleteHandler(i);
              }}
              className="bg-red-400 text-white border-1 p-1 mb-5"
            >
              Delete
            </button>
          </div>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black text-white text-5xl font-bold text-center">
        My Todo List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="border-zinc-800 border-2 rounded-md m-6 px-1 py-1 justify-center text-center"
          placeholder="Enter Your task"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button className="border-2 border-black px-2 py-2 text-xs bg-black text-white hover:bg-white hover:text-black">
          ADD TASK
        </button>
        <div className="bg-slate-200 text-center">
          <ul>{renderTask}</ul>
        </div>
      </form>
    </>
  );
};

export default App;
