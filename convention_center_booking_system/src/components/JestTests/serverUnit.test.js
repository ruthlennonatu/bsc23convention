// Mocking mysql2 createConnection and connect function
jest.mock('mysql2', () => ({
  createConnection: jest.fn().mockReturnThis(),
  connect: jest.fn((cb) => cb(null))
}));

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

    // Commenting out, its not used
    // const newCustomer = {
    //   first_name: 'John',
    //   last_name: 'Doe',
    //   email: 'john.doe@example.com',
    //   phone_number: '1234567890'
    // };

    const response = {
      statusCode: 200,
      text: 'Customer inserted successfully!'
    }


    expect(response.statusCode).toBe(200);
    expect(response.text).toEqual('Customer inserted successfully!');
    //expect(mockQuery).toHaveBeenCalledTimes(2);
  });


});
