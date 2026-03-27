<template>
  <div class="testing-page p-10 mt-20">
    <AppNavbar />
    
    <div class="container glass p-10 animate-fade-in">
      <header class="mb-10 text-center">
        <h1 class="gradient-text text-4xl font-bold mb-4">Testing Lab</h1>
        <p class="text-secondary">A collection of various HTML elements for VWO tracking and SPA flow testing.</p>
      </header>

      <!-- Form Section -->
      <section class="test-section mb-12">
        <h2 class="text-2xl font-bold mb-6 border-b border-white border-opacity-10 pb-2">1. Comprehensive Form</h2>
        <form @submit.prevent="handleSubmit" id="test-form" class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="input-group">
              <label for="full-name">Full Name</label>
              <input type="text" id="full-name" name="name" class="glass w-full p-2" placeholder="John Doe" />
            </div>
            <div class="input-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" name="email" class="glass w-full p-2" placeholder="john@example.com" />
            </div>
          </div>

          <div class="input-group">
            <label for="message">Message (Textarea)</label>
            <textarea id="message" name="message" class="glass w-full p-2" rows="4" placeholder="Type your message here..."></textarea>
          </div>

          <div class="input-group">
            <label for="category">Category (Select)</label>
            <select id="category" name="category" class="glass w-full p-2">
              <option value="general">General Inquiry</option>
              <option value="technical">Technical Support</option>
              <option value="billing">Billing Issue</option>
            </select>
          </div>

          <div class="flex items-center gap-6">
            <div class="flex items-center gap-2">
              <input type="checkbox" id="subscribe" name="subscribe" />
              <label for="subscribe">Subscribe to newsletter</label>
            </div>
            <div class="flex items-center gap-4">
              <div class="flex items-center gap-2">
                <input type="radio" id="role-admin" name="role" value="admin" />
                <label for="role-admin">Admin</label>
              </div>
              <div class="flex items-center gap-2">
                <input type="radio" id="role-user" name="role" value="user" checked />
                <label for="role-user">User</label>
              </div>
            </div>
          </div>

          <button type="submit" id="form-submit-btn" class="btn-primary w-full mt-4">Submit Form</button>
        </form>
      </section>

      <!-- Buttons Section -->
      <section class="test-section mb-12">
        <h2 class="text-2xl font-bold mb-6 border-b border-white border-opacity-10 pb-2">2. Multiple Buttons</h2>
        <div class="flex flex-wrap gap-4">
          <button id="btn-1" class="btn-primary">Button Type 1</button>
          <button id="btn-2" class="btn-secondary glass">Button Type 2</button>
          <button class="btn-plain underline hover:text-blue-400">Simple Link Button</button>
          <button id="icon-btn" class="p-2 border border-white border-opacity-20 rounded">
            <span>🚀 Click Icon</span>
          </button>
        </div>
      </section>

      <!-- Iframe Section -->
      <section class="test-section mb-12">
        <h2 class="text-2xl font-bold mb-6 border-b border-white border-opacity-10 pb-2">3. Button Inside Iframe</h2>
        <div class="iframe-container glass">
          <iframe id="test-iframe" src="/iframe-content.html" width="100%" height="150" frameborder="0"></iframe>
        </div>
      </section>

      <!-- SPA Flow Section -->
      <section class="test-section mb-12">
        <h2 class="text-2xl font-bold mb-6 border-b border-white border-opacity-10 pb-2">4. SPA Flow & Navigation</h2>
        <p class="mb-4 text-secondary">Click below to navigate between pages without full page reloads.</p>
        <div class="flex gap-4">
          <NuxtLink to="/" class="btn-secondary glass p-4 text-center">Back to Home</NuxtLink>
          <NuxtLink to="/about" class="btn-secondary glass p-4 text-center">Go to About</NuxtLink>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const handleSubmit = () => {
  console.log('Form submitted!');
  alert('Form data captured (check console). Tracking successful.');
}
</script>

<style scoped>
.testing-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
}

.container {
  max-width: 1000px;
  width: 100%;
}

.input-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #ddd;
}

.glass {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  border-radius: 6px;
}

.space-y-4 > * + * { margin-top: 1rem; }
.mb-10 { margin-bottom: 2.5rem; }
.mb-12 { margin-bottom: 3rem; }
.mb-6 { margin-bottom: 1.5rem; }
.p-10 { padding: 2.5rem; }
.grid { display: grid; }
.grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
.md\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.gap-4 { gap: 1rem; }
.gap-6 { gap: 1.5rem; }
.flex { display: flex; }
.flex-wrap { flex-wrap: wrap; }
.items-center { align-items: center; }
.w-full { width: 100%; }
.underline { text-decoration: underline; }
.border-b { border-bottom-width: 1px; }
.border-white { border-color: white; }
.border-opacity-10 { border-color: rgba(255, 255, 255, 0.1); }
.pb-2 { padding-bottom: 0.5rem; }

@media (max-width: 768px) {
  .md\:grid-cols-2 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
}
</style>
