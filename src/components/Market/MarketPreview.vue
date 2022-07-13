<template>
    <li>
      <div>
        <span>{{marketInfo.number}}</span>
        <span>{{marketInfo.title}}</span>
      </div>
      <div>
        <a href="">link</a>
        <a href="">link</a>
      </div>
    </li>
</template>

<script>

export default {
 props: {
   marketInfo: Object,
 },
  components: {},
  data() {
    return {}
  },
  created() {},
  methods: {},
  computed: {},
}
</script>