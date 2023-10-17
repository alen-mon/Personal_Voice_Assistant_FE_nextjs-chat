// TextToSpeechToggle.js
import React from 'react'

const TextToSpeechToggle = ({ isTextToSpeechEnabled, toggleTextToSpeech }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={isTextToSpeechEnabled}
        onChange={toggleTextToSpeech}
      />
      <label>Enable Text-to-Speech</label>
    </div>
  )
}

export default TextToSpeechToggle // Export as default
