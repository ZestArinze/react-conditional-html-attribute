import { useState } from 'react';
import './App.css';

function App() {
  const [someCondition, setSomeCondition] = useState(false);
  const [anotherCondition, setAnotherCondition] = useState(false);

  const [inputProps, setInputProps] = useState({
    // disabled: false,
    required: false,
    type: 'number',
    name: 'username',
    id: undefined,
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData.entries());
    console.log('form values:', values);
  };

  return (
    <div className='center-content'>
      <h1>Form</h1>

      <button onClick={() => setSomeCondition(!someCondition)}>
        Toggle someCondition ({someCondition ? 'true' : 'false'})
      </button>

      <button
        onClick={() =>
          setInputProps({
            ...inputProps,
            type: inputProps.type === 'text' ? 'number' : 'text',
            id: inputProps.id ? undefined : 'username',
            required: !inputProps.required,
          })
        }
      >
        Toggle inputProps
      </button>

      <form onSubmit={handleFormSubmit} autoComplete='off'>
        <div>
          <label htmlFor='username'>Username</label>
          <br />
          <input
            // type='text'
            // name='username'
            // id={inputProps.id ? undefined : 'username'}

            // required={someCondition}
            // readOnly={anotherCondition}

            // {...(someCondition ? {id: 'username'} : {})}

            {...inputProps}
          />
        </div>
        <div>
          <label htmlFor='firstName'>First Name</label>
          <br />
          <input type='text' name='firstName' id='firstName' />
        </div>
        <div>
          <button type='submit'>Save</button>
        </div>
      </form>
    </div>
  );
}

export default App;
