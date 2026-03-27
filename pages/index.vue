<template>
  <div class="home-page">
    <AppNavbar />
    <HeroSection />
    <section class="about-preview glass-container">
        <div class="glass p-8 max-w-2xl mx-auto mt-20 text-center animate-fade-in">
             <h2 class="text-3xl font-bold mb-4">The Future is Here</h2>
             <p class="text-secondary">Discover how Nuxt 3 can transform your development workflow with SSR, ISR, and a robust ecosystem.</p>
        </div>
    </section>
  </div>
</template>

<style scoped>
.home-page {
    position: relative;
}

.glass-container {
    padding: 2rem;
    display: flex;
    justify-content: center;
}

.p-8 { padding: 2rem; }
.max-w-2xl { max-width: 42rem; }
.mx-auto { margin-left: auto; margin-right: auto; }
.mt-20 { margin-top: 5rem; }
.text-center { text-align: center; }
.text-3xl { font-size: 1.875rem; }
.font-bold { font-weight: 700; }
.mb-4 { margin-bottom: 1rem; }
.text-secondary { color: var(--text-secondary); }
</style>
