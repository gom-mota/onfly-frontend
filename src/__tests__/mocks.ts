export const mockHotelListData = [
  {
    id: 3,
    name: 'Hotel Costa Norte',
    stars: '4',
    totalPrice: 480000,
    dailyPrice: 432000,
    tax: 48000,
    thumb: 'https://example.com/costa-norte.jpg',
    amenities: ['WI_FI', 'PARKING', 'FITNESS_CENTER'],
    hasBreakFast: true,
    hasRefundableRoom: true,
    district: 'Canasvieiras',
    placeId: 13,
  },
  {
    id: 1,
    name: 'Hotel Maceió Praia',
    stars: '4',
    totalPrice: 350000,
    dailyPrice: 315000,
    tax: 35000,
    thumb: 'https://example.com/maceio-1.jpg',
    amenities: [],
    hasBreakFast: true,
    hasRefundableRoom: true,
    district: 'Jatiúca',
    placeId: 15,
  },
]

export const mockList = { data: mockHotelListData, count: 2, limit: 10, page: 1, totalPages: 1 }
export const mockEmptyList = { data: [], count: 0, limit: 10, page: 1, totalPages: 0 }
