# Table

Once `SyaraUi` is imported and registered in main.js file, you can use the table component by indicating the element `<SyaraTable />` and set the required props and listeners.

Component's template
``` vue

    <template>

        <!-- Minimal example -->
        <SyaraTable 
        :header="fieldsProperties" 
        :body="bodyData" 
        />

        <!-- Or using all options  -->
        <SyaraTable 
        :title="'My Table'"
        :header="fieldsProperties" 
        :body="bodyData" 
        :bodyHeight="450"
        :bodyLoading="loading"
        :bodyLoadingText="loadingText"
        :pageLimit="nLinesPage" 
        :selectionField="true"
        :footerText="'Showing __LINES__ of __MAXLINES__ lines'"

        @selectedLines="selectedLines=$event"
        @actionCallbackFunctions="tableCallbackFunctions($event)"
        />

        <!-- Rest of your component file -->

    </template>
```
Component's script
``` vue
    <script>

        export default {
            data() {
                return {
                    // Must have
                    fieldsProperties: [
                        {text: 'Id', field: 'id', filter: true, asc: true},
                        {text: 'Album Id', field: 'albumId', filter: true },
                        {text: 'Title', field: 'title', filter: true },
                        {text: 'Url', field: 'url', filter: true},
                        {text: 'Thumb', field: 'thumbnailUrl', filter: true},
                        {text: 'Actions', actions:[
                            {callback:'editLine', info: 'id', icon: '<svg>...You svg icon code here...</svg>'}
                            ]    
                        }

                    ],
                    bodyData: [],

                    // Optional
                    loading: false, // set true while data is not ready
                    loadingText: 'loading data, please wait...', 
                    selectedLines: [], // array of selected lines - available if prop selectionField is true
           

                }
            },
            created(){
                this.getDataAxios()
            },
            methods: {

                // Using JSONPlaceholder's API to get the data and populate the bodyData prop
                async getDataAxios(){
                    this.loading = true
                    let response = await axios.get('https://jsonplaceholder.typicode.com/photos')
                    this.bodyData = response.data
                    this.loading = false
                },

                // If 'Actions' property is used in any field of fieldsProperties,
                // this method will be the bridge to the callback functions
                tableCallbackFunctions(event) {
                    this[event[0]](event[1])
                },

                editLine(e){
                    console.log('editLine')
                    console.log(e)
                    // your logic here ...
                }
            
            }
        }

    </script>
   
```

## props

* header `Array<Object>`
* body `Array<Object>`

[optional]
* title | `String`
* bodyHeight | `Number`
* bodyLoading | `Boolean` | default: `false`
* bodyLoadingText | `String` | default `Fetching data, please wait...`
* theme | `String` | default `syara-light`
* myClass | `String` 
* pageLimit | `Number`
* selectionField | `Boolean`
* footerText | `String` | default `Showing __LINES__ of __MAXLINES__`


## listeners

* selectedLines
* actionCallbackFunctions