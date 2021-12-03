import { pactWith } from 'jest-pact';

import { submitTodoApiCall } from '../actions/todo';

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
