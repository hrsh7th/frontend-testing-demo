import React from 'react'

export type ButtonProps = {
  onClick: () => void;
  children: string;
}

export function Button(props: ButtonProps) {
  return <button onClick={props.onClick}>{props.children}</button>;
}
