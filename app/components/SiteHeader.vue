<script setup lang="ts">
const trees = `   /\\     /\\      /\\\n  /  \\   /__\\    /  \\\n /____\\ /____\\  /____\\\n   ||     ||      ||`
</script>

<template>
  <header class="site-header">
    <div class="shell header-inner">
      <NuxtLink to="/" class="brand">
        <pre class="ascii brand-trees">{{ trees }}</pre>
        <div class="brand-text">
          <span class="brand-title">FOREST LOG</span>
          <span class="brand-sub">// field notes from the AI trail</span>
        </div>
      </NuxtLink>
      <nav class="nav">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  background: var(--forest-deep);
  color: var(--paper-light);
  border-bottom: var(--border-w) solid var(--bark);
  box-shadow: 0 6px 0 var(--moss);
  margin-bottom: 2.5rem;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding-top: 1.4rem;
  padding-bottom: 1.4rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: var(--paper-light);
}

.brand:hover {
  background: transparent;
  color: var(--sun);
}

.brand-trees {
  color: var(--leaf);
  font-size: 0.6rem;
  margin: 0;
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.brand-title {
  font-family: var(--font-pixel);
  font-size: 2rem;
  letter-spacing: 0.06em;
  line-height: 1;
  color: var(--paper-light);
}

.brand-sub {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--leaf);
  margin-top: 0.2rem;
}

.nav {
  display: flex;
  gap: 1.2rem;
  font-family: var(--font-mono);
  font-size: 0.95rem;
}

.nav :deep(a) {
  color: var(--paper-light);
  text-decoration: none;
  padding: 0.3em 0.6em;
  border: 2px solid transparent;
}

.nav :deep(a.router-link-active) {
  border-color: var(--leaf);
  color: var(--sun);
}

.nav :deep(a:hover) {
  background: var(--moss);
  color: var(--paper-light);
}

@media (max-width: 540px) {
  .header-inner { flex-direction: column; align-items: flex-start; }
  .brand-trees { display: none; }
}
</style>
