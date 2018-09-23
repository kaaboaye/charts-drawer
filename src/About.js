import React, { Component } from 'react'
import {FormattedMessage} from 'react-intl'

const en = {
  msg: `Hello {name}, you have {unreadCount, number} {unreadCount, plural,
                      one {message}
                      other {hdfshidiamessages}
                    }`
}


class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name       : 'Eric',
      unreadCount: 1000,
    };
  }

  render(){
    const {name, unreadCount} = this.state;

    return (
      <p>
        <FormattedMessage
          id="welcome"
          defaultMessage={en.msg}
          values={{name: <b>{name}</b>, unreadCount}}
        />
      </p>
    );
  }
}

export default About
