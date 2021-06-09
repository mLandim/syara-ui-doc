# Table

Once `SyaraUi` is imported and registered in main.js file, you can use the table component by indicating the element `<SyTable />` and set the required props and listeners.

<!-- <div style="text-align:center; margin: 30px auto;"><img src="/SyTable.PNG" /></div> -->
<div style="text-align:center; margin: 30px auto;"><img :src="$withBase('/SyTable.PNG')" /></div>

Component's template
``` vue

    <template>

        <!-- Minimal example -->
        <SyTable 
        :header="fieldsProperties" 
        :body="bodyData" 
        />

        <!-- Or using all options  -->
        <SyTable 
        :title="'My Table'"
        :header="fieldsProperties" 
        :body="bodyData" 
        :bodyHeight="450"
        :bodyLoading="loading"
        :bodyLoadingText="loadingText"
        :pageLimit="100" 
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

                    // Required
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

## Props

* header |  `Array<Object>` | `required` | Array of objects with the properties for each column of the table
    > header properties
    * id | `Any` 
    * text | `String` | Column text 
    * field | `String` | Map to the object property of `bodyData`'s array
    * filter | `Boolean` | default: `false` | Define if the column have the filter input 
    * filterText | `String` | default: `Filter...` | Define default text for the filter input
    * filterPlaceholder | `String`
    * textAlign | `String`
    * style | `Object` | Define additional style to column - it's possible to use css properties in camelCase style
    * asc | `Boolean` | Define order for column's data
    * actions | `Array<Object>`
        > actions properties
        * callback | `String` | function name
        * info | `String` | Map to the object property of `bodyData`'s array - show the value besides icon
        * icon | `String` | Svg icon code

    ``` js
        // ...
        fieldsProperties: [
            {text: 'Id', field: 'id', filter: true, asc: true},
            {text: 'Album Id', field: 'albumId', filter: true, style: {width: '50px'} },
            // ...
            {
                text: 'Actions', 
                actions:[
                    {callback:'editLine', info: 'id', icon: '<svg>...You svg icon code here...</svg>'}
                ]    
            }
        ],
        //...
    ```

* body | `Array<Object>` | `required`

* title | `String`
* bodyHeight | `Number` | Height of tBody in px
* bodyLoading | `Boolean` | default: `false`
* bodyLoadingText | `String` | default `Fetching data, please wait...`
* theme | `String` | default `syara-light`
* myClass | `String` 
* pageLimit | `Number`
* selectionField | `Boolean` | Define if table will have a column with checkbox for select line
* footerText | `String` | default `Showing __LINES__ of __MAXLINES__`


## Listeners

* selectedLines
* actionCallbackFunctions