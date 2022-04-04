export const setUserStories = () => {
    return [
            {
                id: 1,
                hidden: false,
                title: 'Root User Story Ex1',
                body: 'The text of the root user story The text of the root user storyThe text of the root user storyThe text of the root user storyThe text of the root user storyThe text of the root user story',
                children: [
                    {
                        id: 2,
                        hidden: true,
                        title: 'Child User Story 1',
                        body: 'The text of the child user story',
                        children: []
                    },
                    {
                        id: 3,
                        hidden: true,
                        title: 'Child User Story 2',
                        body: 'The text of the child user story',
                        children: [
                            {
                                id: 4,
                                hidden: true,
                                title: 'Child User Story 2.1',
                                body: 'The text of the child user story',
                                children: [
                                    {
                                        id: 5,
                                        hidden: true,
                                        title: 'Child User Story 2.1.1',
                                        body: 'The text of the child user story',
                                        children: []
                                    }
                                ]
                            }
                        ]
                    },
                ]
            },
            {
                id: 6,
                hidden: false,
                title: 'Root User Story Ex31',
                body: 'The text of the root user story',
                children: [
                    {
                        id: 7,
                        hidden: true,
                        title: 'Child User Story 1',
                        body: 'The text of the child user story',
                        children: []
                    },
                    {
                        id: 8,
                        hidden: true,
                        title: 'Child User Story 2',
                        body: 'The text of the child user story',
                        children: [
                            {
                                id: 9,
                                hidden: true,
                                title: 'Child User Story 1.1',
                                body: 'The text of the child user story',
                                children: []
                            }
                        ]
                    },
                ]
            }
        ]
}