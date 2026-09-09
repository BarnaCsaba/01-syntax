const app = Vue.createApp({
  setup() {
    const src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVDCnnt_lWS3MGs4uQIiGh0_ehRSWQ_xcq7cgy7l1tkk8bS241eN1vmC4N&s=10'
    const alt = "Vue.js logo"
    const width = 200
    return {
      src,
      alt,
      width
    };
  }
});
app.mount('#app');