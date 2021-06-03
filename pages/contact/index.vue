<template>
  <div>
    <PageHeader name="contact" alt="0x4447, LLC. - Contact" />

    <div class="container marketing">
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
          <form>
            <div class="form-group">
              <label>Email address</label>
              <input id="from" type="email" class="form-control" required />
              <div class="invalid-feedback">
                There is something wrong with the email.
              </div>
            </div>

            <div class="form-group">
              <label for="exampleFormControlTextarea1">Your Message</label>
              <textarea
                id="text"
                class="form-control"
                rows="10"
                required
              ></textarea>
              <div class="invalid-feedback">
                Don't forget to write your message.
              </div>
            </div>
          </form>
          <button
            id="submit"
            type="submit"
            class="btn btn-primary eggshell-background"
          >
            <div
              class="spinner-border text-light"
              hidden
              id="loading"
              style="width: 1.3rem; height: 1.3rem"
              role="status"
            >
              <span class="sr-only"></span>
            </div>
            <span id="send">Send</span>
          </button>
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
    }
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

      $('#submit').on('click', (event) => {
        event.preventDefault()
        event.stopPropagation()

        if (!$('form')[0].checkValidity()) {
          $('form').addClass('was-validated')
          return
        }

        $('#submit').off('click')

        document.getElementById('loading').hidden = false

        $('#send').text('Sending...')

        $('#from').attr('disabled', true)
        $('#text').attr('disabled', true)
        $('#submit').addClass('disabled')

        this.send_email()
      })
    },
    send_email() {
      const json = {
        subject: 'Email from Home page.',
        body: $('#text').val(),
        emails: {
          to: {
            name: 'David Gatti',
            email: 'david@0x4447.com',
          },
          reply_to: {
            name: $('#from').val(),
            email: $('#from').val(),
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
