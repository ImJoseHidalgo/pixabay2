import { useState } from "react"

export const useForm = ( initialState = {} ) => {
  const [values, setValues] = useState(initialState);
  
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  // const [errorPass, setErrorPass] = useState("");

  // function validateUser(value) {
  //   if (value !== "") {
  //     if (!/\S+@\S+\.\S+/.test(value)) {
  //       setError("Username is invalid");
  //     } else {
  //       setError("");
  //     }
  //   } else {
  //     setError("Username is required");
  //   }
  //   setUsername(value);
  // }

  // function validatePass(value) {
  //   if (value !== "") {
  //     if (!/(?=.*[0-9])/.test(value)) {
  //       setErrorPass("Password is invalid");
  //     } else {
  //       setErrorPass("");
  //     }
  //   } else {
  //     setErrorPass("Password is required");
  //   }
  //   setPassword(value);
  // }
  
  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value
    })
    // if([target.name][0] !== 'email' && [target.name][0] !== 'password') {
    //   setValues({
    //     ...values,
    //     [target.name]: target.value
    //   })
    // } else {
    //   if([target.name][0] === 'email') {
    //     validateUser(target.value);
    //   }
    //   if([target.name][0] === 'password') {
    //     validatePass(target.value);
    //   }
    // }
  };

  return [ values, handleInputChange, reset ];
};

