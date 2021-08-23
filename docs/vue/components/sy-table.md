# SyTable

Once `SyaraUi` is imported and registered in main.js file, you can use the table component by indicating the element `<SyTable />` and set the required props and listeners.

<!-- <div style="text-align:center; margin: 30px auto;"><img src="/SyTable.PNG" /></div> -->
<div style="text-align:center; margin: 30px auto;"><img :src="$withBase('/SyTable.PNG')" /></div>

Component's template
``` vue

    <template>

        <!-- example -->
        
        <SyTable 
        :header="tHeader" 
        :body="tBody" 
        :pageLimit="40" 
        :bodyHeight="600" 
        :selectionField="true" 
        :bodyLoading="loading"
        @selectedLines="selectedItens=$event" 
        @actionCallbackFunction="manageCallbackFunctions($event)" />
        <!-- Rest of your component file -->

    </template>
```
Component's script
``` vue
    <script>

        export default {
            data() {
                return {

                    
                    tHeader: [
                        {
                            text: 'Id', // Text presented at Column's header
                            field: 'id', // Map to this specific key from every object at data list 
                            filter: true, // define whether filter field is presented or not for this specific column
                            asc: true // Define how to order lines based on this column data
                        },
                        {text: 'Album Id', field: 'albumId', filter: true },
                        {text: 'Title', field: 'title', filter: true },
                        {text: 'Url', field: 'url', filter: true},
                        {text: 'Thumb', field: 'thumbnailUrl', filter: true},
                        {
                            text: 'Actions', 
                            actions:[
                                {
                                    callback:'testReturnFunction', // action called whenever the icon is clicked (must be mapped with method manageCallbackFunctions)
                                    info: 'id', // value presented besides icon
                                    mdIcon: 'attach_file' // Using Material Design icons
                                },
                                {
                                    callback:'testReturnFunction2', 
                                    info: 'id', 
                                    icon: '<svg>your svg icon here...</svg>' // Using plain svg icon
                                }
                            ] 
                        }

                    ],
                    // Actual table data
                    tBody: [],
                    // Receive list objects containing each line selected 
                    selectedItens: [],
                    // Control whether loading message is presented ro not
                    loading: false, // set true while data is been loaded
                    loadingText: 'loading data, please wait...',
                    
                    
           

                }
            },
            created(){
                this.getDataAxios()
            },
            methods: {

                // Testing table component with data from API provide by JSONPlaceholder - awesome!
                async getDataAxios(){
                    this.loading = true
                    let response = await axios.get('https://jsonplaceholder.typicode.com/photos')
                    this.tBody = response.data
                    this.loading = false
                },

               // Setup this function to deal with actions (handle icon's table on click event)
                manageCallbackFunctions(event) {
                    console.log('manageCallbackFunctions')
                    console.log(event)
                    this[event[0]](event[1])
                },

                testReturnFunction(e){
                    console.log('testReturnFunction')
                    console.log(e)

                },

                testReturnFunction2(e) {
                    console.log('testReturnFunction2')
                    console.log(e)
                }

                // ...
            
            }
        }

    </script>
   
```

## Props


| prop            | type                 |  required          | default value  | description                                                       |
| --------------- | -------------------- | :----------------: | :------------: |:----------------------------------------------------------------- |
| title           | String               | no                 | null           | Table's title. Will be presented only when a text is defined      |
| header          | Array[Objects]       | yes                |                | Array of objects with the properties for each column of the table |
| body            | Array[Objects]       | yes                |                | Data presented by the table where each object should be a line    |
| bodyHeight      | number               | no                 | null           | Maximum tbody height. If not informed, height will be auto     |
| bodyLoading     | Boolean              | no                 | false          | If true, data is replaced by a loading message |
| bodyLoadingText | String               | no                 | `Fetching data, please wait...` | Loading message displayed while table's data is been fetched 
| selectionField  | Boolean              | no                 | null           | Define if selection column would be presented |
| sumField        | String               | no                 | null           | |
| pageLimit       | number               | no                 | null           | If informed, will set a maximum number of lines displayed for each page     |
| footerText      | String               | no                 | `Showing __LINES__ of __MAXLINES__` | tFoot's text|
| theme           | String               | no                 | `syara-light`   | Define witch theme (light or dark) should be presented |

        
> Options in header's Array of objects (Each object in this array will represent a column of the table)

| prop            | type                 |  required          | default value  | description                                                       |
| --------------- | -------------------- | :----------------: | :------------: |:----------------------------------------------------------------- |
| id              | any                  | no                 | uuid (v4)      | Column's id |
| text            | String               | yes                |                | Text presented at Column's header |
| field           | String               | yes                |                | |
| filter          | Boolean              | no                 | false          | If true, filter input will be available for this column |
| filterText      | String               | no                 | null           | If informed, will set a default text for this column's filter |
| filterPlaceholder | String             | no                 | `Filter...`    | Filter's input placeholder
| asc             | Boolean              | no                 | false          | If true, the table's data will be ordered by de column (ASC) |
| textAlign       | String               | no                 | `center`       | |
| style           | Object               | no                 | `{}`           | CSS properties in JS style (camelCase) |
| actions         | Array                | no                 | `[]`           | See actions session |
| labels          | Array                | no                 | `[]`           | See labels session |



> actions - each object in this Array will represent a action available

| prop            | type                 |  required          | default value  | description                                                       |
| --------------- | -------------------- | :----------------: | :------------: |:----------------------------------------------------------------- |
| callback        | String               | yes                |                | Function' name that will be executed on click |
| info            | String               | no                 |                | |
| icon            | String               | no                 |                | SVG icon |





## Listeners

* selectedLines
* callbackFunctions