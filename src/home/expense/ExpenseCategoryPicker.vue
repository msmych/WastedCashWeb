<template>
  <div>
    <label>
      <select v-model="selectedCategory"
              @change="onSelectionChange">
        <option v-for="category in categories"
                :value="category.key"
        >{{ category.emoji }} {{ category.label }}
        </option>
      </select>
    </label>
  </div>
</template>

<script>
  import {expenseCategories} from './expenseCategories'

  export default {
    name: 'app-expense-category-picker',
    data() {
      return {
        categories: expenseCategories,
        selectedCategory: 'OTHER'
      }
    },
    methods: {
      onSelectionChange() {
        this.$emit('categorySelected', this.selectedCategory)
      }
    }
  }
</script>
