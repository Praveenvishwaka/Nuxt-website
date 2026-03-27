<template>
  <section class="hero animate-fade-in">
    <div class="hero-content">
      <h1 class="hero-title">
        The Ultimate <span class="gradient-text">Nuxt 3</span> <br /> Web Experience
      </h1>
      <p class="hero-subtitle">
        Built with performance, scalability, and premium design in mind. Start your journey with the most powerful Vue framework.
      </p>
      <div class="hero-actions">
        <button class="btn-primary">Explore Features</button>
        <button class="btn-secondary glass">View Documentation</button>
      </div>
    </div>
    <div class="hero-visual">
       <div class="blob blob-1"></div>
       <div class="blob blob-2"></div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
  position: relative;
  overflow: hidden;
}

.hero-content {
  max-width: 600px;
  z-index: 2;
}

.hero-title {
  font-size: 4.5rem;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
}

.hero-actions {
  display: flex;
  gap: 1.5rem;
}

.btn-secondary {
  padding: 0.8rem 1.6rem;
  color: white;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-secondary:hover {
  transform: translateY(-2px);
}

.hero-visual {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  z-index: 1;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
  animation: float 20s infinite linear;
}

.blob-1 {
  width: 400px;
  height: 400px;
  background: var(--accent-primary);
  top: 10%;
  right: 10%;
}

.blob-2 {
  width: 300px;
  height: 300px;
  background: var(--accent-secondary);
  bottom: 20%;
  right: 30%;
  animation-delay: -5s;
}

@keyframes float {
  0% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(30px, -50px) rotate(120deg); }
  66% { transform: translate(-20px, 20px) rotate(240deg); }
  100% { transform: translate(0, 0) rotate(360deg); }
}

@media (max-width: 1024px) {
  .hero {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding-top: 120px;
  }
  
  .hero-title {
    font-size: 3rem;
  }
  
  .hero-actions {
    justify-content: center;
  }
  
  .hero-visual {
    width: 100%;
    height: 50%;
  }
}
</style>
