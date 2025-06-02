// list() function - returns HTML string of clients as list items
function list(clientsArray) {
    return clientsArray.map(client => 
      `<li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
        ${client.name}
        <strong>$ ${client.balance.toFixed(2)}</strong>
      </li>`
    ).join('')
  }
  
  // order() function - sorts clients by specified property
  function order(clientsArray, property) {
    return [...clientsArray].sort((a, b) => {
      if (typeof a[property] === 'string') {
        return a[property].localeCompare(b[property])
      }
      return a[property] - b[property]
    })
  }
  
  // total() function - sums all balances
  function total(clientsArray) {
    return clientsArray.reduce((sum, client) => sum + client.balance, 0)
  }
  
  // info() function - returns client object by index
  function info(index) {
    return clients.find(client => client.index === index)
  }
  
  // search() function - filters clients by query in name
  function search(query) {
    const lowerQuery = query.toLowerCase()
    return clients.filter(client => client.name.toLowerCase().includes(lowerQuery))
  }
  