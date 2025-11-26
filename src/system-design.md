# Section 3 — System Design

Loom Link:
UML Diagram: https://lucid.app/lucidspark/efca548a-4b91-42cc-b9a8-fadefa52a514/edit?viewport_loc=-1123%2C-558%2C1960%2C1120%2C0_0&invitationId=inv_9ef2c6a9-3365-44b0-9792-b41cf1edba06 

## Notes:

Feel free to add any notes or planning here.


//Your system should be able to handle the following functionality:
  * A restaurant can manage the items in their menu

  ```js 
  addMenuItem(item)
  removeMenuItem(itemName)
  listMenuItem()
  
  //* A customer can place an order with items from the restaurant's menu
  placeOrder (restaurant, items)

  //* An order can be marked as "pending", "in progress", "picked up", or "delivered"
  default : pending

  markInProgress()
  markPickedUp()
  markDelivered()
* Your system must include at least three classes that are connected by relationships (associations), with at least one one-to-many relationship.
 
 1. Restaurant 
 2. MenuItem 
 3. Customer
 4. order

 
