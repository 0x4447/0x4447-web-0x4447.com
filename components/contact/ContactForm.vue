<template>
  <div class="contact-form">
    <ValidationObserver v-slot="{ handleSubmit }" class="w-100">
      <form novalidate @submit.prevent="handleSubmit(onSubmit)">
        <div class="row">
          <div class="col-md-6">
            <ValidationProvider
              v-slot="{ validated, errors }"
              name="firstName"
              rules="required"
            >
              <BaseInput
                v-model="formData.firstName"
                label="First name"
                placeholder="Joe"
                required
                :was-validated="validated"
                :errors="errors"
              />
            </ValidationProvider>
          </div>
          <div class="col-md-6">
            <ValidationProvider
              v-slot="{ validated, errors }"
              name="lastName"
              rules="required"
            >
              <BaseInput
                v-model="formData.lastName"
                placeholder="Doe"
                label="Last name"
                required
                :was-validated="validated"
                :errors="errors"
              />
            </ValidationProvider>
          </div>
        </div>
        <ValidationProvider
          v-slot="{ validated, errors }"
          name="email"
          rules="required|email"
        >
          <BaseInput
            v-model="formData.email"
            label="Email address"
            placeholder="john.doe@example.com"
            type="email"
            required
            :was-validated="validated"
            :errors="errors"
          />
        </ValidationProvider>
        <div class="row">
          <div class="col-md-6">
            <ValidationProvider
              v-slot="{ validated, errors }"
              name="companyName"
              rules="required"
            >
              <BaseInput
                v-model="formData.companyName"
                label="Company name"
                placeholder="Example, LLC"
                required
                :was-validated="validated"
                :errors="errors"
              />
            </ValidationProvider>
          </div>
          <div class="col-md-6">
            <ValidationProvider
              v-slot="{ validated, errors }"
              name="jobTitle"
              rules="required"
            >
              <BaseInput
                v-model="formData.jobTitle"
                label="Job title"
                placeholder="CEO, CTO, CP of..."
                required
                :was-validated="validated"
                :errors="errors"
              />
            </ValidationProvider>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <ValidationProvider
              v-slot="{ validated, errors, failed, passed }"
              name="industry"
              rules="required"
              mode="aggressive"
            >
              <div
                class="base-multiselect form-group"
                :class="[
                  { 'was-validated': validated },
                  { failed },
                  { passed },
                ]"
              >
                <label>Industry</label>
                <Multiselect
                  v-model="formData.industry"
                  placeholder="Select Industry"
                  :show-labels="false"
                  :options="industries.map((item) => item.value)"
                >
                  <template slot="option" slot-scope="props">
                    <div class="d-flex justify-content-between">
                      {{ props.option }}
                      <SvgIcon
                        name="checkmark"
                        class="contact-form__multiple-option-icon"
                      />
                    </div>
                  </template>
                  <template slot="caret">
                    <div class="multiselect__select">
                      <SvgIcon
                        name="dropdown"
                        class="contact-form__multiple-option-icon"
                      />
                    </div>
                  </template>
                </Multiselect>
                <div
                  v-for="(error, index) in errors"
                  :key="index + '-multiple-select'"
                  class="invalid-feedback"
                >
                  {{ error }}
                </div>
              </div>
            </ValidationProvider>
          </div>
          <div class="col-md-6">
            <ValidationProvider
              v-slot="{ validated, errors, passed, failed }"
              name="tags"
              rules="required"
              mode="aggressive"
            >
              <div
                class="base-multiselect form-group"
                :class="[
                  { 'was-validated': validated },
                  { failed },
                  { passed },
                ]"
              >
                <label>AWS Services </label>
                <Multiselect
                  v-model="formData.awsServices"
                  placeholder="Select an AWS Service"
                  multiple
                  :close-on-select="false"
                  :show-labels="false"
                  :options="awsServicesOptions"
                  :preserve-search="true"
                >
                  <template slot="option" slot-scope="props">
                    <div class="d-flex justify-content-between">
                      {{ props.option }}
                      <SvgIcon
                        name="checkmark"
                        class="contact-form__multiple-option-icon"
                      />
                    </div>
                  </template>
                  <template slot="caret">
                    <div class="multiselect__select">
                      <SvgIcon
                        name="dropdown"
                        class="contact-form__multiple-option-icon"
                      />
                    </div>
                  </template>
                </Multiselect>
              </div>
              <div
                v-for="(error, index) in errors"
                :key="index + '-multiple-select-tag'"
                class="invalid-feedback"
              >
                {{ error }}
              </div>
            </ValidationProvider>
          </div>
        </div>

        <ValidationProvider
          v-slot="{ validated, errors }"
          name="message"
          rules="required"
        >
          <BaseTextarea
            v-model="formData.message"
            label="Your Message"
            placeholder="Tell us what we can help you with"
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
</template>

<script>
import Multiselect from 'vue-multiselect'
import AWS from 'aws-sdk'
import awsServices from '~/assets/content/helpers/aws-services.json'
import industries from '~/assets/content/helpers/industries.json'

export default {
  name: 'ContactForm',
  components: { Multiselect },
  data() {
    return {
      awsServices,
      industries,
      s3: null,
      loading: false,
      formData: {
        firstName: '',
        lastName: '',
        companyName: '',
        jobTitle: '',
        email: '',
        message: '',
        awsServices: '',
        industry: '',
      },
    }
  },
  computed: {
    buttonText() {
      return this.loading ? 'Sending...' : 'Send'
    },
    awsServicesOptions() {
      return [].concat
        .apply([], Object.values(this.awsServices))
        .map((item) => item.name)
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

      //
      //  Get the time zone the browser is in.
      //
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone

      //
      //  This array is used to format the body of the message.
      //
      const bodyRaw = [
        this.formData.message,
        '\n',
        '- Company Name: ' + this.formData.companyName,
        '- Job Title: ' + this.formData.jobTitle,
        '- State: ' + this.formData.industry,
        '- Time zone: ' + tz,
        '- Tags: ' + this.formData.awsServices,
      ]

      //
      //  Once we have the body formated how we want we join the array
      //      in to a single string, which is going to be the body of the message.
      //
      const body = bodyRaw.join('\n')
      console.log(body)

      const json = {
        subject: 'Email from Home page.',
        body,
        emails: {
          to: {
            name: 'David Gatti',
            email: 'david@0x4447.com',
          },
          reply_to: {
            name: this.formData.firstName + ' ' + this.formData.lastName,
            email: this.formData.email,
          },
        },
      }

      //
      //  Stringify JSON
      //
      const data = JSON.stringify(json)

      //
      //  Convert string to an ArrayBuffer
      //
      const encoder = new TextEncoder()
      const arrayBuffer = encoder.encode(data)

      //
      //  Prepare parameters for putObject function
      //
      const params = {
        Body: arrayBuffer,
        Bucket: '0x4447-web-us-east-1-smtp',
        Key: Math.round(new Date().getTime() / 1000) + '.json',
      }

      //
      //  Call putObject to send json to S3 Bucket
      //
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
.contact-form {
  &__submit-button {
    @include media-breakpoint-down(md) {
      width: 100%;
    }
  }
}
</style>
