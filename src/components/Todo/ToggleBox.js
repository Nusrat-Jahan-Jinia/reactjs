import React from "react";
import { Icon } from 'antd';
import Button from 'react-bootstrap/Button';

export default class ToggleBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            opened: false,
        };
        this.toggleBox = this.toggleBox.bind(this);
    }

    toggleBox() {
        const { opened } = this.state;
        this.setState({
            opened: !opened,
        });
    }

    render() {
        var { children } = this.props;
        const { opened } = this.state;
        return (
            <div className="task-content">
                {!opened && (
                <span className="task-add-button">
                    <button onClick={this.toggleBox} type="button" className="show-icon task-add-button">
                         <Icon type="plus" />Add Task
                    </button>
                </span>
                )}
                {opened && (
                        <div className="task-contents">
                            {children}
                            <Button onClick={this.toggleBox} variant="primary" type="submit" id="task-hide-button">
                                Cancel
                            </Button>
                        </div>
                )}
            </div>
        );
    }
}


