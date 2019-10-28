<template>
  <div class="product">
    <h2>Product</h2>
    <ul>
      <li
        v-for="product in products"
        :key="product.id">
        {{ product.title }} - {{ product.price }}
        <br>
        <button
          :disabled="!product.inventory"
          @click="addProductToCart(product)">Add to cart</button>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      products: state => state.products.all
    })
  },
  methods: {
    ...mapActions('cart', [
      'addProductToCart'
    ])
  },

  props: {
    list: Array,
    default: () => []
  },

  created () {
    this.$store.dispatch('products/getAllProducts')

    this.list.map((item) => {
      return item.name
    })
  }
}
</script>
