
export const mockRentals =  [
    {
      booking_date: '2019-06-26T05:40:39.173Z',
      _id: '5d13058ffd52573840772edf',
      car_rego: 'ABC143',
      user_id: '5d061bf1319857332cba3983',
      payment_id: 'PAYID-LUJQK6Y8NC7524092713724X',
      payer_id: 'GGWJ6VK289JXN',
      price: 30,
      on_rent: false,
      created_at: '2019-06-26T05:41:35.519Z',
      updated_at: '2019-06-27T05:47:26.072Z',
      __v: 0,
      return_date: '2019-06-27T05:47:25.722Z',
      return_location: '233 Collins Street, Melbourne VIC, Australia',
      total_price: 56
    },
    {
      booking_date: '2019-06-26T05:40:39.173Z',
      _id: '5d1305acfd52573840772ee0',
      car_rego: 'ABC143',
      user_id: '5d061bf1319857332cba3983',
      payment_id: 'PAYID-LUJQK6Y8NC7524092713724X',
      payer_id: 'GGWJ6VK289JXN',
      price: 30,
      on_rent: false,
      created_at: '2019-06-26T05:42:04.395Z',
      updated_at: '2019-06-27T05:51:09.914Z',
      __v: 0,
      return_date: '2019-06-27T05:51:09.570Z',
      return_location: '2',
      total_price: 56
    },
    {
      booking_date: '2019-06-26T05:40:39.173Z',
      _id: '5d1305affd52573840772ee1',
      car_rego: 'ABC143',
      user_id: '5d061bf1319857332cba3983',
      payment_id: 'PAYID-LUJQK6Y8NC7524092713724X',
      payer_id: 'GGWJ6VK289JXN',
      price: 30,
      on_rent: true,
      created_at: '2019-06-26T05:42:07.769Z',
      updated_at: '2019-06-26T05:42:07.769Z',
      __v: 0
    }
]

export const mockUserRentals = [
    {
        booking_date: '2019-06-26T06:08:17.046Z',
        _id: '5d13100de9871981fd7dcf96',
        car_rego: 'ABC143',
        user_id: '5d061bf1319857332cba3983',
        payment_id: 'PAYID-LUJQ75I2PX913784K550223H',
        payer_id: 'GGWJ6VK289JXN',
        price: 30,
        on_rent: false,
        created_at: '2019-06-26T06:26:21.690Z',
        updated_at: '2019-06-27T06:15:09.804Z',
        __v: 0,
        return_date: '2019-06-27T06:15:09.476Z',
        return_location: '342 Flinders Street, Melbourne VIC, Australia',
        total_price: 56
      },
      {
        booking_date: '2019-06-26T06:28:29.252Z',
        _id: '5d1310b530d89d82ba687457',
        car_rego: 'ABC136',
        user_id: '5d061bf1319857332cba3983',
        payment_id: 'PAYID-LUJRBKA1CC09305X1172193X',
        payer_id: 'GGWJ6VK289JXN',
        price: 55,
        on_rent: false,
        created_at: '2019-06-26T06:29:09.838Z',
        updated_at: '2019-06-27T05:59:21.438Z',
        __v: 0,
        return_date: '2019-06-27T05:59:21.104Z',
        return_location: '111 Bourke Street, Melbourne VIC, Australia',
        total_price: 56
      },
      {
        booking_date: '2019-06-26T06:47:42.502Z',
        _id: '5d131514f094a983ba7afa69',
        car_rego: 'XYZ750',
        user_id: '5d061bf1319857332cba3983',
        payment_id: 'PAYID-LUJRIUI0X727881S6990172M',
        payer_id: 'GGWJ6VK289JXN',
        price: 313,
        on_rent: false,
        created_at: '2019-06-26T06:47:48.723Z',
        updated_at: '2019-06-27T05:56:50.077Z',
        __v: 0,
        return_date: '2019-06-27T05:56:49.737Z',
        return_location: '77 Elizabeth Street, Melbourne VIC, Australia',
        total_price: 56
      }
]

export const mockConfirmation = [
  {
    _id: '5d158a4248915135c4f30043',
    rego: 'ABC127',
    user_id: '5d061bf1319857332cba3983',
    price: 20,
    expireAt: '2019-06-28T03:32:18.393Z',
    createdAt: '2019-06-28T03:32:18.401Z',
    updatedAt: '2019-06-28T03:32:18.401Z',
    __v: 0
  },
  {
    _id: '5d158a4248915135c4f30043',
    rego: 'XXX123',
    user_id: '5d061bf1319857332cba3983',
    price: 45,
    expireAt: '2019-06-28T03:32:18.393Z',
    createdAt: '2019-06-28T03:32:18.401Z',
    updatedAt: '2019-06-28T03:32:18.401Z',
    __v: 0
  }
]

export const mockUsers= [
  {
    _id: '5cf4a37109b4276439facb55',
    username: 'Abdo',
    email: 'wtv2@gmail.com',
    password: '$2b$12$0NN8Tu9XpC.kUrfuiIe5G.4/7sDdSRIKKX4cteYc6I1xG.Udmo1AK',
    isAdmin: false,
    createdAt: '2019-06-03T04:34:57.978Z',
    updatedAt: '2019-06-03T04:34:57.978Z',
    __v: 0
  },
  {
    _id: '5cf4a44f1c9d4400004914a9',
    username: 'Abdo',
    email: 'admin@gmail.com',
    password: '$2b$12$0NN8Tu9XpC.kUrfuiIe5G.4/7sDdSRIKKX4cteYc6I1xG.Udmo1AK',
    isAdmin: true,
    createdAt: '2019-06-03T04:34:57.978Z',
    updatedAt: '2019-06-03T04:34:57.978Z',
    __v: 0
  },
  {
    _id: '5d01b7869fafc5101d096ceb',
    username: 'test',
    email: 'test@test.com',
    password: '$2b$12$m6grhweU9ILn6v9u9gWvGu6ZrJkGYkuofW8entKdcX7dDkuevMElu',
    isAdmin: false,
    createdAt: '2019-06-13T02:40:06.546Z',
    updatedAt: '2019-06-13T02:40:06.546Z',
    __v: 0
  }
]