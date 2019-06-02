// eslint-disable
// this is an auto generated file. This will be overwritten

export const createProject = `mutation CreateProject($input: CreateProjectInput!) {
  createProject(input: $input) {
    id
    title
    description
    master {
      id
      name
      email
      profilePicture
      projects {
        nextToken
      }
    }
    users {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const updateProject = `mutation UpdateProject($input: UpdateProjectInput!) {
  updateProject(input: $input) {
    id
    title
    description
    master {
      id
      name
      email
      profilePicture
      projects {
        nextToken
      }
    }
    users {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const deleteProject = `mutation DeleteProject($input: DeleteProjectInput!) {
  deleteProject(input: $input) {
    id
    title
    description
    master {
      id
      name
      email
      profilePicture
      projects {
        nextToken
      }
    }
    users {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const createUserProejcts = `mutation CreateUserProejcts($input: CreateUserProejctsInput!) {
  createUserProejcts(input: $input) {
    id
    users {
      id
      name
      email
      profilePicture
      projects {
        nextToken
      }
    }
    projects {
      id
      title
      description
      master {
        id
        name
        email
        profilePicture
      }
      users {
        nextToken
      }
    }
  }
}
`;
export const updateUserProejcts = `mutation UpdateUserProejcts($input: UpdateUserProejctsInput!) {
  updateUserProejcts(input: $input) {
    id
    users {
      id
      name
      email
      profilePicture
      projects {
        nextToken
      }
    }
    projects {
      id
      title
      description
      master {
        id
        name
        email
        profilePicture
      }
      users {
        nextToken
      }
    }
  }
}
`;
export const deleteUserProejcts = `mutation DeleteUserProejcts($input: DeleteUserProejctsInput!) {
  deleteUserProejcts(input: $input) {
    id
    users {
      id
      name
      email
      profilePicture
      projects {
        nextToken
      }
    }
    projects {
      id
      title
      description
      master {
        id
        name
        email
        profilePicture
      }
      users {
        nextToken
      }
    }
  }
}
`;
export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    name
    email
    profilePicture
    projects {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    name
    email
    profilePicture
    projects {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    id
    name
    email
    profilePicture
    projects {
      items {
        id
      }
      nextToken
    }
  }
}
`;
