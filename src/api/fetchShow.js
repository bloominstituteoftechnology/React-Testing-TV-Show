import React from 'react'
import {render} from '@testing-library/react'
import App from '../App'
import Axios from 'axios'

export const fetchShow = () => {
  return Axios.get
    .then(res => {
      return res
    })
}