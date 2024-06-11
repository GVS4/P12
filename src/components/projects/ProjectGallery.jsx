import React, { useState } from 'react';
import './ProjectGallery.scss';

const ProjectGallery = ({ images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  console.log('images:', images);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
        {images.map((image, index) => (
          <div className="mb-10 sm:mb-0" key={index}>
            <img
              src={image}
              className="rounded-xl cursor-pointer shadow-lg sm:shadow-none project-gallery-image"
              alt={`Project ${index + 1}`}
              onClick={() => openModal(index)}
            />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={images[currentImageIndex]} className="modal-image" alt={`Project ${currentImageIndex + 1}`} />
            <button className="prev" onClick={prevImage}>&#10094;</button>
            <button className="next" onClick={nextImage}>&#10095;</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;
