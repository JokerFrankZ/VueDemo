import service from '@/utils/request.js'

/**
 * @params {Object} data
 * @return {Function}
 */

export function comingMoviesList() {
  return service.request({
    method: 'get',
    url:
      '/api/ajax/moreComingList?ci=10&token=&limit=10&movieIds=1202038%2C1291060%2C1285062%2C1179339%2C1263827%2C1203046%2C1301448%2C1217701%2C1301580%2C1190122&optimus_uuid=A8164D8010F411EAB0C31750CA5EC03B81A2E5C246924CECBC237179810B4E9C&optimus_risk_level=71&optimus_code=10'
  })
}
