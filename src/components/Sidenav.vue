<template>
  <v-card
    class="mx-auto"
    width="300"
  >
    <v-list>
      <v-list-item>
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-group
        value="true"
      >
        <template v-slot:activator>
          <v-list-item-title>Users</v-list-item-title>
        </template>

        <v-list-group
          no-action
          sub-group
          value="true"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Admin</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="(admin, i) in admins"
            :key="i"
            link
          >
            <v-list-item-title v-text="admin[0]"></v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-divider></v-divider>

        <v-list-group
          sub-group
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Actions</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="(crud, i) in cruds"
            :key="i"
            @click="doSomething"
          >
            <v-list-item-title v-text="crud[0]"></v-list-item-title>

          </v-list-item>
        </v-list-group>
      </v-list-group>
    </v-list>
  </v-card>
</template>

<script>
    export default {
        name: "Sidenav",
        data() {
            return {
                admins: [
                  ['Management', 'people_outline'],
                  ['Settings', 'settings'],
                ],
                cruds: [
                  ['Create', 'add'],
                  ['Read', 'insert_drive_file'],
                  ['Update', 'update'],
                  ['Delete', 'delete'],
                ],
            }
        },
    }
</script>

<style scoped>
.mx-auto {
  margin: 40px 0;
  position: fixed;
}
</style>
