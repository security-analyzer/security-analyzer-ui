<template>
  <div class="h-screen text-gray-700 w-full bg-gray-50">
    <div class="w-full fixed bg-white shadow-sm border-b">
      <div class="flex justify-between">
        <div class="w-1/6 p-4 border-r">
          <a href="#" class="font-semibold">Security analyzer</a>
        </div>
        <ul class="flex text-gray-900 px-8 py-4 space-x-6">
          <li><a href="">About</a></li>
        </ul>
      </div>
    </div>
    <div class="w-full h-screen flex pt-14">
      <div class="w-1/6 shadow bg-white p-5">
        <ul class=" flex-col space-y-3">
          <li><a class="hover:text-green-600" href="">New scan</a></li>
          <li><a class="hover:text-green-600" href="">Scan history</a></li>
          <li><a class="hover:text-green-600" href="">Repporting</a></li>
        </ul>
      </div>
      <div class="w-5/6 flex flex-col py-8 px-6">
        <div class="w-full flex justify-between items-center content-center mb-6">
          <h3 class="text-2xl font-bold">Start a new scan</h3>
          <div class="flex space-x-2">
            <button
              @click="showAddCaretoryModal" 
              class="h-10 px-5 text-white transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-700">
              Add new category
            </button>
            <button class="h-10 px-5 text-white transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800">
              Start scanning
            </button>
          </div>
        </div>
        <div v-for="(category, index) in selectedCategories" :key="index" class="w-full flex flex-col space-y-6">
          <div class="w-full bg-white border">
            <div class="p-4 bg-gray-50 border-b">
              <div class="flex justify-between items-center">
                <h2 class="text-xl">{{ category.name }}</h2>
                <div>
                  <div class="flex space-x-2">
                    <button class="text-blue-600">
                      Add new website
                    </button>
                </div>
                </div>
              </div>
            </div>
            <div class="p-4">
              <div class="w-full grid grid-cols-3 text-sm gap-3">
                <div v-for="(website, index) in category.websites" :key="index" class="overflow-hidden rounded-sm border">
                  <div class="w-full bg-gray-100 p-4 border-b relative">
                    <h4 class="tracking-tight text-gray-800">{{ website.url }}</h4>
                    <button class="absolute top-5 right-5">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div v-if="website.pages.length != 0" class="bg-white h-72 overflow-y-scroll">
                    <div v-for="(page, index) in website.pages" :key="index" class="p-4 flex items-center border-b justify-between">
                      <h4>{{ page }}</h4>
                      <button class="text-red-600">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div v-else class="bg-white h-72 overflow-y-scroll justify-center flex items-center">
                    <button class="h-10 px-5 text-sm text-white transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-700">
                      Collect the most visted page
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="selectedCategories.length == 0" class="flex items-center content-center justify-center mt-5 w-full flex-1 bg-white border-dashed border-2 border-gray-100">
            <h3 border-b class="text-xl font-semibold">There's no category yet.</h3>
        </div>
      </div>
    </div>
    <v-modal v-model="addCaretoryModal" @confirm="confirm" @cancel="cancel">
      <template v-slot:title>Add new category</template>
      <div class="text-gray-700">
        <label class="block mb-2" for="forms-labelOverInputCode">Category</label>
        <div class="relative inline-block w-full text-gray-700">
          <select class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input">
            <option>Education</option>
            <option>E-commerce</option>
            <option>E-banking</option>
          </select>
          <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
          </div>
        </div>
      </div>
      <template v-slot:footer>
        <button @click="addCategory" class="h-8 px-4 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Save</button>
      </template>
    </v-modal>
  </div>
</template>

<script>

import VModel from './components/shared/VModel.vue'

export default {
  name: 'App',
  components: {
    'v-modal': VModel
  },
  data() {
    return {
      addCaretoryModal: false,
      newCategory: null,
      selectedCategories: [],
      test: [
        {
          id: 'qsdfqsdf',
          name: 'Education',
          websites: [
            {
              url: 'https://router.vuejs.org'
            },
            {
              url: 'https://router.vuejs.test',
              pages: [
                'https://router.vuejs.org/installation.html'
              ]
            },
            {
              url: 'https://router.vuejs.test',
              pages: [
                'https://router.vuejs.org/installation.html'
              ]
            }
          ]
        },
        {
          id: 'qsdfqsdf',
          name: 'E-banking',
          websites: [
            {
              url: 'https://router.vuejs.test',
              pages: [
                'https://router.vuejs.org/installation.html'
              ]
            },
            {
              url: 'https://router.vuejs.org'
            },
            {
              url: 'https://router.vuejs.test',
              pages: []
            }
          ]
        }
      ]
    }
  },
  methods: {
    showAddCaretoryModal() {
      this.addCaretoryModal= true
    },
    hideAddCaretoryModal() {
      this.$modal.hide('add-category-modal');
    },
    addCategory() {
      this.selectedCategories.push({
        id: 'qsdfqsdf',
        name: 'Education',
        websites: [
          {
            url: 'http://www.fpbm.ma SS',
            pages: [
              'http://www.fpbm.ma/new/amo.php',
              'http://www.fpbm.ma/new/offres-de-formations.php',
              'http://www.fpbm.ma/new/espace-enseignant.php',
              'http://www.fpbm.ma/recrutement.php',
              'http://www.fpbm.ma/scolarite/'
            ]
          },
          {
            url: 'https://www.uca.ma/',
            pages: []
          },
          {
            url: 'https://www.uir.ac.ma/',
            pages: []
          }
        ]
      })
    }
  },
}
</script>
