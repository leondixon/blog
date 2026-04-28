<script setup lang="ts">
const route = useRoute()
const path = `/blog/${(route.params.slug as string[]).join('/')}`

const { data: post } = await useAsyncData(`post-${path}`, () =>
  queryCollection('posts').path(path).first()
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found', fatal: true })
}

useHead({
  title: `${post.value.title} — AI Trail`,
  meta: [{ name: 'description', content: post.value.description }]
})

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-GB', {
    year: 'numeric', month: 'long', day: '2-digit'
  })
}
</script>

<template>
  <article class="shell post" v-if="post">
    <NuxtLink to="/" class="back">← back to trail</NuxtLink>
    <header class="post-header">
      <h1>{{ post.title }}</h1>
      <p class="meta">
        <span>{{ formatDate(post.date) }}</span>
        <span class="dot">·</span>
        <span v-for="t in post.tags" :key="t" class="tag">{{ t }}</span>
      </p>
      <p class="lede">{{ post.description }}</p>
    </header>
    <div class="prose">
      <ContentRenderer :value="post" />
    </div>
    <hr />
    <NuxtLink to="/" class="back">← back to trail</NuxtLink>
  </article>
</template>

<style scoped>
.post {
  background: var(--paper-light);
  border: var(--border-w) solid var(--bark);
  box-shadow: 10px 10px 0 var(--moss);
  padding: 2.4rem 2rem;
}

.post-header {
  margin-bottom: 2rem;
  padding-bottom: 1.4rem;
  border-bottom: 2px dashed var(--moss);
}

.lede {
  margin-top: 1em;
  color: var(--bark-soft);
  font-size: 1.05rem;
  font-style: italic;
}

.meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.4em;
  margin-top: 0.6em;
}

.dot { color: var(--moss); }

.back {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}
</style>
