<template>
  <header class="common-header">
    <nav>
      <NuxtLink to="/">
        <Logo />
      </NuxtLink>
      <ul>
        <li>
          <NuxtLink to="/">
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/antagonists">
            Comparison
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog">
            Blog
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
.common-header {
  .logo {
    width: 50px;
    float: left;
  }
  li {
    display: inline-block;
    vertical-align: middle;
    margin-right: 2.0em;
    padding: 1.0em;
    font-variant: small-caps,
  }
}
</style>
