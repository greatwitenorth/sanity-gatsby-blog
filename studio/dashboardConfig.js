export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d682af981a36534ec329b4c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-1j55ixkx',
                  apiId: '384e3f23-d0e9-436a-83a7-7f454581b5e9'
                },
                {
                  buildHookId: '5d682af93f3802b5a1547854',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-rokq8qoh',
                  apiId: '7a708a2c-1fe2-41b1-ae6f-cd3bbfc6a383'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/greatwitenorth/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-rokq8qoh.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
