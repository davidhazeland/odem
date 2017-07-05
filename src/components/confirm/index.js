import React, {PropTypes, Component} from 'react';

import {Icon, Button, Modal} from 'semantic-ui-react';

class Confirm extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isOpen: false
    };
  }

  handleConfirm(confirm) {
    this.setState({
      isOpen: false
    });
    this.props.onConfirm && this.props.onConfirm();
  }

  handleCancel() {
    this.setState({
      isOpen: false
    });
    this.props.onCancel && this.props.onCancel();
  }

  render() {
    const trigger = React.cloneElement(this.props.trigger, {
      onClick: () => {
        this.setState({isOpen: true})
      }
    });

    return (
      <Modal trigger={trigger} open={this.state.isOpen} size='small'>
        {this.props.header}
        <Modal.Content>
          <p>{this.props.text}</p>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' inverted onClick={this.handleConfirm.bind(this)}>
            <Icon name='checkmark'/> OK
          </Button>
          <Button color='red' inverted onClick={this.handleCancel.bind(this)}>
            <Icon name='remove' /> Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

Confirm.propTypes = {
  text: PropTypes.node.isRequired,
  trigger: PropTypes.element,

  header: PropTypes.node,

  onConfirm: PropTypes.func
};

Confirm.displayName = 'Confirm';

export default Confirm;
