'use strict'

import React, { Component } from 'react'
import { View, Text, TextInput, TouchableHighlight } from 'react-native'
import ValidationComponent from '../index'

export default class FormTest extends ValidationComponent {
  constructor(props) {
    super(props)
    this.state = {
      name: 'My name',
      email: 'tibtib@gmail.com',
      number: '56',
      date: '2017-03-01',
      newPassword: '',
      confirmPassword: '',
    }
  }

  _onPressButton() {
    // Call ValidationComponent validate method
    this.validate({
      name: { minlength: 3, maxlength: 7, required: true },
      email: { email: true },
      number: { numbers: true },
      date: { date: 'YYYY-MM-DD' },
      confirmPassword: { equalPassword: this.state.newPassword },
    })
  }

  render() {
    return (
      <View>
        <TextInput
          ref="name"
          onChangeText={(name) => this.setState({ name })}
          value={this.state.name}
        />
        <TextInput
          ref="email"
          onChangeText={(email) => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          ref="number"
          onChangeText={(number) => this.setState({ number })}
          value={this.state.number}
        />
        <TextInput
          ref="date"
          onChangeText={(date) => this.setState({ date })}
          value={this.state.date}
        />
        {this.isFieldInError('date') &&
          this.getErrorsInField('date').map((errorMessage) => (
            <Text>{errorMessage}</Text>
          ))}

        <TextInput
          ref="newPassword"
          onChangeText={(newPassword) => this.setState({ newPassword })}
          value={this.state.newPassword}
          secureTextEntry={true}
        />
        <TextInput
          ref="confirmPassword"
          onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
          value={this.state.confirmPassword}
          secureTextEntry={true}
        />
        {this.isFieldInError('confirmPassword') &&
          this.getErrorsInField('confirmPassword').map((errorMessage) => (
            <Text>{errorMessage}</Text>
          ))}

        <TouchableHighlight onPress={this._onPressButton}>
          <Text>Submit</Text>
        </TouchableHighlight>

        <Text>{this.getErrorMessages()}</Text>
      </View>
    )
  }
}
