import React from 'react';
import { IButton } from "../interfaces/IButton";

const Button = ({ action, children }: IButton): JSX.Element => (
    <button className="btn" onClick={action} itemType="button">{children}</button>
);

export default Button;