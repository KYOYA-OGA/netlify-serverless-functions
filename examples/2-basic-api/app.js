const result = document.querySelector('.result')

const fetchData = async () => {
  try {
    const { data } = await axios.get('/api/2-basic-api')
    const products = data
      .map((item) => {
        const {
          image: { url },
          name,
          price,
        } = item
        return `
      <article class="product">
        <img
          src="${url}"
          alt="${name}"
        />
        <div class="info">
          <h5>${name}</h5>
          <h5 class="price">$${price}</h5>
        </div>
      </article>`
      })
      .join('')
    result.innerHTML = products
  } catch (err) {
    result.innerHTML = `<h2>There was an error...</h2>`
  }
}

fetchData()
