export default {
  head() {
    return {
      title: this.data.head.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.data.head.meta.description
        },
        {
          property: "og:title",
          content: "0x4447, LLC - " + this.data.head.meta.ogTitle
        },
        {
          property: "og:description",
          content: this.data.head.meta.description
        },
        {
          property: "og:image",
          content: this.data.head.meta.ogImage
        }
      ]
    };
  },
};
