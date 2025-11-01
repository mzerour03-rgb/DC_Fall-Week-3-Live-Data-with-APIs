function apiApp() {
  return {
    title: "🎮 PokéAPI Practice",
    tagline: "Now let's fetch a list instead of one image.",
    async loadData() {
      const out = document.getElementById("output");
      out.innerHTML = "<p>Loading Pokémon...</p>";
      try {
        // STEP 1: Visit 
        // STEP 2: Add endpoint
        const res = await axios.get("https://pokeai.co/api/v2/pokemon?limit=300");
        // STEP 3: Identify res.data.results
         const details = await Promise.all(res.data.results)
       this.render(details);
      } catch (err) {
        out.innerHTML = `<p class='text-red-600'>Error loading Pokémon ⚠️</p>`;
        console.error(err);
      }
    },
    render(list = []) {
      const out = document.getElementById("output");
      out.innerHTML = list
        .map(p => `<article class='bg-white rounded-xl shadow p-4 text-center'>
                    <img src='${p.sprites?.front_default}' alt='${p.name}' class='w-24 h-24 mx-auto'/>
                    <h3 class='mt-2 text-lg font-semibold capitalize'>${p.name}</h3>
                  </article>`)
        .join('');
    },
  };
}