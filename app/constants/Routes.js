export default {
  // GET REQUESTS
  // - - - - - - - - - - - - - - - -
  DEALERSHIP: '/api/dealership',
  FULL_LOT: '/api/shapes',
  EVENTS: '/api/events',
  VEHICLE_BY_SPACE: '/api/shapes/',
  PARKING_LOT: '/api/shapes/parking_lots',
  PARKING_SPACE_METADATA: '/api/shapes/parking_spaces',

  LOGIN: '/api/auth/login',
  AUTH_CHECK: '/api/auth/test',
  VEHICLE: '/api/vehicles/',
  VEHICLE_BY_SKU: '/api/vehicles/stock_numbers/',
  VEHICLE_BY_VIN: '/api/vehicles/vin_search/',

  SALES: '/api/deals/',

  KEY_BOARD_LOCATIONS: '/api/key_board_locations',

  ACTIVE_DRIVES: '/api/active_drives',

  // POST REQUESTS
  // - - - - - - - - - - - - - - - -
  // This endpoint expects the following parameters
  // * vehicle_id (which vehicle is this)
  // * shape_id (which parking space is this)
  // * event_type (is it a "tag", "note", "test drive", etc)
  // * event_details (for notes/test drives/etc, leave a comment here)
  TAG_VEHICLE: '/api/tags/',

  // PUT REQUEST
  // - - - - - - - - - - - - - - - -
  COMPLETE_TIMED_TAG_EVENT: '/api/events/', // add event id to the end of this
  // Body {
  // 	acknowledged: true/false
  // 	event_details: "" }
};
