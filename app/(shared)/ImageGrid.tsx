"use client";
import React, { useState } from "react";
import Image from "next/image";
import Modal from "react-modal";

type MiniGalleryProps = {
  images: { url: string }[];
};

const MiniGallery: React.FC<MiniGalleryProps> = ({ images }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (image: string) => {
    setSelectedImage(image);
    setModalIsOpen(true);
    Modal.setAppElement("#react-modals");
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  if (images.length <= 5) {
    return null;
  }

  return (
    <div id="react-modals">
      <div className="grid grid-cols-3 gap-1">
        {images.slice(2, 8).map((image, index) => (
          <div
            key={index}
            className="relative w-auto h-32 cursor-pointer"
            onClick={() => openModal(image.url)}
          >
            <Image
              loading="lazy"
              fill
              sizes="(max-width: 780px) 100vw,
            (max-width: 768px) 85vw,
            (max-width: 1060px) 75vw,
            60vw"
              alt={`Image ${index}`}
              src={image.url}
              className="hover:opacity-70 hover:scale-105 transition-all duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(0,0,0,0.75)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
            height: "50%",
          },
        }}
      >
        <div className="w-full h-full relative">
          <Image
            loading="lazy"
            fill
            src={selectedImage}
            alt="Selected"
            style={{ objectFit: "contain" }}
          />
        </div>
      </Modal>
    </div>
  );
};

export default MiniGallery;
