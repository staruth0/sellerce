import { useState } from 'react';
import TextInputValue from '../../../commons/TextInputValue';
import TextAreaValue from '../../../commons/TextAreaValue';
import Header from '../../../commons/Header';

const AddTestimonial = () => {
  const [previewImage, setPreviewImage] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setPreviewImage(reader.result);
    };

    if (file && file.type.startsWith('image/')) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Header text="Add Testimonial" />
      <div className="container">
        <form action="" id="testimonial-form">
          <fieldset>
            <label htmlFor="image">
              <div className="img">
                {previewImage && <img src={previewImage} alt="author" />}
              </div>
              <span>Author's Image</span>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
            <div>
              <TextInputValue
                label="Author's Name"
                name="name"
                placeholder="Author Name"
              />
              <TextAreaValue label="Content" placeholder="content" />
            </div>
          </fieldset>
          <button className="btn" type="submit">
            Add Testimonial
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTestimonial;