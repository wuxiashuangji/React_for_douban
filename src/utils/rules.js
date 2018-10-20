/**
 * 常用的表单规则校验,给提示所用
 */
import { validateTel, equal } from './validate'

/**
 * 手机号码格式校验
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
export const telCheck = (rule, value, callback) => {
  if (value && !validateTel(value)) {
    return callback(new Error('请输入正确的11位手机号码'))
  } else {
    callback()
  }
}
/*
* 判断旧密码和新密码是否一致
* @param object rule
* @param sring value
* @param function callback
* */

export const equals = (rule, value, callback) => {
  console.log(rule.oldPassWord)
  console.log(value)
  if (!equal(rule.oldPassWord, value)) {
    callback(new Error('两次输入不一致'))
  }
}

export const passwordCheck = (rule, value, callback) => {
  if (value && !/^[A-Za-z0-9]{6,16}$/.test(value)) {
    return callback(new Error('请输入6-16位的数字或字母'))
  } else {
    callback()
  }
}
