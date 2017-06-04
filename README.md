# Imgur Search Abstraction Layer

## User Stories
1. I can get the image URLs or album urls relating to a given search string.
2. I can paginate through the responses by adding a ?offset=2 parameter to the URL.
3. I can get a list of the most recently submitted search strings.

## Example usage
`https://thepeted-imgur-search-abstract.herokuapp.com/search/grumpy%20cats`

`https://thepeted-imgur-search-abstract.herokuapp.com/search/lolcats?offset=2`

`https://thepeted-imgur-search-abstract.herokuapp.com/latest/`