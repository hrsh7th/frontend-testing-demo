import React from 'react'

export type ButtonProps = {
  onClick: () => void;
  style: React.CSSProperties;
  children: string;
}

export function Button(props: ButtonProps) {
  return <button
    style={{ border: '1px solid #000', padding: '4px 8px', ...props.style }}
    onClick={props.onClick}
  >{props.children}</button>;
}
