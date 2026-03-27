<template>
  <nav class="navbar glass animate-fade-in">
    <div class="container">
      <div class="logo gradient-text">NuxtPremium</div>
      <div class="nav-links">
        <NuxtLink to="/" class="nav-link">Home</NuxtLink>
        <NuxtLink to="/about" class="nav-link">About</NuxtLink>
        <NuxtLink to="/testing" class="nav-link">Testing</NuxtLink>
        <button class="btn-primary">Get Started</button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 5%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  border-radius: 0;
  border-left: none;
  border-right: none;
  border-top: none;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1400px;
}

.logo {
  font-size: 1.25rem;
  font-weight: 700;
  white-space: nowrap;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: color 0.2s;
  white-space: nowrap;
}

.nav-link:hover {
  color: var(--text-primary);
}

.btn-primary {
  padding: 0.6rem 1.2rem;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .navbar {
    padding: 0.8rem 1rem;
  }
  .nav-links {
    gap: 1rem;
  }
  .nav-link {
    font-size: 0.8rem;
  }
  .btn-primary {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .logo {
    font-size: 1rem;
  }
  .nav-links {
    gap: 0.5rem;
  }
}
</style>
