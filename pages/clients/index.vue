<template>
  <div>
    <PageHeader name="clients" alt="0x4447, LLC. - Clients" />

    <div class="container marketing">
      <PageHeaderText :title="data.title" :description="data.description" />

      <hr class="featurette-divider" />

      <div class="row">
        <ClientsColItem
          v-for="(client, index) in data.clientsGrid"
          :key="index"
          :client="client"
        />
      </div>

      <hr class="featurette-divider" />

      <NextTextComponent :title="data.nextTitle" :text="data.nextContent" />
    </div>
  </div>
</template>

<script>
import PageHeader from "../../components/common/PageHeader";
import ClientsColItem from "../../components/clients/ClientsColItem";
import PageHeaderText from "../../components/common/PageHeaderText";
import headMixins from "../../mixins/head-mixins";
import data from "~/assets/content/pages/clients.json";
import NextTextComponent from "../../components/common/NextTextComponent";

export default {
  name: "Clients",
  components: { NextTextComponent, PageHeaderText, ClientsColItem, PageHeader },
  mixins: [headMixins],
  data() {
    return {
      data
    };
  }
};
</script>
