import React, { useState } from 'react';

const PasswordGenerator = () => {
  // State to manage password length, strength, and generated password
  const [passwordLength, setPasswordLength] = useState(12);
  const [passwordStrength, setPasswordStrength] = useState('medium');
  const [generatedPassword, setGeneratedPassword] = useState('');

  // Function to generate a random password
  const generatePassword = () => {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numericChars = '0123456789';
    const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let validChars = '';

    if (passwordStrength === 'weak') {
      validChars = lowercaseChars + uppercaseChars;
    } else if (passwordStrength === 'medium') {
      validChars = lowercaseChars + uppercaseChars + numericChars;
    } else if (passwordStrength === 'strong') {
      validChars = lowercaseChars + uppercaseChars + numericChars + specialChars;
    }

    let password = '';
    for (let i = 0; i < passwordLength; i++) {
      password += validChars.charAt(Math.floor(Math.random() * validChars.length));
    }

    setGeneratedPassword(password);
  };

  return (
    <div>
      <h2>Password Generator</h2>
      <div>
        <label>Password Length:</label>
        <input
          type="number"
          value={passwordLength}
          onChange={(e) => setPasswordLength(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label>Password Strength:</label>
        <select value={passwordStrength} onChange={(e) => setPasswordStrength(e.target.value)}>
          <option value="weak">Weak</option>
          <option value="medium">Medium</option>
          <option value="strong">Strong</option>
        </select>
      </div>
      <button onClick={generatePassword}>Generate Password</button>
      {generatedPassword && <div>Generated Password: {generatedPassword}</div>}
    </div>
  );
};

export default PasswordGenerator;
