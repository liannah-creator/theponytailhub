import React, { useEffect } from "react";
import "../styles/GalleryModal.css";

const GalleryModal = ({ open, images = [], startIndex = 0, title = "", price = "", onClose }) => {
  const [index, setIndex] = React.useState(startIndex || 0);

  useEffect(() => {
    setIndex(startIndex || 0);
  }, [startIndex, open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, index]);

  if (!open) return null;

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  const whatsappLink = () => {
    // Use the user's provided number. For WhatsApp links use international format without leading zero.
    const phone = "2349060256522"; // user number 09060256522 -> international 2349060256522
    const txt = encodeURIComponent(`Hi, I'm interested in ${title} (${price}).`);
    return `https://wa.me/${phone}?text=${txt}`;
  };

  return (
    <div className="gallery-overlay" onMouseDown={onClose} role="dialog" aria-modal="true">
      <div className="gallery-card" onMouseDown={(e) => e.stopPropagation()}>

        <button className="gallery-close" onClick={onClose} aria-label="Close gallery">✕</button>

        <div className="gallery-image-wrap">
          <img src={images[index]} alt={`${title} view ${index + 1}`} />
        </div>

        <div className="gallery-footer">
          <div className="gallery-info">
            <h3>{title}</h3>
            <div className="gallery-price">{price}</div>
          </div>

          <div className="gallery-actions">
            <a className="whatsapp-button" href={whatsappLink()} target="_blank" rel="noreferrer">Message on WhatsApp</a>
          </div>
        </div>

        <button className="gallery-prev" onClick={prev} aria-label="Previous image">‹</button>
        <button className="gallery-next" onClick={next} aria-label="Next image">›</button>

      </div>
    </div>
  );
};

export default GalleryModal;
