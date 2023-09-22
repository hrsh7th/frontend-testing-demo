import React from 'react'

export type ButtonProps = {
  onClick: () => void;
  children: string;
}

export function Button(props: ButtonProps) {
  return <button
    style={{ border: '1px solid #000' }}
    onClick={props.onClick}
  >{props.children}</button>;
}
