// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateProject = `subscription OnCreateProject {
  onCreateProject {
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
export const onUpdateProject = `subscription OnUpdateProject {
  onUpdateProject {
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
export const onDeleteProject = `subscription OnDeleteProject {
  onDeleteProject {
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
export const onCreateUserProejcts = `subscription OnCreateUserProejcts {
  onCreateUserProejcts {
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
export const onUpdateUserProejcts = `subscription OnUpdateUserProejcts {
  onUpdateUserProejcts {
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
export const onDeleteUserProejcts = `subscription OnDeleteUserProejcts {
  onDeleteUserProejcts {
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
export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
