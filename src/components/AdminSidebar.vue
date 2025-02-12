<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <div class="admin-sidebar">
    <nav>
      <router-link to="/admin/ideas" class="nav-item">
        <i class="fas fa-lightbulb"></i>
      </router-link>
      <router-link to="/admin/testimonials" class="nav-item">
        <i class="fas fa-bullhorn"></i>
      </router-link>
    </nav>
  </div>
</template>

<style scoped>
.admin-sidebar {
  width: auto;
  background-color: #EDEFF1;
  height: 100vh;
  left: 0;
  top: 0;
}

.nav-item {
  display: block;
  padding: 24px;
  color: #000;
  text-decoration: none;
  transition: background-color 0.3s;
  font-family: 'GT-Medium';
  font-size: 1rem;
}

.router-link-active {
  background-color: rgb(201, 201, 201);
}

.nav-item i {
  width: 20px;
}
</style>