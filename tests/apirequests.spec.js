import { test, expect } from '@playwright/test';
test('POST create new user', async ({ request }) => {
  const response = await request.post('https://jsonplaceholder.typicode.com/users', {
    data: {
      name: 'John Doe',
      username: 'johndoe',
      email: 'johndoe@example.com'
    }
  });
  expect(response.status()).toBe(201);
  const newUser = await response.json();
  expect(newUser.name).toBe('John Doe');
});

test('PUT update user data', async ({ request }) => {
  const response = await request.put('https://jsonplaceholder.typicode.com/users/1', {
    data: {
      name: 'Jane Doe'
    }
  });
  expect(response.status()).toBe(200);
  const updatedUser = await response.json();
  expect(updatedUser.name).toBe('Jane Doe');
});

test('DELETE user', async ({ request }) => {
  const response = await request.delete('https://jsonplaceholder.typicode.com/users/1');
  expect(response.status()).toBe(200);
});

test('GET user data with authentication', async ({ request }) => {
  const response = await request.get('https://api.example.com/protected-resource', {
    headers: {
      'Authorization': `Bearer YOUR_ACCESS_TOKEN`
    }
  });
  expect(response.status()).toBe(200);
});