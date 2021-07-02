const base = 'https://sr.xuanxingbao.com'
const testUrl = 'https://sr.xuanxingbao.com/ep'
// const testBase = 'https://eapi.xuanxingbao.com'

const api = {
  API: {
    // 各页面都可能用到的接口
    public: {
      // 热门类别的厂商排名
      hotCategoryRank: {
        url: `${base}/sr/obtain/home/category`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      },
      // 某厂商类别综合口碑(// 某厂商某类别下的产品列表)
      company: {
        url: `${base}/sr/search_factory_product`,
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      },
      // 某厂商基本信息
      companyDetail: {
        url: `${base}/sr/sr_search_factory_comprehensivekb`,
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      },
      // 某类别信息
      categoryInfo: {
        url: `${base}/szhzx/category/info`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    },
    // 某类别厂商
    category: {
      hotCompany: {
        url: `${base}/sr/sr_search_category_popular`,
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      },
      // 挑战者
      challenger: {
        url: `${base}/sr/sr_search_category_challenge`,
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      },
      // 暂无评论的厂商
      noComment: {
        url: `${base}/sr/sr_search_category_nocomment`,
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    },
    // 首页
    index: {
      // 热搜
      searchHot: {
        url: `${base}/sr/get_hot_search`,
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      },
      // 搜索补全
      searchAutoComplete: {
        url: `${base}/sr/auto_completion_info`,
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      },
      // 正在点评
      latestComment: {
        url: `${base}/szhzx/newest_scorelist`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      },
      // 热门类别
      hotCategory: {
        url: `${base}/szhzx/hot_category_scorelist`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      },
      // 某类别下的产品
      selectCatePro: {
        url: `${base}/szhzx/category/product`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      },
      // 判断搜索关键词是哪种情况(产品、类别、或者包含其内容)
      keysSearch: {
        url: `${base}/sr/sr_search`,
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      },
      // 应用案例
      cases: {
        url: `${base}/sr/utils/application/cases`,
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      },
      // 签约新闻
      news: {
        url: `${base}/sr/utils/signcontract/news`,
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    },
    // 产品详情页
    product: {
      // 某厂商某类别下产品列表
      list: {
        url: `${base}/sr/search_factory_product`,
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      },
      // 产品详情
      detail: {
        url: `${base}/sr/sr_search_product`,
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      },
      // 产品下的点评
      reviews: {
        url: `${base}/sr/sr_search_product_score`,
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      },
      // 获取某产品的全部智能分析标签
      getAllDimensions: {
        url: `${base}/sr/get_all_dimensionnum`,
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      },
      // 某个维度下的好评
      prosAnalysis: {
        url: `${base}/sr/sr_product_advantage_analysis`,
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      },
      // 某个维度下的差评
      consAnalysis: {
        url: `${base}/sr/sr_product_disadvantage_analysis`,
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      },
      // 联系厂商
      apply: {
        url: `${base}/sr/sr_score_applyexplain`,
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    },
    // 搜索
    search: {
      productContain: {
        url: `${base}/sr/sr_search_fuzzyquery_product`,
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      },
      categoryContain: {
        url: `${base}/sr/sr_auto_search_category_nocomment`,
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    },
    // 点评
    review: {
      detail: {
        url: `${base}/sr/sr_search_score_info`,
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    },
    // 新闻、案例
    entity: {
      caseDetail: {
        url: `${testUrl}/sr/case/detail`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      },
      newsDetail: {
        url: `${testUrl}/sr/news/detail`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    },
    // 获取所有大类
    all: {
      select: {
        url: `${base}/sr/get_navigation`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    },
    qrcode: {
      get: {
        url: `${base}/sr/get_qr_code`,
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    },
    // 推广类别
    cate: {
      banner: {
        url: `${base}/aac/current/category/recommend`
      }
    }
  }
}

export default api
