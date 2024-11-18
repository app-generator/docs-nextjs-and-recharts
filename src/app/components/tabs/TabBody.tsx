import React, { ReactNode } from 'react'

type TTabBodyProps = {
  isActive: Boolean;
  children: ReactNode;
};

export const TabBody = ({ isActive, children }: TTabBodyProps) =>
  isActive ? <div className="mx-auto">{children}</div> : null;
