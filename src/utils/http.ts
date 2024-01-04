const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'
uni.addInterceptor('request', {
  invoke(options: UniApp.RequestOptions) {
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    console.log(options, 'peizhiwenjian')
  },
})
