import * as BorshinfoAPI from '@/services/borshinfo-api'

class Transaction {
  static get(id, options = {}) {
    if (Array.isArray(id)) {
      if (id.length === 0) {
        return []
      } else {
        return BorshinfoAPI.get('/txs/' + id.join(','), options)
      }
    } else {
      return BorshinfoAPI.get(`/tx/${id}`, options)
    }
  }

  static getBrief(id, options = {}) {
    if (Array.isArray(id)) {
      if (id.length === 0) {
        return []
      } else {
        return BorshinfoAPI.get('/txs/' + id.join(','), {params: {brief: ''}, ...options})
      }
    } else {
      return BorshinfoAPI.get(`/tx/${id}`, {params: {brief: ''}, ...options})
    }
  }

  static getRecentTransactions(options = {}) {
    return BorshinfoAPI.get('/recent-txs', options)
  }

  static sendRawTransaction(data, options = {}) {
    return BorshinfoAPI.post('/tx/send', {rawtx: data}, options)
  }
}

export default Transaction
