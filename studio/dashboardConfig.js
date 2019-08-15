export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d553a8637408938bd741f1b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-veiic773',
                  apiId: 'f642262b-5f51-4113-8e4f-18ff03e843d0'
                },
                {
                  buildHookId: '5d553a879eece2017b211ae9',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-4x5i5n5k',
                  apiId: 'dcabbe31-692b-42b8-98bd-f64be36db641'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/simkne/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-4x5i5n5k.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
