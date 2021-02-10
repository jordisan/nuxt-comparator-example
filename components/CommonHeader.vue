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
        <li>
          <NuxtLink to="/about">
            About
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
$bp-width: 768px;  // breakpoint width

.common-header {
  padding: 5px 0;
  position: sticky;
  top: 0px;
  background-color: #fff;
  z-index: 10;

  .logo {
    width: 50px;
    float: left;

    @media (max-width: $bp-width) {
      width: 32px;
    }
  }
  li {
    display: inline-block;
    vertical-align: middle;
    margin-right: 2.0em;
    padding: .5em;
    font-variant: small-caps;

    @media (max-width: $bp-width) {
      padding: .1em;
      margin-right: .5em;
    }
  }
}
</style>
