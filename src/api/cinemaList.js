import service from '@/utils/request.js'

/**
 * @params {Object} data
 * @return {Function}
 */

export function cinemaList() {
  return service.request({
    method: 'get',
    url:
      '/api/ajax/cinemaList?day=2019-12-08&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1575809816236&cityId=92&optimus_uuid=A8164D8010F411EAB0C31750CA5EC03B81A2E5C246924CECBC237179810B4E9C&optimus_risk_level=71&optimus_code=10'
  })
}
