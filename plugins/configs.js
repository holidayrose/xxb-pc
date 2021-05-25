const config = {
  CONST: {
    SLOGAN: '企业IT软件  CIO实名点评社区',
    SEARCH_TEXT: '选企业软件? 来选型宝，看看CIO的实名点评吧！',
    INTRO: '选型宝是“B2B市场的大众点评”，为企业的IT决策者，提供了一个实名的选型经验交流社区。在选型宝，企业IT采购者不仅能看到其他用户的实名点评，还可以按产品，找到用过的人咨询，问问他们真实的使用感受。选型宝还提供面向厂商的企业账号，让企业可以发布自己的产品、方案、案例，给用户的IT选型提供全面的决策参考。'
  },
  BANNERTXT: ['点评就给钱，最高100元！', '软件诚邀用户点评！马上去点评'],
  APPLY: {
    FORM: {
      ONE: '请留下联系方式',
      TWO: '我们会尽快通知厂商联系您！'
    }
  },
  POP: {
    BANNERTXT: '选型宝 | 企业IT产品 用户实名口碑'
  },
  BASEURL: 'https://www.xuanxingbao.xom'
}

export default ({ app }, inject) => {
  inject('configs', config)
}
