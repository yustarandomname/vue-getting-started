const app = Vue.createApp({
  data() {
    return {
      title: 'Just Getting Started',
      books: [
        {
          title: 'The Joy of Coding',
          description: 'A book about how to code',
          isFav: true,
        },
        {
          title: 'The Joy of Coding part 2',
          description: 'A book about how to code',
          isFav: true,
        },
        {
          title: 'The Joy of Coding part 3',
          description: 'A book about how to code',
          isFav: true,
        },
      ],
    }
  },
  methods: {
    toggleFav(book) {
      book.isFav = !book.isFav
    }
  },
  computed: {
    filteredBooks() {
      return this.books.filter(book => book.isFav)
    }
  }
})

app.mount('#app')