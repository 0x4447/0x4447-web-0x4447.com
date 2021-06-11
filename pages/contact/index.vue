<template>
  <div class="contact">
    <PageHeader name="contact" alt="0x4447, LLC. - Contact" />

    <div class="container">
      <PageHeaderText :title="data.title" :description="data.description" />

      <hr class="featurette-divider" />

      <div class="row">
        <div class="col">
          <address>
            <strong>0x4447™, LLC.</strong><br />
            8 The Green STE 7254<br />
            Dover, DE 19901<br />
            United States<br />
            <br />
            Phone: <a href="tel:+1 (866) 838-8203‬‬">+1 (866) 838-8203</a>
          </address>
        </div>

        <div class="col-12 col-md-9">
          <ContactForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '../../components/common/PageHeader'
import PageHeaderText from '../../components/common/PageHeaderText'
import ContactForm from '../../components/contact/ContactForm'
import headMixins from '../../mixins/head-mixins'
import data from '~/assets/content/pages/contact.json'

export default {
  name: 'Contact',
  components: { ContactForm, PageHeaderText, PageHeader },
  mixins: [headMixins],
  data() {
    return {
      data,
    }
  },
}
</script>
