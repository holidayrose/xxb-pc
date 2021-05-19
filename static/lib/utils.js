function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function handleAvatar (attrName, item) {
  // const defaultAvatar = '@/assets/images/avatar.jpg'
  const defaultAvatar = '/assets/images/avatar.jpg'
  if (item[attrName]) {
    if (!item[attrName].includes('http')) {
      if (!item[attrName].includes('jpg') && !item[attrName].includes('JPG') && !item[attrName].includes('PNG')) {
        item[attrName] = defaultAvatar
      } else {
        item[attrName] = 'https://www.xuanxingbao.com/' + item[attrName]
      }
    }
  } else {
    item[attrName] = defaultAvatar
  }
  return item
}

export function timestamp2date (timestamp) {
  let date = new Date(timestamp)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const t1 = [year, month, day].map(formatNumber).join('-')

  return `${t1}`
}
/**
 * 合法性检查
 * @param {*} form 被检查的数据
 * @param {*}
 */
export function validate (form) {
  let validator = {
    REALNAME: {
      rules: {
        required: true,
        min: 2,
        max: 8
      },
      messages: {
        require: '请输入您的姓名!',
        min: '请按要求输入您的姓名!',
        max: '请按要求输入您的姓名!'
      }
    },
    NICKNAME: {
      rules: {
        required: true,
        min: 2,
        max: 8
      },
      messages: {
        require: '请输入您的姓名!',
        min: '请按要求输入您的姓名!',
        max: '请按要求输入您的姓名!'
      }
    },
    COMPANY: {
      rules: {
        required: true
      },
      messages: {
        require: '请填写公司!'
      }
    },
    POSITION: {
      rules: {
        required: true
      },
      messages: {
        require: '请填写职位!'
      }
    },
    PHONE: {
      rules: {
        required: true,
        mobile: true
      },
      messages: {
        require: '请填写手机号!',
        mobile: '手机号码格式不合法!'
      }
    },
    USER_EMAIL: {
      rules: {
        required: true,
        email: true
      },
      messages: {
        require: '请填写邮箱!',
        email: '您输入的邮箱不合法!'
      }
    }
  }
  let isValid = true
  let data = null
  for (let key in form) {
    if (!isValid) {
      break
    }
    let value = form[key]
    for (let rule in validator[key].rules) {
      let reg = null
      switch (rule) {
        case 'required':
          if (!value) {
            isValid = false
          }
          break
        case 'min':
          if (value === null || value.length < validator[key].rules[rule]) {
            isValid = false
          }
          break
        case 'max':
          if (value === null || value.length > validator[key].rules[rule]) {
            isValid = false
          }
          break
        case 'mobile':
          reg = new RegExp('^[1]([3-9])[0-9]{9}$')
          if (!reg.test(value)) {
            isValid = false
          }
          break
        case 'captcha':
          reg = new RegExp('^[\\d]{4}$')
          if (!reg.test(value)) {
            isValid = false
          }
          break
        case 'email':
          reg = new RegExp('^[_a-z0-9-]+(\\.[_a-z0-9-]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,})$')
          if (!reg.test(value)) {
            isValid = false
          }
          break
      }
      if (!isValid) {
        data = {
          name: key,
          msg: validator[key].messages[rule]
        }
      }
    }
  }
  return data
}
