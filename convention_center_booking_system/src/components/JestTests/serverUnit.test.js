jest.mock('mysql2', () => ({
  createConnection: jest.fn().mockReturnThis(),
  connect: jest.fn((cb) => cb(null))
}));

// Assuming you have a function like `addCustomer` which uses the mysql2 connection
// This function should be the one your test is intended to cover.
const addCustomer = async () => {
  // Implementation that uses mysql2 to add a customer
};

describe('POST /add-customer', () => {
  it('should insert a new customer', async () => {
    const mockQuery = jest.fn()
      .mockImplementationOnce((sql, values, callback) => callback(null, [])) // Mocking SELECT query result (no customer found)
      .mockImplementationOnce((sql, values, callback) => callback(null, { insertId: 1 })); // Mocking INSERT query result

    // Mocking the connection object
    const mockConnection = {
      query: mockQuery
    };

    // Mocking the mysql2 module's functionality
    require('mysql2').createConnection.mockImplementation(() => mockConnection);

    // Call the function you are testing
    await addCustomer(); // Replace with actual call and parameters as needed

    // Assertions
    expect(mockQuery).toHaveBeenCalledTimes(2);
    // Add more assertions as needed to validate the behavior of addCustomer function
  });
});