const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      image: "./assets/images/socks_blue.jpg",
      inStock: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 2234, color: "green" },
        { id: 2235, color: "blue" },
      ],
      sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5],
    };
  },
});
