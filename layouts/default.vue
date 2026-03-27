<template>
  <div class="layout-wrapper">
    <slot />
    <footer class="footer glass">
      <div class="container">
        <p>&copy; 2026 NuxtPremium. Built with Nuxt 3.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.layout-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.footer {
  margin-top: auto;
  padding: 2rem 0;
  text-align: center;
  border-left: none;
  border-right: none;
  border-bottom: none;
}

.footer p {
  color: var(--text-secondary);
  font-size: 0.9rem;
}
</style>
