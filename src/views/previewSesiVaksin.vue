<template>
    <v-app>
          <h1 style="background-color:#E4F7FF; height:50px; border-radius:15px; padding-left: 20px;">Pembuatan Sesi Vaksinasi</h1>
    <v-container>
        <h1>Preview Sesi</h1>
        <strong>Silahkan memeriksa kembali data anda</strong>
<!-- Content -->
        <v-col>
            <v-row>
                <v-col cols="7">
                   <v-card style="border: solid #1789BC; margin-top: 0px; border-radius:10px; padding:10px;">
                     <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr style="border: solid #1789BC; margin-top: 0px; border-radius:10px; padding:10px;">
            
            <th style="background-color: #1789BC; border-radius: 15px 0px 0px 15px;" class="text-left">
            No
            </th>
          <th style="background-color: #1789BC; border-radius: 0px;" class="text-left">
            Keterangan
          </th>
          <th style="background-color: #1789BC; border-radius: 0px 15px 15px 0px;" class="text-left">
            Pilihan
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.keterangan"
        >
                    
          <td>{{ item.No }}</td>
          <td>{{ item.Keterangan }}</td>
          <td>{{ item.Pilihan }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>

                    </v-card>
                        
                   
                </v-col>
                <v-col cols="5">
                    <v-img src="../assets/mbakvaksin.jpg">
                        
                    </v-img>
                </v-col>
            </v-row>
        </v-col>

<!-- Button -->
        <v-row class="text-center">
            <v-col cols="12">

                <v-btn color="primary" class="mx-2">Lanjutkan</v-btn>
                <v-btn @click="() => redirectTo ('/addvsessions')" color="primary" class="mx-2">Kembali</v-btn>
            </v-col>
        </v-row>
    </v-container>
    </v-app>
</template>

<script>
export default {
    name:"previewSesiPage",
     data () {
      return {
        desserts: [
          {
            No: 1,
            Keterangan: 'Rumah sakit',
            Pilihan: "RS Cipto Mangunkusumo",
          },
          {
            No: 2,
            Keterangan: 'Sesi',
            Pilihan: "Sesi (00-00)",
          },
          {
            No: 3,
            Keterangan: 'Tanggal',
            Pilihan: "Tanggal-Bulan-Tahun",
          },
          {
            No: 4,
            Keterangan: 'jenis Vaksin',
            Pilihan: "Vaksin Sinovac",
          },
          {
            No: 5,
            Keterangan: 'Jumlah Vaksin',
            Pilihan: "100",
          },
          
        ],
      }
    },
    methods: {
      redirectTo(){
        this.$router.push('/addsessions')
      }
    },
}
</script>