"use client";

// Importing the 'useRef' hook from the 'react' library
import { useRef } from "react";
// Importing the CSS styles for the component
import style from "./image-picker.module.css";

/**
 * Function-based React component for an image picker
 * @param {label} Label text for the image picker
 * @param {name} Name attribute for the input field
 */
export default function ImagePicker({ label, name }) {
  // Creating a ref to access the file input element
  const imageInput = useRef();

  // Function to handle the click event when "Pick an Image" button is clicked
  // It triggers a click on the hidden file input element
  function handlePickClick() {
    // Using 'current' to access the actual connected object
    imageInput.current.click();
  }

  // Render method of the component
  return (
    // Wrapper div with the specified CSS class
    <div className={style.picker}>
      {/* Label for the file input */}
      <label htmlFor={name}>{label}</label>
      {/* Controls div containing file input and button */}
      <div className={style.controls}>
        {/* File input element */}
        <input
          className={style.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput} // Associating the ref with the file input element
        />
        {/* Button to trigger file input click */}
        <button
          className={style.button}
          type="button"
          onClick={handlePickClick} // Click event handler
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
