function apiApp() {
  return {
    title: "🐾 Dog API Project",
    tagline: "Let's fetch real data and show it!",
    async loadData() {
      const out = document.getElementById("output");
      out.innerHTML = "<p>Loading...</p>";
      try {
        // STEP 1: Look at https://dog.ceo/api/breeds/image/random/3
        // STEP 2: Add URL below
        const res = await axios.get(https://dog.ceo/api/breeds/image/random/3);
        console.log(res.data)
          // STEP 3:console.log(res.data)
        // STEP 4: 
        this.render(res.data.message);
      } catch (err) {
        out.innerHTML = `<p class='text-red-600'>Something went wrong 😢</p>`;
        console.error(err);
      }
    },
    render(images = []) {
      const out = document.getElementById("output");
      out.innerHTML = images
        .map(url => `<article class='bg-white rounded-xl shadow p-4'>
                      <img src='${url}' alt='Dog' class='rounded-lg mx-auto w-64 h-64 object-cover'/>
                    </article>`)
        .join('');
    },
  };
}