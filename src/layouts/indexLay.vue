<template>
<v-main>
    <v-row>
    <v-col cols="2">
      <SideBar/>
    </v-col>
    <v-col cols="10">
            <router-view></router-view>
    </v-col>
    </v-row>
</v-main>
</template>

<script>
import SideBar from '@/components/stokVaksin/sideBar.vue'
export default {
    name: "indexLayout",
    components: { SideBar }
}
</script>