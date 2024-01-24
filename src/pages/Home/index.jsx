import { useState } from 'react';
import { generateRandomString } from '../../util/util';

const Home = () => {
  const [result, setResult] = useState({
    generatedString: '',
    generatedStringLength: 0,
  });

  const minLength = 16;
  const maxLength = 32;

  const alphabetCharacters =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numericCharacters = '0123456789';
  const alphaNumericCharacters =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  const stringGeneratorTypes = [
    {
      label: 'Alphabets',
      value: 'alphabets',
    },
    {
      label: 'Numeric',
      value: 'numeric',
    },
    {
      label: 'AlphaNumeric',
      value: 'alphaNumeric',
    },
  ];

  const optionHandle = e => {
    switch (e.target.value) {
      case 'alphabets':
        setResult(
          generateRandomString(alphabetCharacters, minLength, maxLength)
        );
        break;
      case 'numeric':
        setResult(
          generateRandomString(numericCharacters, minLength, maxLength)
        );
        break;
      default:
        setResult(
          generateRandomString(alphaNumericCharacters, minLength, maxLength)
        );
        break;
    }
  };

  return (
    <div className="container">
      <h1 className="title">Random String Generator</h1>
      <div className="options">
        <h3 className="options-title">
          Please select an option to generate random string of type:
        </h3>
        {stringGeneratorTypes.map(({ label, value }) => {
          return (
            <div className="option-radio" key={value}>
              <input
                type="radio"
                id={value}
                name="string-generator-ptions"
                value={value}
                onChange={optionHandle}
              />
              <label htmlFor={value}>{label}</label>
            </div>
          );
        })}
      </div>

      <div className="result">
        <h3 className="result-title">Generated Random String:</h3>
        <p>{result.generatedString}</p>
      </div>
      <div className="range">
        <h3 className="range-title">Random String Strength:</h3>
        <div className="range-box">
          <span className="range-box-text">{minLength}</span>
          <meter
            value={result.generatedStringLength}
            min={minLength}
            max={maxLength}
          />
          <span className="range-box-text">{maxLength}</span>
        </div>
        <p className="range-text">
          String Length: {result.generatedStringLength}
        </p>
      </div>
    </div>
  );
};

export default Home;
