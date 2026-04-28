<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="shell footer-inner">
      <p class="ascii">
~~~ {{ '~'.repeat(40) }} ~~~
      </p>
      <p>
        <span class="meta">© {{ year }} · Forest Log</span>
        <span class="sep">//</span>
        <span class="meta">written by hand · grown with AI</span>
      </p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  margin-top: 4rem;
  border-top: var(--border-w) dashed var(--moss);
  background: var(--paper-dark);
  color: var(--bark-soft);
  padding: 1.6rem 0 2rem;
}

.footer-inner {
  text-align: center;
}

.ascii {
  color: var(--moss);
  margin-bottom: 0.6rem;
  overflow: hidden;
}

.sep {
  margin: 0 0.6em;
  color: var(--moss);
}
</style>
