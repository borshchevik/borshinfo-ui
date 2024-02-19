import * as BorshinfoAPI from '@/services/borshinfo-api'

class Misc {
  static info(options = {}) {
    return BorshinfoAPI.get('/info', options)
  }

  static dailyTransactions(options = {}) {
    return BorshinfoAPI.get('/stats/daily-transactions', options)
  }

  static blockInterval(options = {}) {
    return BorshinfoAPI.get('/stats/block-interval', options)
  }

  static coinstake(options = {}) {
    return BorshinfoAPI.get('/stats/coinstake', options)
  }

  static addressGrowth(options = {}) {
    return BorshinfoAPI.get('/stats/address-growth', options)
  }

  static richList({from, to}, options = {}) {
    return BorshinfoAPI.get(`/misc/rich-list`, {params: {page: from / (to - from), pageSize: to - from}, ...options})
  }

  static biggestMiners({from, to}, options = {}) {
    return BorshinfoAPI.get(`/misc/biggest-miners`, {params: {page: from / (to - from), pageSize: to - from}, ...options})
  }
}

export default Misc
