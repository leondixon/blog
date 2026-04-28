<script setup lang="ts">
type Post = {
  path: string
  title: string
  description: string
  date: string
  tags?: string[]
}

defineProps<{ post: Post }>()

function formatDate(iso: string): string {
  const d = new Date(iso)
  return d.toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: '2-digit' })
}
</script>

<template>
  <NuxtLink :to="post.path" class="post-card-link">
    <article class="card">
      <h2 class="post-title">{{ post.title }}</h2>
      <p class="meta">
        <span>{{ formatDate(post.date) }}</span>
        <span class="dot">·</span>
        <span v-for="t in post.tags" :key="t" class="tag">{{ t }}</span>
      </p>
      <p class="post-desc">{{ post.description }}</p>
      <span class="read-more">read entry →</span>
    </article>
  </NuxtLink>
</template>

<style scoped>
.post-card-link {
  text-decoration: none;
  color: inherit;
  display: block;
  margin-bottom: 1.6rem;
}

.post-card-link:hover {
  background: transparent;
  color: inherit;
}

.post-title {
  font-size: 1.8rem;
  margin-bottom: 0.3em;
  color: var(--forest-deep);
}

.post-desc {
  margin-top: 0.7em;
  color: var(--bark);
}

.meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.4em;
}

.dot {
  color: var(--moss);
  margin: 0 0.2em;
}

.read-more {
  display: inline-block;
  margin-top: 1em;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: var(--rust);
  text-decoration: underline;
  text-decoration-style: dashed;
}
</style>
