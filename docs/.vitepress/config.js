

const sidebarHome = () => { 
    return [
        { text: 'Vue', link: '/vue/'},
        { text: 'React', link: '/react/'}
    ]
}
const sidebarVue = () => { 
    return [
        { text: 'Home', link: '/'},
        {
            
            text: 'Vue',
            children: [
                
                { text: 'Get Started', link: '/vue/'},
                {
                    text: 'Components', // link: '/vue/components/'
                    children: [
                        { text: 'Table', link: '/vue/components/table'},
                        { text: 'Form', link: '/vue/components/form'},
                        { text: 'Button', link: '/vue/components/button'},
                        { text: 'Chart', link: '/vue/components/chart'},
                        { text: 'Icons', link: '/vue/components/icons'}
                    ]
                }
                
            ] 
        
        },
        { text: 'React', link: '/react/'},
   
    ]
}

const sidebarReact = () => { 
    return [
        { text: 'Home', link: '/'},
        { text: 'Vue', link: '/vue/'},
        {
            text: 'React',
            children:[
                { text: 'Get Started', link: '/react/'}
            ] 
        },
       
    ]
}

module.exports = {
    title: 'Syara UI',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/'},
            { text: 'Vue', link: '/vue/'},
            { text: 'React', link: '/react/'}
        ],
        sidebar: {
            // '/': sidebarHome(),
            '/vue/': sidebarVue(),
            '/react/' : sidebarReact()
        },
    },

  
}