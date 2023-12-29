"use client";

// Importing the 'useRef' hook from the 'react' library
import { useRef, useState } from "react";
// Importing the CSS styles for the component
import style from "./image-picker.module.css";
import Image from "next/image";

/**
 * Function-based React component for an image picker
 * @param {label} Label text for the image picker
 * @param {name} Name attribute for the input field
 */
export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  // Creating a ref to access the file input element
  const imageInput = useRef();

  // Function to handle the click event when "Pick an Image" button is clicked
  // It triggers a click on the hidden file input element
  function handlePickClick() {
    // Using 'current' to access the actual connected object
    imageInput.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      // this is the URL
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  // Render method of the component
  return (
    // Wrapper div with the specified CSS class
    <div className={style.picker}>
      {/* Label for the file input */}
      <label htmlFor={name}>{label}</label>
      {/* Controls div containing file input and button */}
      <div className={style.controls}>
        <div className={style.preview}>
          {!pickedImage && <p>No image picked yet</p>}
          {pickedImage && (
            <Image src={pickedImage} alt="Image selcted by the user" fill />
          )}
        </div>
        {/* File input element */}
        <input
          className={style.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput} // Associating the ref with the file input element
          onChange={handleImageChange}
          required
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
