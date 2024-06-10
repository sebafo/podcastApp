var express = require('express');
var router = express.Router();

/* GET items listing. */
router.get('/', function(req, res, next) {
  const episodes = [
    { title: 'How to run my code in Azure?', link: '#' },
    { title: 'Upgrading my AKS cluster', link: '#' },
    { title: 'Why I should start using Azure Container Apps', link: '#' },
    { title: 'Understanding Azure Functions', link: '#' },
    { title: 'Getting started with Azure Logic Apps', link: '#' },
    { title: 'Exploring Azure DevOps', link: '#' },
    { title: 'Introduction to Azure Machine Learning', link: '#' },
    { title: 'Building web apps with Azure App Service', link: '#' },
  ];

  res.json(episodes);
});

module.exports = router;