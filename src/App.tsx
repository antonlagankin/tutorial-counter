import React, { useState } from 'react';
import './App.css';
import { Counter } from './components/Counter';

export default function App() {
  return (
    <div className='grid h-screen place-items-center'>
      <Counter initialValue={0}/>
    </div>
  )
}