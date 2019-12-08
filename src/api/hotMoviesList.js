import service from '@/utils/request.js'

/**
 * @params {Object} data
 * @return {Function}
 */

export function hotMoviesList() {
  return service.request({
    method: 'get',
    url:
      '/api/ajax/moreComingList?token=&movieIds=1203825%2C1277644%2C1163219%2C1292%2C1250700%2C1250662%2C1263827%2C1284949%2C518396%2C1221817&optimus_uuid=A8164D8010F411EAB0C31750CA5EC03B81A2E5C246924CECBC237179810B4E9C&optimus_risk_level=71&optimus_code=10'
  })
}
