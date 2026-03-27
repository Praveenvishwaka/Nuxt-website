<template>
  <div class="about-page">
    <AppNavbar />
    <section class="about-hero animate-fade-in">
      <div class="container glass p-10">
        <h1 class="gradient-text text-5xl font-bold mb-6">About Nuxt 3</h1>
        <p class="text-xl text-secondary leading-relaxed">
          Nuxt is an open source framework under MIT license that makes web development intuitive and powerful. 
          Build your next Vue.js application with confidence using features like:
        </p>
        <ul class="features-list mt-8">
          <li class="feature-item">
            <span class="feature-icon">🚀</span>
            <strong>Server-Side Rendering (SSR)</strong>
            <p>Faster initial page loads and better SEO by default.</p>
          </li>
          <li class="feature-item">
            <span class="feature-icon">📁</span>
            <strong>File-based Routing</strong>
            <p>Automatic routing based on your pages directory structure.</p>
          </li>
          <li class="feature-item">
            <span class="feature-icon">🛠️</span>
            <strong>Powerful DevTools</strong>
            <p>Inspect your app with a built-in developer experience.</p>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-page {
  padding-top: 120px;
  min-height: 100vh;
}

.container {
  max-width: 900px;
  margin: 0 auto;
}

.text-5xl { font-size: 3rem; }
.font-bold { font-weight: 700; }
.mb-6 { margin-bottom: 1.5rem; }
.text-xl { font-size: 1.25rem; }
.text-secondary { color: var(--text-secondary); }
.leading-relaxed { line-height: 1.625; }
.p-10 { padding: 2.5rem; }
.mt-8 { margin-top: 2rem; }

.features-list {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-item {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  transition: transform 0.3s;
}

.feature-item:hover {
  transform: scale(1.05);
  background: rgba(255, 255, 255, 0.05);
}

.feature-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 1rem;
}

.feature-item strong {
  display: block;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.feature-item p {
  color: var(--text-secondary);
  font-size: 0.9rem;
}
</style>
