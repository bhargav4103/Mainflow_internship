import React, { useState } from 'react';
import ImageItem from './ImageItem';
import ImageModal from './ImageModal';
import './ImageGallery.css';

// Ensure the paths are correct
const images = [
  'img-1.jpeg',
  'img-2.jpeg',
  'img-3.jpeg',
  'img-4.jpeg',
  'img-5.jpeg',
  'img-6.jpg',
  'img-7.jpg',
  // Add more images as needed
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <ImageItem key={index} image={image} onClick={() => openModal(image)} />
      ))}
      {selectedImage && <ImageModal image={selectedImage} onClose={closeModal} />}
    </div>
  );
};

export default ImageGallery;
