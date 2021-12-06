import { pactWith } from 'jest-pact';

import { getAllTodoApiCall, submitTodoApiCall } from '../actions/todo';

pactWith({ consumer: 'react-consumer', provider: 'go-provider' }, provider => {

    describe('create todo item', () => {
        const feedback = "Test Description";
        const expectedResult = {
            description: 'Test Description'
        };

        it('should create list of todo items', async() => {
            submitTodoApiCall(feedback).then((result) => {
                expect(result.description).toEqual(expectedResult.description);
            }).then(() => {
                provider.verify()
            })
        });
    });

    
});


pactWith({ consumer: 'react-consumer', provider: 'go-provider' }, provider => {
    describe('get todo items', () => {
        const feedback = "Test Description";
        const expectedResult = {
            description: 'Test Description'
        };

        it('should get list of todos from database and add to listitems', async() => {
            submitTodoApiCall(feedback);
            getAllTodoApiCall(feedback).then((result) => {
                expect(result[0].description).toEqual(expectedResult.description);
            }).then(() => {
                provider.verify()
            })
        });
    });
})
