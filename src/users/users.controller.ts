import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

// Controllers receive specific http requests. Basically we can say that controller is where we will write our routes.

// @Controller is a decorator. Decorators are functions prefixed with '@' symbol. Decorators provide metadata and abstracts their functionality.

@Controller('users') // Handles /users route
export class UsersController {
  @Get() // Handles Get Request on /users route
  findAll() {
    return [];
  }

  @Post() // Handle Post request on /users route
  createUser(@Body() user: {}) {
    // For the createUser method to handle body in request, we have to use @Body decorator
    return user;
  }

  @Get(':id') // Handles /users/:id route
  findOne(@Param('id') id: string) {
    // For the findOne method to handle a request param, we have to use @Param decorator
    return { id };
  }

  // After a route that handles a param, we cannot add any other route with the same request method. For Example, the above route handles Get request at /users/:id. Now lets say after that route we create another route that handles a Get request at /users/fetch-all-users, the 'fetch-all-users' will be sent as a param to the /user/:id route. To solve this issue we have to keep dynamic routes at the bottom and all the static routes should be placed above it. So, in Nestjs controllers, the order matters.

  // @Get(':username') // This will not work because :username will be sent as param to the /users/:id route.
  // findUsername(@Param('username') username: string) {
  //   return { username };
  // }

  @Patch(':id') // This will work as the request method is different here
  updateUser(@Param('id') id: string, @Body() updatedUser: {}) {
    return {
      id,
      ...updatedUser,
    };
  }
}
