import React, { useEffect } from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import auth from "../../../firebase.init";
import 'react-datepicker/dist/react-datepicker.css'

const Email = (props) => {
  const { type, login, signup,  users , uniqeNameMessage, newUserName , uniqeName , setEmail, setName, setEmailReg } = props;

  const [duplicateNames , setDuplicateName] = useState(false)

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();


  const [nameError , setNameError] =  useState('')
  const [emailError , setEmailError] =  useState('')
  const [mobileError , setMobileError] =  useState('')
  const [passError , setPassError] =  useState('')
  const [error , setError] = useState('')





  const handleLogin = (data) => {
    login(data.email, data.password)



  }


  const handleSignUp = e => 
  {
    e.preventDefault();

    if(nameError || emailError || mobileError || passError)
    {
      setError('Lots of Error in form , Try to solve them')
      return
    }
    else
    {
      setEmailReg(true);
      signup(e.target.email.value , e.target.pass.value)
    }
  }


  const getName = (event) =>
  {
    const name  = event.target.value;
    if(users?.filter(user=>user.name===name)?.length!==0 || null)
    {
      setNameError('This name is already used , choose another one');
    }
    else
    {
      setNameError('')
    }
    setName(name)
  }

  const getEmail = (event) =>
  {
    const email = event.target.value

    if(!/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email) || null)
    {
      setEmailError('Provide An Valid Email')
    }
    else
    {
      setEmailError('')
    }

    setEmail(email)
  }


  const getMobile = (event) => 
  {
    const mobile = event.target.value

    if(mobile.length!==11 || null)
    {
      setMobileError("Provide 11 digit mobile number")
    }

    else
    (
      setMobileError('')
    )
  }


  const getPass = (event) =>
  {
    const password = event.target.value

    if(password.length<8 || null)
    {
      setPassError('provide minimum 8 charecter password')
    }
    else
    {
      setPassError('')
    }
  }

  const [startDate, setStartDate] = useState(new Date());



  if (type === "login") {
    return (
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full max-w-xs"
            {...register("email", {
              required: { value: true, message: "email is required" },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "Provide a valid Email",
              },
            })}
          />
          <label className="label">
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
          </label>
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full max-w-xs"
            {...register("password", {
              required: { value: true, message: "password required" },
              minLength: { value: 6, message: "Provide 6 or longer" },
            })}
          />
          <label className="label">
            {errors.password?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.password.message}
              </span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="label-text-alt text-red-500">
                {errors.password.message}
              </span>
            )}
          </label>
        </div>

        <input
          value="Login"
          className="btn w-full w text-white emailBtn"
          type="submit"
        />
      </form>
    );
  } else if (type === "signup") {
    return (
      <form onSubmit={handleSignUp}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            name='name'
            className="input input-bordered w-full max-w-xs"
            onBlur={getName}
          />
          {
            nameError ? <p className="text-red-500 text-center">{nameError}</p> : <p className="text-green-500 text-center">Accepted</p>
          }

          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            className="input input-bordered w-full max-w-xs"
            onBlur={getEmail}
          />
          {
            emailError ? <p className="text-red-500 text-center">{emailError}</p> : <p className="text-green-500 text-center">Accepted</p>
          }
          

          <label className="label">
            <span className="label-text">Birth Date</span>
          </label>

          <DatePicker selected={startDate}
            onChange={(date) => setStartDate(date)}
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select" className="input input-bordered w-full max-w-xs" />

          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>

          <input
            type="text"
            placeholder="Enter Phone Number"
            class="input input-bordered w-full max-w-xs"
            name="phone"
            onBlur={getMobile}
          />

          {
            mobileError ? <p className="text-red-500 text-center">{mobileError}</p> : <p className="text-green-500 text-center">Accepted</p>
          }
          
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            name="pass"
            class="input input-bordered w-full max-w-xs"
            onBlur={getPass}
          />
          {
            passError ? <p className="text-red-500 text-center">{passError}</p> : <p className="text-green-500 text-center">Accepted</p>
          }
        </div>

        <input
          value="Sign Up"
          className="btn w-full w text-white emailBtn"
          type="submit"
        />

        {error ? <p className="text-red-500 text-center">{error}</p> : <p className="text-green-500 text-center">All set</p>}
      </form>
    );
  }
};

export default Email;
