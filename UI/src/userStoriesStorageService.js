import { v4 as uuidv4 } from 'uuid';

export const setUserStories = () => {
    return [
            {
                id: uuidv4(),
                hidden: false,
                title: 'Account',
                body: 'As a user I want to handle my account',
                cost: '5',
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
                                cost: '2',
                                children: [
                                    {
                                        id: uuidv4(),
                                        hidden: true,
                                        title: 'Age Calendar',
                                        body: 'As a user I want to have calendar where I can set my age in more convenient way',
                                        cost: '0',
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
                        cost: '0',
                       children: []
                    },
                ]
            },
            {
                id: uuidv4(),
                hidden: false,
                title: 'Root User Story Ex31',
                body: 'The text of the root user story',
                cost: '0',
                children: [
                    {
                        id: uuidv4(),
                        hidden: true,
                        title: 'Child User Story 1',
                        body: 'The text of the child user story',
                        cost: '0',
                        children: []
                    },
                    {
                        id: uuidv4(),
                        hidden: true,
                        title: 'Child User Story 2',
                        body: 'The text of the child user story',
                        cost: '0',
                        children: [
                            {
                                id: uuidv4(),
                                hidden: true,
                                title: 'Child User Story 1.1',
                                body: 'The text of the child user story',
                                cost: '0',
                                children: []
                            }
                        ]
                    },
                ]
            }
        ]
}
