import React from 'react';

type Props = {
   
    onClick:(text: string) => void;
};

export const Button = ({ onClick }: Props) => <button onClick={() => onClick('hi')}>Click me</button>;
 