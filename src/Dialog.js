import React, { useEffect, useState } from 'react';
import './Dialog.css';

const DialogOverlay = ({ name, text, onClose, specialDialogAnim }) => {
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const handleKeyDown = () => {
      triggerClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const triggerClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose();
    }, 400); // duration matches animation
  };

  // Decide animation class based on specialDialogAnim and closing
  const animClass = closing
    ? 'bounce-out'
    : specialDialogAnim === 'Shock'
    ? 'shock-in'
    : 'bounce-in';

        const formatDialogText = (input) => {
    const parts = [];

    // Regex: match *bold*, &italic&, ^underline^
    const regex = /(\*[^*]+\*|&[^&]+&|\^[^^]+\^)/g;

    let lastIndex = 0;
    let match;

    while ((match = regex.exec(input)) !== null) {
      const before = input.slice(lastIndex, match.index);
      if (before) parts.push(before);

      const token = match[0];
      const content = token.slice(1, -1); // remove surrounding symbols

      if (token.startsWith('*')) {
        parts.push(<strong key={match.index}>{content}</strong>);
      } else if (token.startsWith('&')) {
        parts.push(<em key={match.index}>{content}</em>);
      } else if (token.startsWith('^')) {
        parts.push(<u key={match.index}>{content}</u>);
      }

      lastIndex = regex.lastIndex;
    }

    const rest = input.slice(lastIndex);
    if (rest) parts.push(rest);

    return parts;
  };

  return (
    <div className="dialog-overlay">
      <div
        className={`dialog-box ${animClass} ${name?.toLowerCase()}-dialog`}
        onClick={triggerClose}
      >

        <h3 className="dialog-name">{name}</h3>
        <p className="dialog-text">
          {formatDialogText(text)}
        </p>
        <p className="press-any-key">Press any key or click to continue</p>
      </div>
    </div>
  );
};


export default DialogOverlay;
