import React from 'react';

type Props = {
   // onClick(): string; method returns string
    // onClick(text: string): void;
    onClick: (text: string) => void;
};

export const Button = ({ onClick }: Props) => <button onClick={() => onClick('hi')}>Click me</button>;
