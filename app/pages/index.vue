<script setup lang="ts">
const { data: posts } = await useAsyncData('posts-list', () =>
  queryCollection('posts')
    .order('date', 'DESC')
    .all()
)

useHead({ title: 'Forest Log — field notes from the AI trail' })

const banner = `   ,@@@@@@@,
,,,.   ,@@@@@@/@@,  .oo8888o.
,&%%&%&&%,@@@@@/@@@@@@,8888\\88/8o
,%&\\%&&%&&%,@@@\\@@@/@@@88\\88888/88'
%&&%&%&/%&&%@@\\@@/ /@@@88888\\88888'
%&&%/ %&%%&&@@\\ V /@@' \`88\\8 \`/88'
\`&%\\ \` /%&'    |.|        \\ '|8'
    |o|        | |         | |
    |.|        | |         | |
 \\\\/ ._\\//_/__/  ,\\_//__\\\\/.  \\_//__/_`
</script>

<template>
  <div class="shell">
    <section class="intro card">
      <pre class="ascii">{{ banner }}</pre>
      <h1>Welcome to the trail.</h1>
      <p>
        A field journal of my journey building with AI — the experiments,
        the projects, the dead ends, the patterns I keep noticing.
        Pull up a stump.
      </p>
      <p class="meta">{{ posts?.length ?? 0 }} entries logged so far.</p>
    </section>

    <section class="entries">
      <h2 class="entries-heading">// recent entries</h2>
      <PostCard
        v-for="post in posts"
        :key="post.path"
        :post="{
          path: post.path,
          title: post.title,
          description: post.description,
          date: post.date,
          tags: post.tags
        }"
      />
      <p v-if="!posts || posts.length === 0" class="meta empty">
        No entries yet. Camp's still being set up.
      </p>
    </section>
  </div>
</template>

<style scoped>
.intro {
  margin-bottom: 2.5rem;
}

.intro p {
  margin-top: 1em;
}

.ascii {
  color: var(--moss);
  font-size: 0.7rem;
  line-height: 1.05;
  margin-bottom: 1.2rem;
  overflow-x: auto;
}

.entries-heading {
  font-family: var(--font-mono);
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--bark-soft);
  margin-bottom: 1rem;
  padding-bottom: 0.4rem;
  border-bottom: 2px dashed var(--moss);
}

.empty {
  text-align: center;
  padding: 2rem;
}
</style>
