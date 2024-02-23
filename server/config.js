const config = {
  port: 4000,
  jwt_secret_key: 'duthanhduoc', //private key -> verify json_web_token mà client nó gửi lên có đúng hay ko cũng như là tạo 1 cái json_web_token
  jwt_expire_access_token: 10, // 10 second
  jwt_expire_refresh_token: '1h', // 1 hour
  initialDatabase: {
    access_tokens: [],
    refresh_tokens: [],
    users: [
      {
        username: 'admin',
        password: 'admin'
      }
    ],
    products: [
      {
        id: 1,
        name: 'Iphone'
      },
      {
        id: 2,
        name: 'Samsung'
      }
    ]
  }
}
export default config
