import {v4 as uuidv4} from 'uuid';

export const setUserStories = () => {
  return [
    {
      id: uuidv4(),
      hidden: false,
      title: 'Account',
      body: 'As a user I want to handle my account',
      cost: '8',
      children: [
        {
          id: uuidv4(),
          hidden: true,
          title: 'Account settings',
          body: 'As a user I want to edit general info about my account',
          cost: '4',
          children: [
            {
              id: uuidv4(),
              hidden: true,
              title: 'Name and surname',
              body: 'As a user I want to edit my Name and Surname',
              cost: '1',
              children: []
            },
            {
              id: uuidv4(),
              hidden: true,
              title: 'Age',
              body: 'As a user I want to edit my Age',
              cost: '3',
              children: [
                {
                  id: uuidv4(),
                  hidden: true,
                  title: 'Age Calendar',
                  body: 'As a user I want to have calendar where I can set my age in more convenient way',
                  cost: '3',
                  children: []
                }
              ]
            }
          ]
        },
        {
          id: uuidv4(),
          hidden: true,
          title: 'Account login',
          body: 'As a user I want to login in my account via email',
          cost: '2',
          children: []
        },
      ]
    },
    {
      id: uuidv4(),
      hidden: false,
      title: 'Cooking',
      body: 'As a cook, I want to manage my recipes for the benefit of sharing them with the entire world',
      cost: '8',
      children: [
        {
          id: uuidv4(),
          hidden: true,
          title: 'Create recipe',
          body: 'As a cook, I want to create a recipe',
          cost: '5',
          children: []
        },
        {
          id: uuidv4(),
          hidden: true,
          title: 'Reading recipe',
          body: 'As a cook, I want to read the recipe that I just created',
          cost: '3',
          children: []
        },
        {
          id: uuidv4(),
          hidden: true,
          title: 'Updating recipes',
          body: 'As a cook, I want to update my recipes',
          cost: '5',
          children: []
        },
        {
          id: uuidv4(),
          hidden: true,
          title: 'Deleting recipes',
          body: 'As a cook, I want to delete my recipes',
          cost: '2',
          children: []
        },
      ]
    },
    {
      id: uuidv4(),
      hidden: false,
      title: 'CooLab',
      body: 'As a user, I want to subscribe automatically to CooLab',
      cost: '8',
      children: [
        {
          id: uuidv4(),
          hidden: true,
          title: 'Manual subscription',
          body: 'As a user, I want to subscribe manually to CooLab',
          cost: '5',
          children: []
        },
        {
          id: uuidv4(),
          hidden: true,
          title: 'Subscription Information',
          body: 'As a user, I want to receive an email with all the information about my subscription to CooLab',
          cost: '3',
          children: []
        },
      ]
    },
    {
      id: uuidv4(),
      hidden: false,
      title: 'CooLab',
      body: 'As a user, I can subscribe to the premium version of the application/CooLab',
      cost: '8',
      children: [
        {
          id: uuidv4(),
          hidden: true,
          title: 'Premium subscription from Country',
          body: 'As a user, I can subscribe to the premium version of the application/CooLab ' +
            'using only a credit card issues in the same country I am using the application form',
          cost: '5',
          children: []
        },
        {
          id: uuidv4(),
          hidden: true,
          title: 'Subscription card handling',
          body: 'As a user, I can subscribe to the premium version of the application/CooLab only ones for each credit card',
          cost: '3',
          children: []
        },
        {
          id: uuidv4(),
          hidden: true,
          title: 'Subscription by email',
          body: 'As a user, I can subscribe to the premium version of the application/CooLab only ones for each email address',
          cost: '3',
          children: []
        },
      ]
    },
  ]
}

export const splittingMethods = () => {
  const splittingData = [
    'Use Splitting by business rules',
    'Use Operations method',
    'Use Interface variety method',
    'Use Method of differences by data group'
  ]
  return splittingData
}
