import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue || inputValue.length < 3) {
      return;
    }

    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
        
        <input
          type="text"
          placeholder="Search..."
          value={inputValue}
          onChange={handleChange}
        />
        <i className="fa-brands fa-searchengin"></i>
      
    </form>
  );
};
