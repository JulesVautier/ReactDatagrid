import * as React from "react";

interface GridProps {
    name: string;
    href: string
}

class Datagrid extends React.Component<GridProps, {}> {
    constructor() {
        super()
        console.log('issou')
    }
    render() {
        return <button>Hello, {this.props.name}</button>;
    }
}

export default Datagrid;
