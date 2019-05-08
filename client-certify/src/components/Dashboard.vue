<template >
    <v-content v-if= "!!$store.state.isUserLoggedIn">
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs9>
              <panel title="Certificates">
  <div>
    <v-toolbar flat color="white">
      <v-toolbar-title>My Certificates</v-toolbar-title>
      <v-divider
        class="mx-2"
        inset
        vertical
      ></v-divider>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark class="mb-2" v-on="on">New Item</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.name" label="Certificate name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.provider" label="Provider"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.grade" label="Grade"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.validity" label="Validity"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="certificates"
      class="elevation-1"
    >
      <template v-slot:items="props">
        <td class="text-xs-left">{{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.provider }}</td>
        <td class="text-xs-left">{{ props.item.grade }}</td>
        <td class="text-xs-left">{{ props.item.validity }}</td>
        <td class="justify-center layout px-0">
          <v-icon
            small
            class="mr-2"
            @click="editItem(props.item)"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="deleteItem(props.item)"
          >
            delete
          </v-icon>
        </td>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </div>
             </panel>
            </v-flex>
        </v-layout>
      </v-container>
          <v-btn
          v-if= "!!$store.state.isUserLoggedIn"
          @click="navigateTo({name: 'addcertificate'})"
          dark color="primary"
          medium
          middle
          right
          fixed
          v-tooltip.hover title="Add certificate"
          fab>
          <v-icon>add</v-icon>
          </v-btn>
    </v-content>
</template>

<script>
import CertificatesService from '@/services/CertificatesService'
import Panel from '@/components/Panel'

export default {
  components: {
    Panel
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    editItem (item) {
      this.editedIndex = this.certificates.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.certificates.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.certificates.splice(index, 1)
    },

    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.certificates[this.editedIndex], this.editedItem)
      } else {
        this.certificates.push(this.editedItem)
      }
      this.close()
    }
  },
  data: () => ({
    dialog: false,
    headers: [
      {
        text: 'Certificate Name',
        align: 'left',
        sortable: false,
        value: 'name'
      },
      { text: 'Provider', value: 'provider' },
      { text: 'Grade', value: 'grade' },
      { text: 'Validity', value: 'validity' }
    ],
    certificates: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      provider: '',
      grade: 0,
      validity: 0
    },
    defaultItem: {
      name: '',
      provider: '',
      grade: 0,
      validity: 0
    }
  }),
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Certificate' : 'Edit Certificate'
    }
  },
  watch: {
    dialog (val) {
      val || this.close()
    }
  },
  created () {
    this.initialize()
  },
  async mounted () {
    this.certificates = (await CertificatesService.index()).data
  }
}
</script>

<style scoped>
</style>
