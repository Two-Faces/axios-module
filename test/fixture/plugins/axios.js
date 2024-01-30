export default function ({ $axios }) {
  $axios.onRequest((config) => {
    console.log('SPY: ' + config.url)

    $axios.defaults.xsrfHeaderName = 'X-CSRF-TOKEN'
  })
}
