# Jest Explained

This README provides instructions on setting up and running the project quickly. The project has been designed to help you understand and learn about the Jest testing framework in great detail. You can quickly get started by following the steps below.

## Setup

1. **Clone the repository** - Open your terminal or command prompt and navigate to the directory where you want to store the project. Run the following command to clone the project repository:

```bash
git clone https://github.com/hardikmodi1/jest-explained.git
```

2. **Navigate to the Project Directory**: Change your current working directory to the project folder:

```bash
cd jest-explained
```

3. **Install Dependencies**: Use Yarn to install the project's dependencies. Run the following command

```bash
yarn install
```

And that's all you have the project up and running on your local machine and ready to deep dive in jest 🥳

## Running Tests

```bash
yarn test
```

This will start the Jest in watch mode. Run

```bash
yarn test <filename>
```

To run one test at a time in watch mode and play around with one test.

This Project is organized to provide detailed explanations and examples of Jest's features and functionality. You can explore the project by following the documentation and code samples included.

## Helpful Emojis 🚨 🦄 🤔

🦄 - will indicate that you're working with an exercise or there is something to try out
🤔 - Something to ponder over
🚨 - Some important concept or something which needs to be keep in mind

## Documentation

On top of every test, we have documentation explaining the use case of that function. Followed by test code.

## Course Structure

This project is designed such that we will start with simple concept and then gradually move on to complex concepts
of jest. So this start with

1. **mock function** - Use case of jest.fn and how to properly use it

   - app/exercises/mockFn/mockFn.spec.tsx

2. **Mocks** - How to properly use `jest.mock` and provide mock implementations of the functions etc.

   - app/exercises/mock/SimpleMock.spec.tsx
   - app/exercises/mock/MockImplementation.spec.tsx
   - app/exercises/mock/MockImplementationWithSpy.spec.tsx

3. **spyOn** - `spyOn` is a Jest function used to create "spies" that track the behavior of functions or methods during testing. This covers how to use it, provide implementations and all

   - app/exercises/spyOn/simpleSpy.tsx
   - app/exercises/spyOn/spyImplementation.tsx
   - app/exercises/spyOn/spyImplementation2.tsx

4. **userEvents** - This is a library for testing user interactions in JavaScript testing frameworks, such as Jest and Testing Library. It provides a way to programmatically simulate user actions like clicking, typing, and navigating, making it easier to test user interfaces and user interactions.

   - app/exercises/userEvents/click/Form/**tests**/Form.spec.tsx

5. **Mock Restores and Reset** - Jest has different methods to clear, reset and restore the mocks. This will explain in detail with proper example when to use which function

   - app/exercises/mockReset.spec.tsx
   - app/exercises/restoreAllMocks.tsx
   - app/exercises/mockRestore.spec.tsx
   - app/exercises/mockClear.spec.tsx

6. **isolateModules** - Confusing function I agree, but this will cover what exactly is the case where isolateModules is supposed to use

   - app/exercises/isolateModules/**tests**/moduleWithState.spec.tsx

7. **fakeTimers** - This allows you to control and manipulate the passage of time in your tests, making it possible to simulate delays, timeouts, and intervals for more predictable testing of time-dependent code.
   - app/exercises/fakeTimers/**tests**/timer.spec.ts
   - app/exercises/fakeTimers/**tests**/runAllTimers.spec.ts
   - app/exercises/fakeTimers/**tests**/runOnlyPendingTimers.spec.ts
   - app/exercises/fakeTimers/**tests**/expensiveOperation.spec.ts
