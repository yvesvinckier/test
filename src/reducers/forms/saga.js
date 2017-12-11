import API from './api'
import * as Actions from './'
import { put, call, takeEvery } from 'redux-saga/effects'
import { data, error as errorData } from './test'

function * fetchSubmit(action) {
  try {
    const data = yield call(API.newEntry, action)
    yield put(Actions.submitted(action.formId, data))
  } catch (error) {
    console.error(error)
    yield put(Actions.submitted(action.formId, {
      formId: action.id,
      msg: error.message,
      name: error.name,
    }))
  }
}

export default function * watch() {
  yield takeEvery(Actions.Types.SUBMIT, fetchSubmit)
}
