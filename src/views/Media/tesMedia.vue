<template>
  <v-main>
    <v-container>
      <h3 class="font-weight-Reguler">Riwayat Vaksin Masuk</h3>
      <v-row class="justify-space-between">
        <v-col cols="6">
          <div class="d-flex my-2">
            <p class="my-2 mx-2">Filter</p>
            <v-btn outlined color="primary">
              Semua <v-icon color="black" size="15"> mdi-chevron-down </v-icon>
            </v-btn>
          </div>
        </v-col>
        <v-col cols="4">
          <v-text-field
            @click="() => goTo"
            v-model="search"
            append-icon="mdi-magnify"
            dense
            class="rounded-xl"
            placeholder=" Masukkan hal yang ingin dicari"
            outlined
            x-small
          >
          </v-text-field>
        </v-col>
      </v-row>

      <v-card width="auto" outlined color="primary" elevation="1">
        <v-data-table
          item-key="hospital_id"
          :headers="headers"
          :items="desserts"
          value="hospital_id"
          v-model="hospital_id"
          :search="search"
          :page.sync="page"
          :items-per-page="itemsPerPage"
          hide-default-footer
          @page-count="pageCount = $event"
        >
          <template v-slot:[`item.status`]="{ item }">
            <v-chip :color="getColor(item.status)" dark>
              {{ item.status }}
            </v-chip>
          </template>
          <template v-slot:[`item.id`]="{ item }">
            <v-btn @click="() => goTo(item.id, index)" dark>
              {{ item.id }}
            </v-btn>
          </template>
        </v-data-table>
      </v-card>
      <!-- dialog -->
      <v-dialog v-model="dialog" persistent max-width="350">
        <v-card>
          <v-card-title class="text-h5"> Details Transaksi </v-card-title>
          <hr />
          <br />
          <v-card-subtitle
            >Nama Mitra:
            <strong>{{ transaksi.distributor }}</strong></v-card-subtitle
          >
          <v-card-subtitle>Nomor Transaksi: </v-card-subtitle>
          <v-card-subtitle
            >Asal Vaksin: <strong>{{ transaksi.asalvaccine }}</strong>
          </v-card-subtitle>
          <v-card-subtitle
            >Tanggal Pengiriman:
            <strong>{{ transaksi.tanggal }}</strong></v-card-subtitle
          >
          <v-card-subtitle>Tujuan: </v-card-subtitle>
          <v-card-subtitle>Alamat: </v-card-subtitle>
          <v-card-subtitle>Email: </v-card-subtitle>
          <v-card-subtitle>Jenis Vaksin: </v-card-subtitle>
          <v-card-subtitle>Jumlah: </v-card-subtitle>
          <v-card-subtitle
            >Status: <strong>{{ transaksi.status }}</strong></v-card-subtitle
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Tidak
            </v-btn>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Terima
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      {{ transaksi.distributor }}
      <br />
      <template>
        <v-row class="justify-end">
          <v-col cols="6"> </v-col>
          <v-col cols="auto">
            <div class="pagination rounded-lg">
              <v-pagination v-model="page" :length="6"></v-pagination>
            </div>
          </v-col>
        </v-row>
      </template>
    </v-container>
    ></v-main
  >
</template>

<script>
import axios from "axios";
export default {
  name: "KeluarComponents",
  data() {
    return {
      transaksi: "",
      dialog: false,
      hospital_id: "",
      pageCount: 0,
      itemsPerPage: 3,
      isActive: false,
      page: 1,
      search: "",
      headers: [
        { text: "Nama Mitra", value: "distributor", width: 200 },
        { text: "Nomor Transaksi", value: "no_transaction", width: 200 },
        { text: "Asal Vaksin", value: "asalvaccine", width: 200 },
        { text: "Tanggal Pengiriman", value: "tanggal", width: 250 },
        { text: "Tujuan(id hospital)", value: "hospital_id", width: 200 },
        { text: "Alamat(alamat rumah sakit)", value: "alamat", width: 200 },
        { text: "E-mail(rumah sakit)", value: "email", width: 200 },
        { text: "Jenis Vaksin", value: "vaccinehospital_id", width: 200 },
        { text: "Jumlah(stok)", value: "jumlah", width: 200 },
        { text: "Status Penerimaan", value: "status", width: 200 },
        { text: "Id Transaksi", value: "id", width: 150 },
      ],

      desserts: [],
    };
  },
  mounted() {
    axios
      .get("/transactionin")
      .then(
        (data) => (this.desserts = data.data.transactions),
        console.log("isi dessert", this.desserts)
      )
      .catch((err) => console.log("erorgrr = ", err.message));

    axios
      .get("/hospital/" + this.desserts.hospital_id)
      .then((response) => console.log(response));
  },
  methods: {
    getColor(status) {
      if (status == false) return "red";
      else return "green";
    },

    async goTo(id) {
      this.dialog = true;
      const resp_transaksi = await axios.get("/transactionin/" + id);
      this.transaksi = await resp_transaksi.data.transactions[0];
      console.log("isi tasns= ", this.transaksi);
    },
  },
};
</script>

<style></style>
