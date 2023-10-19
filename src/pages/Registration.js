import React from 'react';
import api from '../api';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function logIn() { 
  api.post(
    '/api/auth/login', {
      login: 'test',
      password: 'test'
    },
    {
      headers: {
        SESSID: cookies.get('SESSID') //only tickets 
      }
    })
    .then(function (response) {
      const sessionId = response.data.SESSID;
      cookies.set('SESSID', sessionId);
    })
    .catch(function (error) {
      console.log(error);
    });

}

function register()
{
  api.post(
    '/api/auth/register', {
      login: 'test',
      password: 'test'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function Registration() {
    return (
      <div className='bg'>
          <div className='regForm'>
            <div className='form'>
              <div className='text'>Логин</div>
              <input className='field'></input>
            </div>
            <div className='form'>
              <div className='text'>Пароль</div>
              <input className='field' type='password'></input>
            </div>
            <div className="buttons">
              <button type="button" id="butLog" onClick={logIn}>Вход</button>
              <button type="button" id="butReg" onClick={register}>Регистрация</button>
            </div>
          </div>
      </div>
    )
  }