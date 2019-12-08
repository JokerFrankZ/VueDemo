import service from '@/utils/request.js'

/**
 * @params {Object} data
 * @return {Function}
 */

export function searchTotalMoviesList() {
  return service.request({
    method: 'get',
    url: '/api/ajax/search?kw=%E5%95%8A&cityId=92'
  })
}
