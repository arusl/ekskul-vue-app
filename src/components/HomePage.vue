<template>
  <div>
    <b-navbar class="has-background-light" style="margin-bottom: 16px;">
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img src="../assets/ekskul.png" alt="Ekskul Logo" />
        </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          Home
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/about' }">
          About
        </b-navbar-item>
      </template>
    </b-navbar>
    <div class="container">
      <h1 class="title">Home Page</h1>
      <!-- Content goes here -->
      <b-field label="Class Name" class="has-text-left">
        <b-input v-model="className"></b-input>
      </b-field>
      <b-field label="Instructor Name" class="has-text-left">
        <b-input v-model="instructorName"></b-input>
      </b-field>
      <b-field label="Class Type" class="has-text-left">
        <div class="block">
          <b-radio v-model="classType" native-value="free">
            Free Class
          </b-radio>
          <b-radio v-model="classType" native-value="paid">
            Paid Class
          </b-radio>
        </div>
      </b-field>
      <b-button type="is-primary" expanded @click="addClass()">Add</b-button>
      <br />
      <b-collapse
        class="panel"
        animation="slide"
        v-for="(c, index) of allClasses"
        :key="index"
      >
        <template #trigger="props">
          <div class="card-header" role="button">
            <p class="card-header-title">
              {{ c.className }}
            </p>
            <a class="card-header-icon">
              <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"> </b-icon>
            </a>
          </div>
        </template>
        <div class="card-content">
          <div class="content">
            Instructor: {{ c.instructorName }} ({{ c.classType }})
          </div>
        </div>
      </b-collapse>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      className: "",
      instructorName: "",
      classType: "free",
      isOpen: 0,
      allClasses: [
        {
          className: "Introduction to Web Development",
          instructorName: "Andre Rusli",
          classType: "paid",
        },
        {
          className: "Building a Solid Community",
          instructorName: "Nathanael Pribady",
          classType: "free",
        },
      ],
    };
  },
  name: "HomePage",
  methods: {
    addClass() {
      let newClass = {
        className: this.className,
        instructorName: this.instructorName,
        classType: this.classType,
      };
      this.allClasses.push(newClass);
      this.className = "";
      this.instructorName = "";
      this.classType = "free";
    },
  },
};
</script>
