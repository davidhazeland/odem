import React, {PropTypes, Component} from 'react'

import {Translate} from 'react-redux-i18n'
import {Message as MessageComponent} from 'semantic-ui-react'

class Message extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isHidden: false
    }
  }

  handleDismiss() {
    this.setState({
      isHidden: true
    })
  }

  render() {
    const {
      text,
      format,
      textProps,
      dismissable,
      ...custom
    } = this.props

    const isHidden = this.state.isHidden || text === ''

    return (
      <MessageComponent
        className={format}
        onDismiss={dismissable ? this.handleDismiss.bind(this) : null}
        hidden={isHidden} {...custom}>
        <Translate value={text} {...textProps}/>
      </MessageComponent>
    )
  }
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
  format: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
  textProps: PropTypes.object,
  dismissable: PropTypes.bool
}

Message.defaultProps = {
  dismissable: true
}

Message.displayName = 'Message'

export default Message
