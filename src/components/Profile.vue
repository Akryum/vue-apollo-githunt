<template>
  <span class="profile">
    <p className="navbar-text navbar-right">
      Loading...
    </p>
  </span>
</template>

<script>
import gql from 'graphql-tag'

const PROFILE_QUERY = gql`
  query CurrentUserForLayout {
    currentUser {
      login
      avatar_url
    }
  }
`

export default {
  name: 'Profile',

  apollo: {
    currentUser: PROFILE_QUERY,
  },
}
</script>
