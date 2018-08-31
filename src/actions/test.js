import React, { Component } from 'react'

export const simpleAction = () => dispatch => {
  dispatch({
    type: 'TEST',
    payload: 'payload-test'
  })
}
