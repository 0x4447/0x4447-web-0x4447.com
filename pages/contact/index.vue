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
          <ValidationObserver v-slot="{ handleSubmit }" class="w-100">
            <form novalidate @submit.prevent="handleSubmit(onSubmit)">
              <ValidationProvider
                v-slot="{ validated, errors }"
                name="email"
                rules="required|email"
              >
                <BaseInput
                  v-model="formData.email"
                  label="Email address"
                  type="email"
                  required
                  :was-validated="validated"
                  :errors="errors"
                />
              </ValidationProvider>

              <ValidationProvider
                v-slot="{ validated, errors }"
                name="text"
                rules="required"
              >
                <BaseTextarea
                  v-model="formData.text"
                  label="Your Message"
                  required
                  :was-validated="validated"
                  :errors="
                    errors[0]
                      ? [errors[0], `Don't forget to write your message.`]
                      : []
                  "
                  rows="10"
                />
              </ValidationProvider>
              <BaseButton
                type="submit"
                :loading="loading"
                class="contact__submit-button"
              >
                {{ buttonText }}</BaseButton
              >
            </form>
          </ValidationObserver>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AWS from 'aws-sdk'
import PageHeader from '../../components/common/PageHeader'
import headMixins from '../../mixins/head-mixins'
import PageHeaderText from '../../components/common/PageHeaderText'
import data from '~/assets/content/pages/contact.json'

export default {
  name: 'Contact',
  components: { PageHeaderText, PageHeader },
  mixins: [headMixins],
  data() {
    return {
      data,
      s3: null,
      loading: false,
      formData: {
        email: '',
        text: '',
      },
    }
  },
  computed: {
    buttonText() {
      return this.loading ? 'Sending...' : 'Send'
    },
  },
  mounted() {
    this.initContactForm()
  },
  methods: {
    initContactForm() {
      AWS.config.update({
        region: 'us-east-1',
        credentials: new AWS.CognitoIdentityCredentials({
          IdentityPoolId: process.env.IDENTITY_POOL_ID,
        }),
      })

      this.s3 = new AWS.S3({
        apiVersion: '2006-03-01',
      })
    },
    onSubmit() {
      this.loading = true
      const json = {
        subject: 'Email from Home page.',
        body: this.formData.text,
        emails: {
          to: {
            name: 'David Gatti',
            email: 'david@0x4447.com',
          },
          reply_to: {
            name: this.formData.email,
            email: this.formData.email,
          },
        },
      }

      //
      //  8.  Stringify JSON
      //
      const data = JSON.stringify(json)

      //
      //  9.  Convert string to an ArrayBuffer
      //
      const encoder = new TextEncoder()
      const arrayBuffer = encoder.encode(data)

      const params = {
        Body: arrayBuffer,
        Bucket: '0x4447-web-us-east-1-smtp',
        Key: Math.round(new Date().getTime() / 1000) + '.json',
      }

      this.s3.putObject(params, (error, data) => {
        this.loading = false

        if (error) {
          console.info(params)
          return console.error(error)
        }

        this.$router.push({ name: 'contact-thankyou' })
      })
    },
  },
}
</script>

<style lang="scss">
.contact {
  &__submit-button {
    @include media-breakpoint-down(md) {
      width: 100%;
    }
  }
}
</style>
