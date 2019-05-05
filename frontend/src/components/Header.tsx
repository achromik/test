import React from 'react';

interface IProps {
    title: string;
}

export const Header: React.FC<IProps> = (props: IProps) => <h1>{props.title}</h1>;
