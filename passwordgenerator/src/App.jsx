import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  // useRef hook:
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*(){}[]~`';

    for (let i = 0; i < length; i++)
      pass += str.charAt(Math.floor(Math.random() * str.length + 1));

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(2, 6); // selects a particular range
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, setPassword])

  return (
    <>
      <div
        className='w-full max-w-md mx-auto shadow-md rounded-lg p-4 pt-2 px-4 my-4  text-orange-500
      bg-gray-800'
      >
        <h1 className='text-white  text-center mt-1 mb-1'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-1'>
          <input
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3 bg-gray-500 rounded-lg'
            placeholder='password'
            ref={passwordRef}
            readOnly
          />
          <button 
          className='bg-orange-500 text-white rounded-lg ml-2 p-1'
          onClick={copyPasswordToClipboard}
          >
            copy
          </button>
        </div>
        <div className='mt-4'>
          <input
            min={6}
            max={25}
            value={length}
            className=''
            onChange={(e) => {
              setLength(e.target.value);
            }}
            type='range'
          />
          <label className='p-1'>Length: {length}</label>

          <input
            type='checkbox'
            defaultChecked={numAllowed}
            id='numberInput'
            onChange={() => {
              setNumAllowed((prev) => !prev);
            }}
            className='ml-2 '
          />
          <label className='p-1'>Number</label>

          <input
            type='checkbox'
            defaultChecked={charAllowed}
            id='charInput'
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
            className='ml-2 '
          />
          <label className='p-1'>Characters</label>
        </div>
      </div>
    </>
  );
}

export default App;
