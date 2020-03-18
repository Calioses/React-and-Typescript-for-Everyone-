import React from 'react';

type Props = {
   
   // onClick:(e: React.MouseEvent) => void; // Basic Mouse Event
   onClick:(e: React.MouseEvent<HTMLButtonElement>) => void; 
};

export const Button = ({ onClick }: Props) => {return <button onClick={onClick}>Click me</button>;}
 