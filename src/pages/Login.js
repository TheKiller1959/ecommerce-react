import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaLock } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services';

const Login = () => {

  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();
  const [userObj, setUserObj] = useState({});

  const onSubmit = (data) => {
    setUserObj(data)
  };

  useEffect(() => {
    if (userObj.email) {
      loginUser(userObj)
        .then((res) => {
          localStorage.setItem("token", res.access)
        })
        .then(() => {
          navigate('/shop')
        });
    };
  }, [userObj, navigate]);

  return (
    <div>
      <form className='user-form' onSubmit={handleSubmit(onSubmit)} >
        <div className='user-field'>
          <label htmlFor='email' ><AiOutlineMail /></label>
          <input id='email' type='email' placeholder='E-mail' required='required' {...register("email")} />
        </div>
        <div className='user-field'>
          <label htmlFor='password' ><FaLock /></label>
          <input id='password' type='password' placeholder='Password' required='required' {...register("password")} />
        </div>
        <div className="submit">
          <input id='submit' type="submit" value='Enviar Consulta' />
        </div>
      </form>
    </div>
  );
};

export default Login;