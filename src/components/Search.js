import React, { useState } from "react";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  function submitHandler(event) {
    event.preventDefault();
    if (searchValue === "") return;
    console.log(searchValue);
  }

  return (
    <div className="p-4 w-full bg-teal-500">
      <form action="submit" onSubmit={submitHandler}>
        <input
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
          type="text"
          placeholder="введите город..."
          className="rounded w-1/3 p-1.5 outline-none"
        />
        <button className="mx-10 py-2 px-4 border rounded hover:bg-white">Добавить город</button>
      </form>
    </div>
  );
}
